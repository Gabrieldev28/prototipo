import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel2',
  standalone: true,
  imports: [],
  templateUrl: './carousel2.component.html',
  styleUrl: './carousel2.component.css'
})
export class Carousel2Component {
  
  @Input() fotos: string[] = [];
    slideIndex = 0;
  
    anterior() {
      this.slideIndex = (this.slideIndex === 0) ? this.fotos.length - 1 : this.slideIndex - 1;
    }
  
    proximo() {
      this.slideIndex = (this.slideIndex === this.fotos.length - 1) ? 0 : this.slideIndex + 1;
    }
}
