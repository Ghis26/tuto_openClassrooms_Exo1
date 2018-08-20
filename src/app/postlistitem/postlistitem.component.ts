import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostListItemComponent implements OnInit {

@Input() post;
  
  constructor(private postService: PostService) { }

  ngOnInit() {

  }

  addLoveIt(){
    this.post.loveIts = this.post.loveIts +1;
 }

  removeLoveIt(){
    this.post.loveIts = this.post.loveIts -1;
  }

  deletePost(post){
    this.postService.deletePost(post);
  }


}
