import {CategoryLang} from './category-lang.model';

export class Category {

  categoryId: number;
  statusId: number;
  categoryLangsByCategoryId: CategoryLang[];
}
