import {Subject} from 'rxjs/internal/Subject';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProductOrder} from '../models/product-order.model';
import {ProductOrders} from '../models/product-orders.model';
import {Product} from '../models/product.model';
import {ProductLang} from '../models/product-lang.model';

@Injectable()
export class EcommerceService {
    private productUrl = 'http://localhost:8080/starfood/products';
    private productLangUrl = 'http://localhost:8080/starfood/productLangs';
    private ordersUrl = 'http://localhost:8080/starfood/orders';

    private productOrder: ProductOrder;
    private orders: ProductOrders = new ProductOrders();

    private productOrderSubject = new Subject();
    private ordersSubject = new Subject();
    private totalSubject = new Subject();

    private total: number;

    ProductOrderChanged = this.productOrderSubject.asObservable();
    OrdersChanged = this.ordersSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    getAllProducts() {
      return this.http.get<Product[]>(this.productUrl);
    }

  getProductsByCategory(id) {
    return this.http.get<Product[]>(this.productUrl + '/ByCategory/' + id);
  }

    saveOrder(order: ProductOrders) {
        return this.http.post(this.ordersUrl, order);
    }

    set SelectedProductOrder(value: ProductOrder) {
        this.productOrder = value;
        this.productOrderSubject.next();
    }

    get SelectedProductOrder() {
        return this.productOrder;
    }

    set ProductOrders(value: ProductOrders) {
        this.orders = value;
        this.ordersSubject.next();
    }

    get ProductOrders() {
        return this.orders;
    }

    get Total() {
        return this.total;
    }

    set Total(value: number) {
        this.total = value;
        this.totalSubject.next();
    }

  getAllProductsLang() {
    return this.http.get<ProductLang[]>(this.productLangUrl);
  }

  getProductsByType(typeId: number) {
    return this.http.get<Product[]>(this.productUrl + '/ByTypeId/' + typeId);
  }
}
