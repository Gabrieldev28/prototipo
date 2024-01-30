import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Carousel2Component } from "./carousel2/carousel2.component";
import { GarageComponent } from "./garage/garage.component";
import { PostComponent } from "./post/post.component";
import { FormsModule } from '@angular/forms';
import { Forum2Component } from './forum2/forum2.component';
import { PostForumComponent } from "./post-forum/post-forum.component";
import { ForumDataService } from './forum-data.service';
import { HomeComponent } from "./home/home.component";




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [ForumDataService],
    imports: [CommonModule, RouterOutlet, Carousel2Component, GarageComponent, PostComponent, FormsModule, Forum2Component, PostForumComponent, HomeComponent]
})
export class AppComponent {
  title = 'carousel-app';

}
