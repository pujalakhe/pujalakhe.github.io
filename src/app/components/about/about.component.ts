import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  services = [
    {
      icon: 'assets/images/icon-app.svg',
      alt: 'mobile app icon',
      title: 'Mobile apps',
      text: 'Professional development of applications for iOS and Android.',
    },
    {
      icon: 'assets/images/icon-dev.svg',
      alt: 'Web development icon',
      title: 'Web development',
      text: 'High-quality development of sites at the professional level.',
    },

    {
      icon: 'assets/images/icon-dev.svg',
      alt: 'backend icon',
      title: 'Backend development',
      text: 'High-performance backend services designed for scalability and seamless user experience.',
    },
  ];

  skillsList = [
    {
      name: 'Web Design',
      level: 80,
    },
    {
      name: 'Graphic Design',
      level: 70,
    },
    {
      name: 'Branding',
      level: 90,
    },
    {
      name: 'WordPress',
      level: 50,
    },
  ];
}
