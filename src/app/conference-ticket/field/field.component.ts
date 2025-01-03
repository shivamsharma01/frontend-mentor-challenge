import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FieldMsgComponent } from '../field-msg/field-msg.component';

@Component({
  selector: 'app-field',
  imports: [FieldMsgComponent, ReactiveFormsModule],
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css', '../conference-ticket.css'],
})
export class FieldComponent {
  @Input('id') id!: string;
  @Input('label') label!: string;
  @Input('placeholder') placeholder: string = '';
  @Input('control') control!: FormControl;
  @Input('errors') errors: { [key: string]: string } = {};

  getFirstErrorKey(errors: { [key: string]: any }): string[] {
    return Object.keys(errors).slice(0, 1);
  }
}
