import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IonIcon, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm!: FormGroup; // Declare the form group
  mapUrl!: SafeResourceUrl; // Use SafeResourceUrl type

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Initialize the form group with validators
    this.contactForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });

    // Sanitize the Google Maps URL
    const rawUrl =
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14133.565279027966!2d85.42412179249618!3d27.67429782185452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39eb05531bf45063%3A0xeec9e70e9a3ea1cc!2zS2h3b3BhIENvbGxlZ2Ugb2YgRW5naW5lZXJpbmcg4KSW4KWN4KS14KSqIOCkleCksuClh-CknCDgpIXgpKsg4KSH4KSe4KWN4KSc4KS_4KSo4KWA4KSv4KSw4KS_4KSZ!3m2!1d27.670987099999998!2d85.4392!4m5!1s0x39eb0553197e9d2f%3A0x73b807bbe91781af!2sLiwali%2C%20Bhaktapur%2044800%2C%20Nepal!3m2!1d27.6709633!2d85.4391693!5e0!3m2!1sen!2snp!4v1744546432328!5m2!1sen!2snp';
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // You can replace this with an actual service call to send the message.
    } else {
      console.log('Form is invalid');
    }
  }
}
