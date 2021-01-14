import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../../models/menu.model';
import {Product} from '../../models/product.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) {
  }

  private menuUrl = 'http://localhost:8080/starfood/menus';
  private productUrl = 'http://localhost:8080/starfood/products';

  public getProducts() {
    return this.http.get<Product[]>(this.productUrl);
  }

  public getMenus() {
    return this.http.get<Menu[]>(this.menuUrl);
  }
}
