import {Component, OnInit} from '@angular/core';
import {Blog} from "../../model/blog";
import {Router} from "@angular/router";
import {BlogService} from "../../service/BlogService";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  blogs: Blog[] = [];

  constructor(private blogService: BlogService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.blogService.getAll().subscribe(data => {
      this.blogs = data;
    });

  }

  delete(id: number) {
    this.blogService.delete(id).subscribe(() => {
      this.getAll();
    })
  }

}
