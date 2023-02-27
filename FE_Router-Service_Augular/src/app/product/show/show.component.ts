import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/ProductService";
import {Product} from "../../model/Product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => {
     this.getAll();
    })
  }

}
