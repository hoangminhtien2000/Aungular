import { Component } from '@angular/core';
import {Product} from "../model/Product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {stringifyTask} from "@angular/compiler-cli/ngcc/src/execution/tasks/utils";
declare var $:any;

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

  // createProduct(){
  //   let index1;
  //   if(this.products.length<=0){
  //     index1=1;
  //   }
  //   else {
  //     index1=this.products[this.products.length-1].id+1;
  //   }
  //   let productNew = new Product(index1,this.product.name,this.product.img,this.product.price);
  //   this.products.push(productNew);
  // }

 findProduct(index: number): number{
   for (let i = 0; i < this.products.length; i++) {
     if (this.products[i].id==index)
       return  i;
   }
    return -1;
  }

 //  deleteProduct(id: number){
 //    let index1= this.findProduct(id);
 //    this.products.splice(index1,1);
 //  }
 //

  showEdit(id1: number){
    let index2= this.findProduct(id1);
    this.product=this.products[index2];
    console.log(this.product)
  }
 //
 //  editProduct(id2: number){
 //    let productEdit = new Product(this.product.id,this.product.name,this.product.img,this.product.price);
 //    this.products.splice(this.findProduct(id2),1,productEdit);
 //    this.product=new Product(0,"0","0",0);;
 //  }

// Angular form

  formCreate : FormGroup = new FormGroup({
    id: new FormControl("0", [Validators.required,Validators.max(50)]),
    name: new FormControl("0"),
    img: new FormControl("0"),
    price: new FormControl("0"),
  })

  createProduct(){
    this.products.push(this.formCreate.value);
    $('#myModal').modal('hide');

  }

  deleteProduct(id: number){
    let index1= this.findProduct(id);
       this.products.splice(index1,1);
  }

  formEdit : FormGroup = new FormGroup({
    id: new FormControl(this.product.id, [Validators.required,Validators.max(50)]),
    name: new FormControl(this.product.name),
    img: new FormControl(this.product.img),
    price: new FormControl(this.product.price),
  })

   editProduct(){
    let productEdit:Product=new Product(0,"0","0",0);
    if(this.formEdit.value.id==0){
      console.log(productEdit.id)
      productEdit.id=this.product.id;
      console.log(productEdit.id)
    }
     this.products.splice( this.findProduct(this.formEdit.value.id),1,productEdit)
     $('#edit').modal('hide');

   }


}
