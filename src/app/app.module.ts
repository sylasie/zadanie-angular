import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomFilterComponent } from './custom-filter/custom-filter.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms';
import { BasketItemComponent } from './basket-item/basket-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomFilterComponent,
    ProductComponent,
    BasketItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
