import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FieldMsgComponent } from '../field-msg/field-msg.component';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { FieldComponent } from "../field/field.component";

const maxSize = 500 * 1024; // 500KB

@Component({
  selector: 'app-main-page',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FieldMsgComponent,
    UploadImageComponent,
    FieldComponent
],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css', '../conference-ticket.css'],
})
export class MainPageComponent {
  ticketForm!: FormGroup;
  isSubmmited = false;

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
      console.log('valid');
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
