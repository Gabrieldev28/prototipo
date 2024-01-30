import { Component } from '@angular/core';
import { Carousel2Component } from '../carousel2/carousel2.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-garage',
  standalone: true,
  imports: [Carousel2Component,CommonModule],
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.css'
})
export class GarageComponent {
  meuHonda:string[] = [
    '../assets/garage/honda/honda1.png',
    '../assets/garage/honda/honda2.png',
    '../assets/garage/honda/honda3.png',
    '../assets/garage/honda/honda4.png',
    '../assets/garage/honda/honda5.png',
  ];
  minhaDucati: string[] = [
    '../assets/garage/ducati/ducati1.jpg',
    '../assets/garage/ducati/ducati2.jpg',
    '../assets/garage/ducati/ducati3.jpg',
    '../assets/garage/ducati/ducati4.jpg',
    '../assets/garage/ducati/ducati5.jpg',
  ]
  comentarios = [
    {
      titulo: 'Motor Aprimorado:',
      texto: 'O coração deste Civic EJ8 pulsa com uma potência refinada. Um projeto de motorização meticuloso foi realizado, incorporando componentes de alta qualidade para proporcionar uma entrega de potência suave e responsiva. Pistões forjados e um novo sistema de admissão de alto fluxo são apenas alguns dos elementos que elevam este motor a um nível superior de desempenho.'
    },
    {
      titulo: 'Pintura Personalizada:',
      texto: 'A estética deste Civic é uma obra-prima em movimento. Uma pintura personalizada única redefine a aparência do veículo, destacando suas curvas e linhas. A combinação de tons, rica em profundidade, não é apenas visualmente deslumbrante, mas uma declaração de estilo. Cada camada de tinta é uma expressão de arte automotiva, elevando o visual deste EJ8 a um patamar de elegância incomparável.'
    },
    {
      titulo: 'Suspensão Esportiva:',
      texto: 'A suspensão deste Civic EJ8 foi cuidadosamente ajustada para oferecer uma condução mais esportiva. Molas e amortecedores esportivos proporcionam não apenas um visual mais agressivo, mas também uma resposta mais firme nas curvas. Esta atualização transforma o EJ8 em uma máquina ágil, garantindo uma experiência de direção mais envolvente e emocionante.'
    }
  ];

  mostrarTextoCompleto: boolean[] = [false, false, false];
meuGol: any;

  toggleTextoCompleto(index: number) {
    this.mostrarTextoCompleto[index] = !this.mostrarTextoCompleto[index];
  }
}
