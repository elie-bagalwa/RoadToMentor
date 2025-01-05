import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css'],
  standalone : true,
  imports : [FormsModule,CommonModule]
})
export class FeedbacksComponent implements OnInit {
  feedbacks: { student: string; message: string }[] = [];
  students: { id: number; name: string; email: string; sessionsCount: number }[] = [];
  selectedStudent: string = '';
  filteredFeedbacks: { student: string; message: string }[] = [];

  // Messages statiques possibles
  feedbackMessages: string[] = [
    'Merci pour la session, c’était très utile !',
    'J’ai appris beaucoup de choses, merci encore.',
    'Une très bonne explication, j’ai tout compris.',
    'C’était un peu rapide, mais j’ai apprécié l’effort.',
    'J’aimerais en savoir plus lors de la prochaine session.'
  ];

  ngOnInit() {
    // Charger les étudiants depuis le Local Storage
    const storedStudents = localStorage.getItem('students');
    this.students = storedStudents ? JSON.parse(storedStudents) : [];

    // Générer des feedbacks variés pour les étudiants
    this.generateFeedbacks();

    // Filtrer les feedbacks par défaut
    this.filterFeedbacks();
  }

  generateFeedbacks() {
    this.feedbacks = this.students.map(student => ({
      student: student.name,
      message: this.getRandomFeedback()
    }));
  }

  getRandomFeedback(): string {
    // Sélectionne un message aléatoire
    return this.feedbackMessages[
      Math.floor(Math.random() * this.feedbackMessages.length)
    ];
  }

  filterFeedbacks() {
    if (this.selectedStudent) {
      this.filteredFeedbacks = this.feedbacks.filter(
        feedback => feedback.student === this.selectedStudent
      );
    } else {
      this.filteredFeedbacks = this.feedbacks;
    }
  }
}
