import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-msg',
  imports: [],
  templateUrl: './field-msg.component.html',
  styleUrls: ['./field-msg.component.css', '../conference-ticket.css'],
})
export class FieldMsgComponent {
  @Input('msg') msg!: string;
  @Input('isError') isError: boolean = false;
}
