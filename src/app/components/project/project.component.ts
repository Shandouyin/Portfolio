import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  years = [
    { 
      title: 'Première Année', 
      path: 'first-year', 
      description: 'Au cours de ma première année en BUT informatique, j\'ai participé à de nombreux projets appelés SAÉ (Situations d\'Apprentissage et d\'Évaluation), qui m\'ont permis de développer mes compétences en programmation et en gestion de projets.'
    },
    { 
      title: 'Deuxième Année', 
      path: 'second-year', 
      description: 'En deuxième année, j\'ai réalisé une SAÉ centrée sur le traitement et l\'analyse de données, suivie d\'un stage de 3 mois où j\'ai pu appliquer mes connaissances dans un environnement professionnel.'
    },
    { 
      title: 'Troisième Année', 
      path: 'third-year', 
      description: 'Durant ma troisième année, j\'ai mené une SAÉ sur les technologies de l\'intelligence artificielle et effectué un stage de 3 mois pour approfondir mes compétences en IA et en développement Web.'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([`/projects/${path}`]);
  }
}
