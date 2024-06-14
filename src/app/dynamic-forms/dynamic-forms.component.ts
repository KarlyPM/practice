import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-forms.component.html',
  styleUrl: './dynamic-forms.component.css'
})
export class ProfileEditorComponent  {

    profileForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
      this.profileForm = this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        favoriteBooks: this.formBuilder.array([this.formBuilder.control('')])
      });
    }

    get favoriteBooks() {
      return this.profileForm.get('favoriteBooks') as FormArray;
    }
  
    addBook() {
      this.favoriteBooks.push(this.formBuilder.control(''));
    }
  
    removeBook(index: number) {
      this.favoriteBooks.removeAt(index)
    }
  
    onSubmit() {
      console.log(this.profileForm.value);
    }
}
