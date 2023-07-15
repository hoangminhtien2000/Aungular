import {Component, OnInit} from '@angular/core';
import {Blog} from "../../model/blog";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService} from "../../service/BlogService";

@Component({
  selector: 'app-show-detail-blog',
  templateUrl: './show-detail-blog.component.html',
  styleUrls: ['./show-detail-blog.component.css']
})
export class ShowDetailBlogComponent implements OnInit{
  id: any;
  blog: Blog | undefined;
  formDetailBlog !: FormGroup;
  like3!: number;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.blogService.findById(+this.id).subscribe((data) => {
        this.blog = data;
        console.log(this.formDetailBlog.value.comments);
      })
    }
  }


}
