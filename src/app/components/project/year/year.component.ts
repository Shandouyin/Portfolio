import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-project-year',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatGridListModule],
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class ProjectYearComponent implements OnInit {
  projects: any[] = [];
  year: string = '';

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const yearParam = params.get('year');
      if (yearParam) {
        this.year = yearParam;
        this.projects = this.projectService.getProjects(this.year);
      }
    });
  }

  navigateToProject(projectId: string): void {
    this.router.navigate([`/projects/${this.year}/${projectId}`]);
  }
}
