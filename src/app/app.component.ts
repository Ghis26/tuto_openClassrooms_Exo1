import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

 @Input() posts = [
    {
      title: "mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus neque, luctus sed sapien vulputate, scelerisque pulvinar magna. Integer ullamcorper nibh sit amet arcu facilisis placerat. ",
      loveIts:0,
      created_at: Date()
    },
    {
      title: "mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus neque, luctus sed sapien vulputate, scelerisque pulvinar magna. Integer ullamcorper nibh sit amet arcu facilisis placerat. ",
      loveIts:0,
      created_at: Date()
    },
    {
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus neque, luctus sed sapien vulputate, scelerisque pulvinar magna. Integer ullamcorper nibh sit amet arcu facilisis placerat. ",
      loveIts:0,
      created_at: Date()
    }
  ];

  constructor(){
  }

}
