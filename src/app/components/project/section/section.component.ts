import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class ProjectSectionComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() list: string[] = [];
  @Input() img: string = '';
}
