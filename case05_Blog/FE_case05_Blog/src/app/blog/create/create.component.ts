import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BlogService} from "../../service/BlogService";
import {Router} from "@angular/router";
import {Blog} from "../../model/blog";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id: any;
  blog: Blog | undefined;
  formDetailBlog !: FormGroup;
  formCreate !: FormGroup;

  constructor(private blogService: BlogService, private router: Router) {
  }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id_blog: new FormControl(this.blog?.id_blog),
      name_blog: new FormControl(this.blog?.name_blog),
      content: new FormControl(this.blog?.content),
      content_full: new FormControl(this.blog?.content_full),
      img_blog: new FormControl(this.blog?.img_blog),
      like1: new FormControl(this.blog?.like1),
      category: new FormGroup({
        id_category: new FormControl()
      }),
      comments: new FormControl([])
    })
  }


  create() {
    console.log(this.formCreate.value);
    this.blogService.createBlog(this.formCreate.value).subscribe((data) => {
      // this.router.navigate(["/show"]);
    })
  }
}
