import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output()
  public urBasketChange: EventEmitter<object> = new EventEmitter<object>();

  @Input() name: string;
  @Input() background: string;
  @Input() cost: number;
  @Input() amount: number;



  constructor() { }

  ngOnInit() {
  }


  public addToBasket() {
    let newItem = {
      'name' : this.name,
      'background' : this.background,
      'cost' : this.cost,
      'amount' : this.amount
    };

    console.log('lol change basket', newItem);

    this.urBasketChange.emit(newItem);
  }
}
