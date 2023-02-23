import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/ProductService";
import {Product} from "../../model/Product";
import {ActivatedRoute} from "@angular/router";

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
    this.products = this.productService.products;
  }


  delete(){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(+this.id);
  }


}
