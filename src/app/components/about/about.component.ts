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
      official_link: 'https://angular.io/',
      logo: 'assets/skills/angular-removebg-preview.png',
      name: 'angular',
    },
    {
      official_link: 'https://www.typescriptlang.org/',
      logo: 'assets/skills/typescript.png',
      name: 'typescript',
    },
    {
      official_link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      logo: 'assets/skills/js.png',
      name: 'Javascript',
    },
    {
      official_link: 'https://www.postman.com/',
      logo: 'assets/skills/Postman.svg',
      name: 'postman',
    },
    {
      official_link: 'https://ionicframework.com/',
      logo: 'assets/skills/ionic.png',
      name: 'ionic',
    },
    {
      official_link: 'https://www.postgresql.org/',
      logo: 'assets/skills/postgres.png',
      name: 'posgresql', // (small typo, correct spelling: "postgresql")
    },
    {
      official_link: 'https://www.mysql.com/',
      logo: 'assets/skills/mysql.png',
      name: 'Mysql',
    },
    {
      official_link: 'https://rubyonrails.org/',
      logo: 'assets/skills/ror.png',
      name: 'ruby-on-rails',
    },
    {
      official_link: 'https://www.python.org/',
      logo: 'assets/skills/python.png',
      name: 'python',
    },
    {
      official_link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
      logo: 'assets/skills/c-sharp.png',
      name: 'C#',
    },
    {
      official_link: 'https://www.java.com/',
      logo: 'assets/skills/java.png',
      name: 'Java',
    },
    {
      official_link: 'https://expressjs.com/',
      logo: 'assets/skills/node-express.png',
      name: 'node-express',
    },
    {
      official_link: 'https://kernel.org/',
      logo: 'assets/skills/linux.png',
      name: 'linux',
    },
  ];
}
