import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostListItemComponent implements OnInit {

 @Input() post;
  
  constructor() { }

  ngOnInit() {
  }

  addLoveIt(){
   this.post.loveIts = this.post.loveIts +1;
  }

  removeLoveIt(){
    this.post.loveIts = this.post.loveIts -1;
  }
}
