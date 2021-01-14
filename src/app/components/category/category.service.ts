import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../../models/category.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  private categorytUrl = 'http://localhost:8080/starfood/categories';

  public getCategories() {
    return this.http.get<Category[]>(this.categorytUrl);
  }
}
