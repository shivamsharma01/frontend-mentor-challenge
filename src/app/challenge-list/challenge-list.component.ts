import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-challenge-list',
  imports: [RouterLink],
  templateUrl: './challenge-list.component.html',
  styleUrl: './challenge-list.component.css'
})
export class ChallengeListComponent {

  constructor(private titleService: Title) {
      this.titleService.setTitle('Frontend Mentor | Challenge List');
    }
}
