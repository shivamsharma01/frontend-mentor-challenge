import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css', '../conference-ticket.css'],
})
export class MainPageComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Frontend Mentor | Conference ticket generator');
  }
}
