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

  projects = [
    {
      title: 'Finance',
      category: 'Web development',
      image: 'assets/images/project-1.jpg',
    },
    {
      title: 'Orizon',
      category: 'Web development',
      image: 'assets/images/project-2.png',
    },
    {
      title: 'Fundo',
      category: 'Web design',
      image: 'assets/images/project-3.jpg',
    },
    {
      title: 'Brawlhalla',
      category: 'Applications',
      image: 'assets/images/project-4.png',
    },
    {
      title: 'DSM.',
      category: 'Web design',
      image: 'assets/images/project-5.png',
    },
    {
      title: 'MetaSpark',
      category: 'Web design',
      image: 'assets/images/project-6.png',
    },
    {
      title: 'Summary',
      category: 'Web development',
      image: 'assets/images/project-7.png',
    },
    {
      title: 'Task Manager',
      category: 'Applications',
      image: 'assets/images/project-8.jpg',
    },
    {
      title: 'Arrival',
      category: 'Web development',
      image: 'assets/images/project-9.png',
    },
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
}
