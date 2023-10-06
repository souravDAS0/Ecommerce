import { HttpClient } from '@angular/common/http';
import { Injectable, reflectComponentType } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  addProduct(data: Product) {
    return this.httpClient.post('http://localhost:3000/products', data);
  }

  getproduct() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`http://localhost:3000/products/${id}`);
  }

  getProductById(id: string) {
    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(product: Product) {
    return this.httpClient.put(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }

  getPopularProducts() {
    return this.httpClient.get<Product[]>(
      'http://localhost:3000/products?_limit=3'
    );
  }
}
