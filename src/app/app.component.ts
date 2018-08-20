import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;

  constructor() {
  }

  ngOnInit() {
  }

}
