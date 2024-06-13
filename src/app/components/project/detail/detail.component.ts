import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ProjectService } from '../../../services/project.service';
import { ProjectSectionComponent } from '../section/section.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatDividerModule, ProjectSectionComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: any = null;
  year: string = '';
  projectId: string = '';

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const yearParam = params.get('year');
      const projectIdParam = params.get('projectId');
      if (yearParam && projectIdParam) {
        this.year = yearParam;
        this.projectId = projectIdParam;
        this.project = this.projectService.getProjectDetails(this.year, this.projectId);
        console.log('Project details:', this.project);
      }
    });
  }

  shouldShowDivider(index: number): boolean {
    if (index === 0) return false;
    const prevDetail = this.project.details[index - 1];
    const currDetail = this.project.details[index];
    return (prevDetail.title || prevDetail.img || currDetail.title || currDetail.img) ||
           (currDetail.list && !prevDetail.list);
  }
}
