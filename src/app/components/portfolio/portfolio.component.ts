import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [IonIcon, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  filters = ['All', 'Web design', 'Applications', 'Web development'];
  selectedFilter = 'All';
  selectBoxOpen = false;
  baseUrl = 'https://github.com/pujalakhe/';

  projects = [
    {
      title: 'Course Mate - A Course Recommendation System',
      category: '',
      image: 'assets/projects/coursemate.png',
      preview_link: '',
      repo_link: `${this.baseUrl}CourseRecom-Frontend-`,
    },
    {
      title: 'Angular Crud With JSON Server',
      category: '',
      image: 'assets/projects/json-crud.png',
      preview_link: '',
      repo_link: `${this.baseUrl}Angular-CRUD-with-JSON/`,
    },
    {
      title: 'Attendance Management System -Java.',
      category: '',
      image: 'assets/projects/attendence.png',
      preview_link: '',
      repo_link: `${this.baseUrl}Attendence-Management-System-Java`,
    },
    {
      title: 'Mechanic App - Ionic with Angular',
      category: '',
      image: '',
      preview_link: '',
      repo_link: `${this.baseUrl}`,
    },
    {
      title: 'Crud Operation - Angular',
      category: '',
      image: 'assets/projects/angular-crud.png',
      preview_link:
        'https://angular-crud-2lra9dedz-pujalakhes-projects.vercel.app/',
      repo_link: `${this.baseUrl}Angular-CRUD`,
    },
    {
      title: 'OAuth-Angular',
      category: '',
      image: 'assets/projects/oauth.png',
      preview_link: '',
      repo_link: `${this.baseUrl}Angular-Google-Authentication/`,
    },
    // {
    //   title: '',
    //   category: '',
    //   image: '',
    //   preview_link: '',
    //   repo_link: ``,
    // },
  ];

  get filteredProjects() {
    return this.selectedFilter === 'All'
      ? this.projects
      : this.projects.filter((p) => p.category === this.selectedFilter);
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
    this.selectBoxOpen = false;
  }

  toggleSelectBox() {
    this.selectBoxOpen = !this.selectBoxOpen;
  }
  openRepo(event: Event, repoLink: string | undefined) {
    event.preventDefault(); // stop the parent <a> from being triggered
    window.open(repoLink, '_blank'); // open repo in new tab
  }
  openProjImages(event: Event, image: string | undefined) {
    event.preventDefault(); // stop the parent <a> from being triggered
    window.open(image, '_blank');
  }
}
