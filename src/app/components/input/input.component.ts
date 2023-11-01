import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemASerEditado!: Item;
  valorItem!: string;
  
  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }

  ngOnInit(): void { }

  // .FIRSTCHANGE é caso o primeiro valor, valor inicial
  ngOnChanges(changes: SimpleChanges): void {
    const itm: Item = changes['itemASerEditado'].currentValue;
    if(!changes['itemASerEditado'].firstChange){
      this.valorItem = itm.nome
    }
  }

  adicionaItems(): void {
    console.log("MOSTRA ITEM: " + this.valorItem)
    this.listaDeCompraService.adicionaItemLista(this.valorItem);
    this.limpaCampo();
  }

  limpaCampo(): void{
    this.valorItem = '';
  }

}
