import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiProductUrl = environment.ProductApiUrl; // API base URL

  constructor(private http: HttpClient) { }

  // Get all products
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiProductUrl);
  }

  // Get a single product by id
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiProductUrl}/${id}`);
  }

  // Create a new product
  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiProductUrl, product);
  }

  // Update a product
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiProductUrl}/${id}`, product);
  }

  // Delete a product
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiProductUrl}/${id}`);
  }
}
