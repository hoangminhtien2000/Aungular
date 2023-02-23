import { Component } from '@angular/core';
import {Product} from "../../model/Product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/ProductService";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  id: any;
  product: Product | undefined;
  formCreate !: FormGroup;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
      this.formCreate = new FormGroup({
        id: new FormControl(this.product?.id, [Validators.required,Validators.max(50)]),
        name: new FormControl(this.product?.name),
        img: new FormControl(this.product?.img),
        price: new FormControl(this.product?.price),
      })
    }

  create(){
    this.productService.createProduct(this.formCreate.value);

  }

}
