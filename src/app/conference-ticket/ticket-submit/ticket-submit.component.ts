import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

const maxSize = 500 * 1024; // 500KB

@Component({
  selector: 'app-ticket-submit',
  imports: [
    UploadImageComponent,
    FieldComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './ticket-submit.component.html',
  styleUrls: ['./ticket-submit.component.css', '../conference-ticket.css'],
})
export class TicketSubmitComponent {
  ticketForm!: FormGroup;
  isSubmmited = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.ticketForm = new FormGroup({
      avatar: new FormControl(null, [Validators.required, this.fileValidator]),
      fullName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      githubAccountId: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  getControl(controlName: string): FormControl {
    return this.ticketForm.get(controlName) as FormControl;
  }

  generateTicket() {
    console.log(this.ticketForm.value);
    console.log(this.ticketForm.valid);
    this.isSubmmited = true;
    if (this.ticketForm.valid) {
      this.router.navigate(['/conference/preview'], {
        state: {
          name: this.ticketForm.value.fullName,
          email: this.ticketForm.value.email,
          image: this.ticketForm.value.avatar,
          id: this.ticketForm.value.githubAccountId,
        },
      });
    } else {
      this.ticketForm.markAllAsTouched();
    }
  }

  fileValidator(control: any): { [key: string]: boolean } | null {
    console.log('fileValidator');
    const file = control.value;
    if (file instanceof File) {
      const allowedTypes = ['jpeg', 'jpg', 'png'];
      const format = file.name.split('.').pop()?.toLowerCase();
      console.log(format);
      console.log('checking format');
      if (!format || !allowedTypes.includes(format)) {
        return { invalidFileType: true };
      }

      console.log('checking size');
      if (file.size > maxSize) {
        console.log('too large');

        return { fileTooLarge: true };
      }
      return null;
    }
    return { required: true };
  }
}
