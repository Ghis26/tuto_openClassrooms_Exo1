import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './postlist/postlist.component';
import { PostListItemComponent } from './postlistitem/postlistitem.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RouterModule } from '@angular/router';
import { PostService } from './post.service';
import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    RouterModule
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
