import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './postlist/postlist.component';
import { PostListItemComponent } from './postlistitem/postlistitem.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PostListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
