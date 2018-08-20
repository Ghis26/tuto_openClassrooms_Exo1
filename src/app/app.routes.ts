import { Routes } from '@angular/router';

import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './postlist/postlist.component';

export const appRoutes: Routes = [
    {path: 'posts', component: PostListComponent},
    {path:'new', component:NewPostComponent},
    {path: ' ', redirectTo:'posts'}
];