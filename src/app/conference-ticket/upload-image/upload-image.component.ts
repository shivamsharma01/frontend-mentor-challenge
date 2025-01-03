import { Component, Input } from '@angular/core';
import { FieldMsgComponent } from '../field-msg/field-msg.component';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  imports: [FieldMsgComponent],
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css', '../conference-ticket.css'],
})
export class UploadImageComponent {
  @Input() avatar: AbstractControl | null;
  selectedImage: File | null = null;
  previewUrl: string | null = null;
  @Input() isSubmmited = false;

  onFileSelected(event: Event): void {
    this.previewUrl = null;
    this.selectedImage = null;
    this.avatar.patchValue(null);
    const input = event.target as HTMLInputElement;
    console.log('onFileSelected');

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedImage = file;
      this.avatar.patchValue(file);
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.avatar.updateValueAndValidity();
    }
  }
}
