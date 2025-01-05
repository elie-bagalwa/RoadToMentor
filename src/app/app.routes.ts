import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { StudentsComponent } from './pages/dashboard/students/students.component';
import { SessionsComponent } from './pages/dashboard/sessions/sessions.component';
import { FeedbacksComponent } from './pages/dashboard/feedbacks/feedbacks.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut pour /dashboard
      { path: 'home', component: HomeComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'sessions', component: SessionsComponent },
      { path: 'feedbacks', component: FeedbacksComponent },
    ],
  },
];

