import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-page',
  imports: [],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent {
  titleService = inject(Title);

  ngOnInit() {
    this.titleService.setTitle("Frontend Mentor | Recipe page");
  }
}
