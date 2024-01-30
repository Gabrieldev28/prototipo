
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForumDataService } from '../forum-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forum2.component.html',
  styleUrl: './forum2.component.css'
})

export class Forum2Component {
  tags: string[] = [];
  tagInput: string = '';
  descricao: string = '';
  objForum: {
    tags: string[],
    descricao: string
  } = {
    tags: this.tags,
    descricao: this.descricao
  };
  

  constructor(private forumDataService: ForumDataService) {}

  adicionarTag(): void {
    if (this.tagInput.trim() !== '') {
      this.tags.push(this.tagInput.trim());
      this.tagInput = ''; // Limpa o input após adicionar a tag
    }
  }

  publicar(): void {
    // Crie o objeto com as tags e descrição
    const dadosForum = { tags: this.tags, descricao: this.descricao };
    
    // Use o serviço para adicionar o post ao fórum
    this.forumDataService.addPost(dadosForum);

    // Limpe as tags e descrição após publicar
    this.tags = [];
    this.descricao = '';
    alert(this.tags);
  }
}
