import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  imports: [ReactiveFormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  ticketForm!: FormGroup;
  selectedImage: File | null = null;
  previewUrl: string | null = null;

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
    console.log(this.ticketForm.errors);
  }

  fileValidator(control: any): { [key: string]: boolean } | null {
    const file = control.value;
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      const allowedTypes = ['image/jpeg', 'image/png'];

      if (!allowedTypes.includes(file.type)) {
        return { invalidFileType: true };
      }
      if (file.size > maxSize) {
        return { fileTooLarge: true };
      }
    }
    return null;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      this.selectedImage = file;
      this.ticketForm.patchValue({ image: file });
      this.ticketForm.get('image')?.updateValueAndValidity();

      // Preview the image
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}

// export function requiredFileType(allowedTypes: string[]) {
//   return (control: FormControl) => {
//     const file = control.value;
//     if (file) {
//       const extension = file.name.split('.')[1].toLowerCase();
//       if (!allowedTypes.find((type) => type.toLowerCase() === extension)) {
//         return {
//           requiredFileType: true,
//         };
//       }
//     }
//     return null;
//   };
// }
