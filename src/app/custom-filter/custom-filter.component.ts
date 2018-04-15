import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.css']
})
export class CustomFilterComponent implements OnInit {

  public searchName: string;

  @Output()
  public filterListChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  public search() {
    console.log('lol');
    this.filterListChange.emit(this.searchName);
  }

}
