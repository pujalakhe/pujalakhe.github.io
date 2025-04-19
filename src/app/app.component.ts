import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonIcon, RouterOutlet, RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'puja-lakhe-portfolio';
  showContacts: boolean = false;
  openImage() {
    window.open('assets/images/owner.jpeg', '_blank');
  }

  toggleContacts() {
    this.showContacts = !this.showContacts;
  }
}
