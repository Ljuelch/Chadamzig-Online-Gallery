import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  newsletterForm!: FormGroup;
  imageSrc: string;

  constructor(private fb: FormBuilder) {
    this.imageSrc = '../assets/paintings/oilSample1.jpg';
  }

  ngOnInit(): void {
    this.newsletterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.newsletterForm.get('email');
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      console.log('Form Submitted', this.newsletterForm.value);

    }
  }

  changeImage(newImageUrl: string) {
    this.imageSrc = newImageUrl;
  }
}
