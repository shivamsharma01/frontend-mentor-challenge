import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FieldMsgComponent } from '../field-msg/field-msg.component';

const maxSize = 500 * 1024; // 500KB

@Component({
  selector: 'app-main-page',
  imports: [ReactiveFormsModule, CommonModule, FieldMsgComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  ticketForm!: FormGroup;
  selectedImage: File | null = null;
  previewUrl: string | null = null;
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

  onFileSelected(event: Event): void {
    this.previewUrl = null;
    this.selectedImage = null;
    this.ticketForm.patchValue({ image: null });
    const input = event.target as HTMLInputElement;
    console.log('onFileSelected');

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedImage = file;
      this.ticketForm.patchValue({ avatar: file });
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.ticketForm.get('avatar')?.updateValueAndValidity();
    }
  }
}
