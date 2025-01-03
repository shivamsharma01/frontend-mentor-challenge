import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css', '../conference-ticket.css'],
})
export class MainPageComponent {}
