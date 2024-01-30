import { ForumDataService } from './../forum-data.service';
import { Component, OnInit } from '@angular/core';
import { Forum2Component } from "../forum2/forum2.component";
import { PostForumComponent } from "../post-forum/post-forum.component";
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';
import { PostComponent } from "../post/post.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PostForumComponent, CommonModule, Forum2Component, PostComponent]
})
export class HomeComponent implements OnInit {

    forumPost: string[] = [];

    constructor(private Forum:ForumDataService){}

    ngOnInit(): void {
        this.forumPost = this.Forum.getPosts()
    }

}
