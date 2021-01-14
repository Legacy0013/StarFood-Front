import {Component, Input, OnInit} from '@angular/core';

import {Subscription} from 'rxjs/internal/Subscription';
import {ProductOrder} from '../../models/product-order.model';
import {Product} from '../../models/product.model';
import {ProductOrders} from '../../models/product-orders.model';
import {EcommerceService} from '../../services/EcommerceService';
import {ProductLang} from '../../models/product-lang.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected = false;
  selectedProduct: Product = new Product();
  lang = 1;
  productLangs: ProductLang[];
  productsByProductType: Product[];
  sideProducts: Product[];
  drinkProducts: Product[];


  @Input()
  selectedCategory: number;
  selectedType: number;



  constructor(private ecommerceService: EcommerceService) {
  }

  ngOnInit() {
    this.productOrders = [];
    // this.loadProducts();
    this.loadProductsbyCategory(this.selectedCategory);
    this.loadSideProducts();
    this.loadDrinkProducts();
    this.loadOrders();
    // this.loadProductsLang();

  }

  addToCart(order: ProductOrder) {
    order.quantity = 1;
    this.ecommerceService.SelectedProductOrder = order;
    this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
    this.productSelected = true;
  }

  getProductLangShtDescByProductId(productId: number, ) {
    for (let pdtLang of this.productLangs) {
      if (productId === pdtLang.productId && this.lang === pdtLang.langId) {
        return pdtLang.productLangShortDescription;
      }
    }
  }

  removeFromCart(productOrder: ProductOrder) {
    const index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);
    }
    this.ecommerceService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    this.productSelected = false;
  }

  getProductIndex(product: Product): number {
    return this.ecommerceService.ProductOrders.productOrders.findIndex(
      value => value.product === product);
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

  loadProducts() {
    this.ecommerceService.getAllProducts()
      .subscribe(
        (products: any[]) => {
          this.products = products;
          this.products.forEach(product => {
            this.productOrders.push(new ProductOrder(product, 0));
          });
        },
        (error) => console.log(error)
      );
  }

  loadProductsbyCategory(id) {
    if (id) {
      this.ecommerceService.getProductsByCategory(id)
        .subscribe(
          (products: any[]) => {
            this.products = products;
            this.products.forEach(product => {
              this.productOrders.push(new ProductOrder(product, 0));
            });
          },
          (error) => console.log(error)
        );
    } else {
      this.loadProducts();
    }
  }

  loadOrders() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    });
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.ecommerceService.ProductOrders.productOrders = [];
    this.loadOrders();
    // this.productSelected = false;
  }

  getSelectedProduct(product: Product) {
    this.selectedProduct = product;
  }

  private loadProductsLang() {
    this.ecommerceService.getAllProductsLang()
      .subscribe(data => {
        this.productLangs = data;
      });
  }

  private loadProductsByTypeId(typeId: number) {
    this.ecommerceService.getProductsByType(typeId)
      .subscribe(data => {
        this.productsByProductType = data;
      });
  }
  private loadSideProducts() {
    this.ecommerceService.getProductsByType(2)
      .subscribe(data => {
        this.sideProducts = data;
      });
  }
  private loadDrinkProducts() {
    this.ecommerceService.getProductsByType(3)
      .subscribe(data => {
        this.drinkProducts = data;
      });
  }

  banane(side: Product) {
    this.addToCart(new ProductOrder(side, 1));
  }
}
