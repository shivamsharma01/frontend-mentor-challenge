import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-preview',
  imports: [],
  templateUrl: './ticket-preview.component.html',
  styleUrls: ['./ticket-preview.component.css', '../conference-ticket.css'],
})
export class TicketPreviewComponent {
  name: string = 'Jonatan Kristof';
  email: string = 'Jonatan@gmail.com';
  githubId: string = 'jonatankristof0101';
}
