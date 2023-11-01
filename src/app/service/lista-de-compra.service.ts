import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": true
    },
  ]

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeItem: string): Item{
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeItem,
      comprado: false,
      data: new Date().toLocaleDateString('pt-BR')
    }
    return item;
  }

  adicionaItemLista(nomeItem: string): void{
    const item: Item = this.criarItem(nomeItem);
    this.listaDeCompra.push(item);
  }
}
