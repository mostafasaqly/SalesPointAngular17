import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { Category, ProductCategory } from '../Model/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  CategoryApiUrl:string = environment.CategoryApiUrl;
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  GetAllCategory():Observable<Category[]> {
    return this.http.get<Category[]>(this.CategoryApiUrl);
  }
  CreateCategory(category:Category):Observable<Category>
  {
    return this.http.post<Category>(this.CategoryApiUrl, category, this.httpOptions);
  }
  GetCategoryById(id : number) : Observable<Category>
  {
    return this.http.get<Category>(`${this.CategoryApiUrl}/${id}`);
  }
  UpdateCategory(id:number,category:Category) : Observable<Category>
  {
    return this.http.put<Category>(`${this.CategoryApiUrl}/${id}`, category, this.httpOptions);
  }
  DeleteCategory(id:number) : Observable<void>
  {
    return this.http.delete<void>(`${this.CategoryApiUrl}/${id}`);
  }

  getProductsByCategory(id: number): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(`${this.CategoryApiUrl}/${id}/products`);
  }

}
