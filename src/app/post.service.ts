import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PostComponent } from './post/post.component';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new Subject<any[]>();

  private posts = [
    {
      title: "mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus neque, luctus sed sapien vulputate, scelerisque pulvinar magna. Integer ullamcorper nibh sit amet arcu facilisis placerat. ",
      loveIts: 0,
      created_at: Date()
    },
    {
      title: "mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus neque, luctus sed sapien vulputate, scelerisque pulvinar magna. Integer ullamcorper nibh sit amet arcu facilisis placerat. ",
      loveIts: 0,
      created_at: Date()
    },
    {
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus neque, luctus sed sapien vulputate, scelerisque pulvinar magna. Integer ullamcorper nibh sit amet arcu facilisis placerat. ",
      loveIts: 0,
      created_at: Date()
    }
  ];

  constructor() { }

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string) {
    const postObject = {
      title: '',
      content : '',
      loveIts : 0,
      created_at: Date()
    };

    postObject.title = title;
    postObject.content = content;
    this.posts.push(postObject);
    this.emitPostSubject();
  }

  

  deletePost(post: any) {
    var index = this.posts.indexOf(post);
    if (index > -1) {
      this.posts.splice(index, 1);
      this.emitPostSubject();
    }

  }
}


