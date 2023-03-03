import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "./product/show/show.component";
import {CreateComponent} from "./product/create/create.component";
import {EditComponent} from "./product/edit/edit.component";


const routes: Routes = [
  {path:'show', component: ShowComponent},
  {path:'create', component: CreateComponent},
  {path:'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
