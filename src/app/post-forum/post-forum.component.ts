import { Component, Input, OnInit } from '@angular/core';
import { ForumDataService } from '../forum-data.service';
import { CommonModule } from '@angular/common';
import { UserHeaderComponent } from "../user-header/user-header.component";

@Component({
    selector: 'app-post-forum',
    standalone: true,
    templateUrl: './post-forum.component.html',
    styleUrl: './post-forum.component.css',
    imports: [CommonModule, UserHeaderComponent]
})
export class PostForumComponent {
  posts: { tags: string[]; descricao: string; }[] | undefined;

  constructor(private forumDataService: ForumDataService) {}

  ngOnInit(): void {
    // Aqui, você pode obter os posts do serviço ao inicializar o componente
    this.posts = this.forumDataService.getPosts();
  }
}
