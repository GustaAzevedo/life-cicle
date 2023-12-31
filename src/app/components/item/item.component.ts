import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() item!: Item;
  @Output() emitindoItemEditar = new EventEmitter<Item>();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }
 
  ngOnInit(): void { }

  ngOnChanges(): void {
  }

  editarItem(): void{
    this.emitindoItemEditar.emit(this.item)
  }
}
