import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../model/Product";
import {ProductService} from "../../service/ProductService";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id: any;
  product: Product | undefined;
  formEdit !: FormGroup;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id!= null){
      this.product = this.productService.findProductById(+this.id);

      this.formEdit = new FormGroup({
        id: new FormControl(this.product?.id, [Validators.required,Validators.max(50)]),
        name: new FormControl(this.product?.name),
        img: new FormControl(this.product?.img),
        price: new FormControl(this.product?.price),
      })
    }
  }

  edit(){
    this.productService.editProduct(+this.id,this.formEdit.value);
  }



}
