import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Carousel2Component } from '../carousel2/carousel2.component';
import { UserHeaderComponent } from "../user-header/user-header.component";

@Component({
    selector: 'app-post',
    standalone: true,
    templateUrl: './post.component.html',
    styleUrl: './post.component.css',
    imports: [CommonModule, Carousel2Component, UserHeaderComponent]
})
export class PostComponent {

  comentario:string = "Esse Gol Quadrado da VW é puro estilo! Com suas linhas retas, representa a essência das ruas. Motorização firme, design clássico, é um hit nas pistas. Cada curva conta uma história, é o som das ruas, uma lenda que nunca perde o flow."
  mostrarTextoCompleto: boolean = false;
  meuGol:string[] = [
    '../assets/post/gol-quadrado/gol1.jpg',
    '../assets/post/gol-quadrado/gol2.jpg',
    '../assets/post/gol-quadrado/gol3.jpg',
    '../assets/post/gol-quadrado/gol4.jpg',
    '../assets/post/gol-quadrado/gol5.jpg',
  ];

  toggleTextoCompleto(): void {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
  }
}
