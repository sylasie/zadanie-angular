import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @Output()
  public filterList: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public urBasket: EventEmitter<object> = new EventEmitter<object>();

  public isFiltering = false;

  public basket = [];

  public totalCost = 0;

  private productsDB = [
    {
      'name' : 'jabłka',
      'background' : '1.jpg',
      'cost' : 60,
      'amount' : 100
    },
    {
      'name' : 'banany',
      'background' : '2.jpg',
      'cost' : 120,
      'amount' : 50
    },
    {
      'name' : 'pomarańcze',
      'background' : '3.jpg',
      'cost' : 340,
      'amount' : 10
    },
    {
      'name' : 'truskawki',
      'background' : '4.jpg',
      'cost' : 560,
      'amount' : 25
    }
  ];

  public products = this.productsDB;

  public filterListHandler(search) {

    if (!search || search === '') {
      this.products = this.productsDB;
    } else {
      this.isFiltering = true;
      this.products = this.productsDB.filter((row) => row.name.includes(search));
    }
  }

  public urBasketHandler(item) {
    let isInBasket = false;
    for (let i = 0; i < this.basket.length; i++) {
      if (this.basket[i].name === item.name) {
        isInBasket = true;
        this.basket[i].bought = this.basket[i].bought + 1;
      }
    }
    if (isInBasket === false) {
      item.bought = 1;
      this.basket.push(item);
    }

    this.sumCost();
  }

  public clearFilter() {
    this.isFiltering = false;
    this.products = this.productsDB;
  }

  public sumCost() {
    this.totalCost = 0;
    for (let i = 0; i < this.basket.length; i++) {
      this.totalCost = this.totalCost + (this.basket[i].bought * this.basket[i].cost);
    }
  }

  public updateBought(item) {
    if (!item.bought || item.bought === 0) {

    } else {
      for (let i = 0; i < this.basket.length; i++) {
        if (this.basket[i].name === item.name) {
          this.basket[i].bought = item.bought;
        }
      }
    }

    this.sumCost();
  }
}
