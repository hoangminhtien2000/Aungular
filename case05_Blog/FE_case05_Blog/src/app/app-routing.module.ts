import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "./blog/show/show.component";
import {CreateComponent} from "./blog/create/create.component";
import {EditComponent} from "./blog/edit/edit.component";
import {ShowDetailBlogComponent} from "./blog/show-detail-blog/show-detail-blog.component";

const routes: Routes = [
  {path:'show',component: ShowComponent},
  {path:'create',component: CreateComponent},
  {path:'edit/:id',component: EditComponent},
  {path:'showdetailblog/:id',component: ShowDetailBlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
