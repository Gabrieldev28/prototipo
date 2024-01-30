import { Injectable } from '@angular/core';

interface ObjetoPostForum{
  tags: string[];
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class ObjetoForumService {
  ObjetoTagDescricao(tags: string[], descricao: string): ObjetoPostForum {
    return {
      tags,
      descricao
    };
  }

  constructor() { }
}
