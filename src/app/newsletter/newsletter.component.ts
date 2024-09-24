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
    // Initialize the imageSrc with a default image or set dynamically
    this.imageSrc = '../assets/paintings/oilSample1.jpg'; // Update this path as needed
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
      // Handle form submission logic here (e.g., send data to the backend)
    }
  }

  // You can also create a method to dynamically change the image
  changeImage(newImageUrl: string) {
    this.imageSrc = newImageUrl;
  }
}
