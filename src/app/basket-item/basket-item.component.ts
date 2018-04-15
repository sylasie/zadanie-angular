import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})
export class BasketItemComponent implements OnInit {

  @Input() name: string;
  @Input() cost: number;
  @Input() bought: number;

  @Output()
  public updateBought: EventEmitter<object> = new EventEmitter<object>();


  constructor() { }

  ngOnInit() {
  }

  amountUpdate() {
    let newItem = {
      'name' : this.name,
      'cost' : this.cost,
      'bought' : this.bought,
    };

    this.updateBought.emit(newItem);
  }
}
