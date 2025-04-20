import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [IonIcon, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  educationList = [
    {
      school: 'Bhaktapur Multiple Campus',
      period: '2020 — 2025',
      description:
        'Bachelor of Science In Computer Science and Information Technology(B.Sc.CSIT)',
    },
    {
      school: 'Khwopa Higher Secondary School',
      period: '2017 — 2020',
      description: '+2 Science',
    },
  ];

  experienceList = [
    {
      role: 'Backend Developer - Intern',
      company: 'Axios Softworks',
      period: '2025 — 3 months',
      location: 'Banepa, Kavre',
      description:
        //make it as an array and display it in bullet  list what have you learned there
        'Worked as Backend Developer Intern(Ruby on Rails ).',
    },
    {
      role: 'Angular-developer-Freelancer',
      period: '2024 — Present',
      description: '',
    },
  ];

  downloadCV() {
    window.open('assets/images/pujalakhe-blue.pdf', '_blank');
  }
}
