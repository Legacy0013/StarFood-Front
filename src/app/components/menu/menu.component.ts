import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Menu} from '../../models/menu.model';
import {MenuService} from './menu.service';
import {Product} from '../../models/product.model';
import {ProductService} from '../product/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: Menu[];
  products: Product[];
  selectedMenu: Menu = new Menu();

  constructor(private router: Router, private menuService: MenuService, private productService: ProductService) { }

  ngOnInit() {
    this.menuService.getMenus()
      .subscribe( data => {
        this.menus = data;
      });

    this.productService.getProducts()
      .subscribe( data => {
        this.products = data;
      });
  }

  getSelectedMenu(menu: Menu) {
    this.selectedMenu = menu;
  }
}
