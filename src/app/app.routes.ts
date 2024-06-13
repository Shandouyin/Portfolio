import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectYearComponent } from './components/project/year/year.component';
import { ProjectDetailComponent } from './components/project/detail/detail.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'projects/:year', component: ProjectYearComponent },
  { path: 'projects/:year/:projectId', component: ProjectDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
