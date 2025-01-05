import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  studentCount: number = 0; // Nombre d'étudiants
  sessionCount: number = 0; // Nombre de sessions 
  feedbackCount: number = 2; // Nombre de feedbacks 

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Récupérer les étudiants depuis le localStorage
    const storedStudents = localStorage.getItem('students');
    const students = storedStudents ? JSON.parse(storedStudents) : [];
    this.studentCount = students.length; // Met à jour le nombre d'étudiants

    // Récupérer les sessions depuis le localStorage
    const storedSessions = localStorage.getItem('sessions');
    const sessions = storedSessions ? JSON.parse(storedSessions) : [];
    this.sessionCount = sessions.length; // Met à jour le nombre de sessions

    // Récupérer les feedbacks depuis le localStorage
    const storedFeedbacks = localStorage.getItem('feedbacks');
    const feedbacks = storedFeedbacks ? JSON.parse(storedFeedbacks) : [];
    this.feedbackCount = feedbacks.length; // Met à jour le nombre de Feedbacks
  }

  navigateTo(path: string): void {
    this.router.navigate([`/dashboard/${path}`]);
  }
}
