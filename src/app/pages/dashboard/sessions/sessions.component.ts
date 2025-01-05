import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class SessionsComponent implements OnInit {
  sessions: { id: number; studentId: number; date: string; time: string }[] = [];
  allSessions: { id: number; studentId: number; date: string; time: string }[] = []; // Liste originale des sessions
  students: { id: number; name: string }[] = [];
  isFormOpen = false;
  editingSession: boolean = false;
  currentSession: any = {};

  ngOnInit() {
    // Charger les sessions depuis le localStorage
    const storedSessions = localStorage.getItem('sessions');
    this.sessions = storedSessions ? JSON.parse(storedSessions) : [];
    this.allSessions = [...this.sessions]; // Initialiser allSessions avec la copie des sessions

    // Charger les étudiants depuis le localStorage
    const storedStudents = localStorage.getItem('students');
    this.students = storedStudents ? JSON.parse(storedStudents) : [];
  }

  saveToLocalStorage() {
    localStorage.setItem('sessions', JSON.stringify(this.sessions));
  }

  openSessionForm(session?: any) {
    this.isFormOpen = true;
    this.editingSession = !!session;
    this.currentSession = session
      ? { ...session }
      : { id: null, studentId: '', date: '', time: '' };
  }

  closeSessionForm() {
    this.isFormOpen = false;
    this.currentSession = {};
  }

  saveSession() {
    // Validation : s'assurer qu'un étudiant est sélectionné
    const student = this.students.find(
      (s) => s.id === parseInt(this.currentSession.studentId)
    );
    if (!student) {
      alert('Veuillez sélectionner un étudiant valide.');
      return;
    }

    if (this.editingSession) {
      // Modifier une session existante
      const index = this.sessions.findIndex((s) => s.id === this.currentSession.id);
      if (index > -1) {
        this.sessions[index] = {
          ...this.currentSession,
          studentId: student.id,
        };
      }
    } else {
      // Ajouter une nouvelle session
      this.currentSession.id = Date.now();
      this.currentSession.studentId = student.id;
      this.sessions.push(this.currentSession);
    }

    this.allSessions = [...this.sessions]; // Mettre à jour allSessions
    this.saveToLocalStorage();
    this.closeSessionForm();
  }

  getStudentName(studentId: number): string {
    // Récupérer le nom de l'étudiant à partir de l'ID
    const student = this.students.find((s) => s.id === studentId);
    return student ? student.name : 'Inconnu';
  }

  deleteSession(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette session ?')) {
      this.sessions = this.sessions.filter((session) => session.id !== id);
      this.allSessions = [...this.sessions]; // Mettre à jour allSessions
      this.saveToLocalStorage();
    }
  }

  filterSessionsByDate(date: string): { id: number; studentId: number; date: string; time: string }[] {
    return this.allSessions.filter((session) => session.date === date);
  }
  
}
