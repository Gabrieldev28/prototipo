import { Routes } from '@angular/router';
import { Forum2Component } from './forum2/forum2.component';
import { PostForumComponent } from './post-forum/post-forum.component';

export const routes: Routes = [
    { path: 'seu-componente', component: Forum2Component },
    { path: 'novo-componente', component: PostForumComponent },
];
