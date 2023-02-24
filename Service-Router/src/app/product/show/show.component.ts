import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/ProductService";
import {Product} from "../../model/Product";
import {ActivatedRoute} from "@angular/router";
declare var $:any;
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  id: any;
  products: Product[] = [];
  constructor(private route: ActivatedRoute,private productService:ProductService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.products = this.productService.products;
  }


  delete(id:number){
   this.products.splice(this.productService.findIndexById(id),1);
  }


}
