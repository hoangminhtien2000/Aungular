import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './blog/create/create.component';
import { ShowComponent } from './blog/show/show.component';
import { EditComponent } from './blog/edit/edit.component';
import { HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ShowDetailBlogComponent } from './blog/show-detail-blog/show-detail-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ShowComponent,
    EditComponent,
    ShowDetailBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
