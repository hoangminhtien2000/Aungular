import { Component } from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product:Product = new Product(0,"0","0",0);

  products: Product[] = [
    new Product(1,"Người yêu Mạnh","https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-5.jpg",300),
    new Product(2,"Người yêu Sơn","https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-09.jpg",310)]

  constructor() { }

  createProduct(){
    let productNew = new Product(this.product.id,this.product.name,this.product.img,this.product.price);
    this.products.push(productNew);
  }

 findProduct(index: number): number{
   for (let i = 0; i < this.products.length; i++) {
     if (this.products[i].id==index)
       return  i;
   }
    return -1;
  }

  deleteProduct(id: number){
    let index1= this.findProduct(id);
    this.products.splice(index1,1);
  }

  showEdit(id1: number){
    let index2= this.findProduct(id1);
    this.product=this.products[index2];
  }

  editProduct(id2: number){
    let productEdit = new Product(this.product.id,this.product.name,this.product.img,this.product.price);
    this.products.splice(this.findProduct(id2),1,productEdit);
  }
}
