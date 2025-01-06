import { Component, OnInit } from '@angular/core'; // Gestion des composants Angular
import { Router } from '@angular/router'; // Service de navigation entre les routes

@Component({
  selector: 'app-home', 
  standalone: true, 
  imports: [], 
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css'], 
})
export class HomeComponent implements OnInit {
  // Variables pour les statistiques
  studentCount: number = 0; // Nombre total d'étudiants
  sessionCount: number = 0; // Nombre total de sessions
  feedbackCount: number = 2; // Nombre total de feedbacks

  constructor(private router: Router) {} // Injection du service de navigation

  ngOnInit(): void {
    // Récupérer et analyser les données depuis le localStorage

    // Étudiants
    const storedStudents = localStorage.getItem('students'); // Récupère les étudiants enregistrés
    const students = storedStudents ? JSON.parse(storedStudents) : []; // Convertit les données JSON ou crée un tableau vide
    this.studentCount = students.length; // Compte le nombre d'étudiants

    // Sessions
    const storedSessions = localStorage.getItem('sessions'); // Récupère les sessions enregistrées
    const sessions = storedSessions ? JSON.parse(storedSessions) : []; // Convertit les données JSON ou crée un tableau vide
    this.sessionCount = sessions.length; // Compte le nombre de sessions

    // Feedbacks
    const storedFeedbacks = localStorage.getItem('feedbacks'); // Récupère les feedbacks enregistrés
    const feedbacks = storedFeedbacks ? JSON.parse(storedFeedbacks) : []; // Convertit les données JSON ou crée un tableau vide
    this.feedbackCount = feedbacks.length; // Compte le nombre de feedbacks
  }

  navigateTo(path: string): void {
    // Méthode de navigation vers une section spécifique
    this.router.navigate([`/dashboard/${path}`]); // Construit l'URL cible et redirige
  }
}
