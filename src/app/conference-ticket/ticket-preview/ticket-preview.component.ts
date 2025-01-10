import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-preview',
  imports: [],
  templateUrl: './ticket-preview.component.html',
  styleUrls: ['./ticket-preview.component.css', '../conference-ticket.css'],
})
export class TicketPreviewComponent {
  route = inject(ActivatedRoute);
  location = inject(Location);
  name: string = 'Jonatan Kristof';
  email: string = 'Jonatan@gmail.com';
  githubId: string = 'jonatankristof0101';
  image: string = '/assets/conference-ticket-generator/images/image-avatar.jpg';
  
  ngOnInit() {
    const navigation = this.location.getState() as any;
    if (navigation) {
      this.name = navigation['name'];
      this.githubId = navigation['id'];
      this.email = navigation['email'];
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result as string;
      };
      reader.readAsDataURL(navigation['image']);
    }
  }
}
