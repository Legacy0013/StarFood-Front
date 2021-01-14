import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NavComponent} from './components/nav/nav.component';
import {ProductService} from './components/product/product.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CategoryComponent} from './components/category/category.component';
import {CategoryService} from './components/category/category.service';
import {EcommerceService} from './services/EcommerceService';
import {ProductComponent} from './components/product/product.component';
import {OrdersComponent} from './components/orders/orders.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {EcommerceComponent} from './components/ecommerce.component';
import { MenuComponent } from './components/menu/menu.component';
import {MenuService} from './components/menu/menu.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    CategoryComponent,
    MenuComponent,
    OrdersComponent,
    ShoppingCartComponent,
    EcommerceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [CategoryService, ProductService, MenuService, EcommerceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
