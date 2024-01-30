// forum-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumDataService {
  private forumPosts: { tags: string[], descricao: string }[] = [];

  addPost(forumPost: { tags: string[], descricao: string }): void {
    this.forumPosts.push(forumPost);
  }

  getPosts(): { tags: string[], descricao: string }[] {
    return this.forumPosts;
  }

  clearPosts(): void {
    this.forumPosts = [];
  }
}
