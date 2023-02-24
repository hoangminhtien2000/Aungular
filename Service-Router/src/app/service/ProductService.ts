import {Injectable} from '@angular/core';
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, "Người yêu Mạnh", "https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-5.jpg", 300),
    new Product(2, "Người yêu Sơn", "https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-09.jpg", 310)
  ]

  constructor() {
  }

  createProduct(product: Product): void {
    this.products.push(product);
  }

  editProduct(id2: number,productEdit:Product){
       this.products.splice(this.findIndexById(id2),1,productEdit);
  }

  findProductById(id: number): Product | undefined {
    for (const p of this.products) {
      if (p.id == id) {
        return p;
      }
    }
    return undefined;
  }

  findIndexById(index: number): number {
    for (let i = 0; i < this.products.length-1; i++) {
      if (this.products[i].id == index)
        return i;
    }
    return -1;
  }

}
