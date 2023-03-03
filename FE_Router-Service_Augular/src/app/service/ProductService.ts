import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:8080/products", product);
  }

  getAll() :Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8080/products");
  }

  delete(id:number) :Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/products/${id}`);
  }

  findById(id:number) :Observable<Product>{
    return this.http.get<Product>(`http://localhost:8080/products/${id}`);
  }

  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>("http://localhost:8080/products", product);
  }


}
