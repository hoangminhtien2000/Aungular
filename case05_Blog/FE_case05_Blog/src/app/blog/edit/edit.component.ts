import { Component } from '@angular/core';
import {Blog} from "../../model/blog";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService} from "../../service/BlogService";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id: any;
  blog: any;
  formEdit !: FormGroup;
  // like3!: number;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.blogService.findById(+this.id).subscribe((data) => {
        this.blog = data;
        this.blog.comments=data.comments;
        console.log(this.blog)
        this.formEdit = new FormGroup({
          id_blog: new FormControl(this.blog?.id_blog),
          name_blog: new FormControl(this.blog?.name_blog),
          content: new FormControl(this.blog?.content),
          content_full: new FormControl(this.blog?.content_full),
          img_blog: new FormControl(this.blog?.img_blog),
          like1: new FormControl(this.blog?.like1),
           category: new FormControl(this.blog?.category.id_category),
          // category: new FormGroup({
          //   id_category: new FormControl(this.blog?.category?.id_category)
          // }),
          // comments: new FormControl(this.blog?.comments),
          // comments: new FormGroup({
          //   id_comments: new FormControl(this.blog?.comments[0]?.id_comments),
          //   content_comment: new FormControl(),
          // }),
        })
        // console.log(this.formEdit.value.category);
      })
    }
  }

  edit(){
    console.log(this.blog)
    this.blogService.editBlog(this.blog).subscribe((data) => {
      this.router.navigate(["/show"]);
    })
  }


}
