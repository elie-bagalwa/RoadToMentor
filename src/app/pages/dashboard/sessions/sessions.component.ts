import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Définition du composant
@Component({
  selector: 'app-sessions', 
  templateUrl: './sessions.component.html', 
  styleUrls: ['./sessions.component.css'], 
  standalone: true, 
  imports: [FormsModule, CommonModule], 
})
export class SessionsComponent implements OnInit {
  // Liste des sessions affichées dans l'application
  sessions: { id: number; studentId: number; date: string; time: string }[] = [];
  // Copie originale de toutes les sessions, utilisée pour des filtres
  allSessions: { id: number; studentId: number; date: string; time: string }[] = [];
  // Liste des étudiants disponibles
  students: { id: number; name: string }[] = [];
  //  si le formulaire d'ajout/modification est ouvert
  isFormOpen = false;
  // si une session est en cours de modification
  editingSession: boolean = false;
  // Objet temporaire utilisé pour stocker les données de la session actuelle (ajout ou modification)
  currentSession: any = {};

  // Méthode appelée automatiquement lors de l'initialisation du composant
  ngOnInit() {
    // Charger les sessions depuis le localStorage
    const storedSessions = localStorage.getItem('sessions');
    this.sessions = storedSessions ? JSON.parse(storedSessions) : [];
    this.allSessions = [...this.sessions]; // Initialiser allSessions avec une copie des sessions

    // Charger les étudiants depuis le localStorage
    const storedStudents = localStorage.getItem('students');
    this.students = storedStudents ? JSON.parse(storedStudents) : [];
  }

  // Sauvegarde les sessions actuelles dans le localStorage
  saveToLocalStorage() {
    localStorage.setItem('sessions', JSON.stringify(this.sessions));
  }

  // Ouvre le formulaire pour ajouter ou modifier une session
  openSessionForm(session?: any) {
    this.isFormOpen = true; // Afficher le formulaire
    this.editingSession = !!session; // Indique si l'utilisateur modifie une session existante
    this.currentSession = session
      ? { ...session } // Si une session est passée en paramètre, en créer une copie
      : { id: null, studentId: '', date: '', time: '' }; // Sinon, initialiser une nouvelle session
  }

  // Ferme le formulaire et réinitialise les données de la session courante
  closeSessionForm() {
    this.isFormOpen = false; // Masquer le formulaire
    this.currentSession = {}; // Réinitialiser le modèle
  }

  // Sauvegarde une session (nouvelle ou modifiée)
  saveSession() {
    // Validation : s'assurer qu'un étudiant valide est sélectionné
    const student = this.students.find(
      (s) => s.id === parseInt(this.currentSession.studentId)
    );
    if (!student) {
      alert('Veuillez sélectionner un étudiant valide.'); // Afficher un message d'erreur si aucun étudiant valide n'est trouvé
      return;
    }

    if (this.editingSession) {
      // Si on modifie une session existante
      const index = this.sessions.findIndex((s) => s.id === this.currentSession.id);
      if (index > -1) {
        this.sessions[index] = {
          ...this.currentSession,
          studentId: student.id, // Mettre à jour l'ID de l'étudiant associé
        };
      }
    } else {
      // Si on ajoute une nouvelle session
      this.currentSession.id = Date.now(); // Générer un ID unique basé sur l'horodatage
      this.currentSession.studentId = student.id; // Associer l'étudiant sélectionné
      this.sessions.push(this.currentSession); // Ajouter la nouvelle session à la liste
    }

    this.allSessions = [...this.sessions]; // Mettre à jour la copie originale
    this.saveToLocalStorage(); // Sauvegarder les sessions mises à jour
    this.closeSessionForm(); // Fermer le formulaire
  }

  // Récupère le nom d'un étudiant à partir de son ID
  getStudentName(studentId: number): string {
    const student = this.students.find((s) => s.id === studentId);
    return student ? student.name : 'Inconnu'; // Retourne "Inconnu" si aucun étudiant correspondant n'est trouvé
  }

  // Supprime une session à partir de son ID
  deleteSession(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette session ?')) {
      // Afficher une confirmation avant de supprimer
      this.sessions = this.sessions.filter((session) => session.id !== id); // Filtrer la session à supprimer
      this.allSessions = [...this.sessions]; // Mettre à jour la copie originale
      this.saveToLocalStorage(); // Sauvegarder les sessions mises à jour
    }
  }

  // Filtre les sessions pour afficher celles correspondant à une date donnée
  filterSessionsByDate(date: string): { id: number; studentId: number; date: string; time: string }[] {
    return this.allSessions.filter((session) => session.date === date);
  }
}
