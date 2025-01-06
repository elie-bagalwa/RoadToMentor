// Import des modules Angular requis pour la gestion des routes
import { Routes } from '@angular/router'; 
// Import des composants utilisés pour chaque route principale ou enfant
import { LoginComponent } from './pages/login/login.component'; 
import { DashboardComponent } from './pages/dashboard/dashboard.component'; 
import { HomeComponent } from './pages/dashboard/home/home.component'; 
import { StudentsComponent } from './pages/dashboard/students/students.component'; 
import { SessionsComponent } from './pages/dashboard/sessions/sessions.component'; 
import { FeedbacksComponent } from './pages/dashboard/feedbacks/feedbacks.component'; 

// Définition des routes de l'application pour l'exportation
export const routes: Routes = [
  {
    path: '', // Chemin racine de l'application
    redirectTo: 'login', 
    pathMatch: 'full', 
  },
  {
    path: 'login', 
    component: LoginComponent, 
  },
  {
    path: 'dashboard', // Route pour le tableau de bord principal
    component: DashboardComponent, 
    children: [
      {
        path: '', // Chemin enfant par défaut pour le tableau de bord
        redirectTo: 'home', // Redirige vers la vue d'accueil du tableau de bord
        pathMatch: 'full', 
      },
      {
        path: 'home', // Route pour la vue d'accueil du tableau de bord et son composant
        component: HomeComponent, 
      },
      {
        path: 'students', // Route pour la gestion des étudiants et son composant
        component: StudentsComponent, 
      },
      {
        path: 'sessions', // Route pour la gestion des sessions et son composant
        component: SessionsComponent, 
      },
      {
        path: 'feedbacks', // Route pour la gestion des feedbacks et son composant
        component: FeedbacksComponent, 
      },
    ],
  },
];
