import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';
  listaDeCompra: Array<Item> = new Array<Item>();
  iteParaSerEditado! : Item;

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }

  ngOnInit(): void {
    this.listaDeCompra = this.listaDeCompraService.getListaDeCompra()
  }

  editaItem(item: Item): void{
    this.iteParaSerEditado = item;
  }
}
