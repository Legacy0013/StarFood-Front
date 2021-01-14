import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import {MenuComponent} from './components/menu/menu.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'products/byCategory/:id', component: ProductComponent},
  { path: 'categories', component: CategoryComponent },
  { path: 'menus', component: MenuComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
