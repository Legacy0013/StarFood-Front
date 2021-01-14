import {ProductLang} from './product-lang.model';

export class Product {

  productId: number;
  productPrice: number;
  tvaId: number;
  statusId: number;
  categoryId: number;
  productTypeId: number;
  productLangsByProductId: ProductLang[];

}
