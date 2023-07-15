import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "../model/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {

  }

  createBlog(blog:any): Observable<any> {
    return this.http.post<any>("http://localhost:8080/blogs", blog);
  }

  getAll() :Observable<Blog[]>{
    return this.http.get<Blog[]>("http://localhost:8080/blogs");
  }

  delete(id:number) :Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/blogs/${id}`);
  }

  findById(id:number) :Observable<Blog>{
    return this.http.get<Blog>(`http://localhost:8080/blogs/${id}`);
  }

  editBlog(blog: Blog): Observable<Blog> {
    return this.http.put<Blog>("http://localhost:8080/blogs", blog);
  }


}
