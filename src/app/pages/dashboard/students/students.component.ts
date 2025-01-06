import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

// Déclaration du composant Students
@Component({
  selector: 'app-students', 
  templateUrl: './students.component.html', 
  styleUrls: ['./students.component.css'], 
  standalone: true, 
  imports: [FormsModule, CommonModule], 
})
export class StudentsComponent {
  // Liste des étudiants stockée dans un tableau d'objets
  students: { id: number; name: string; email: string; sessionsCount: number }[] = [];

  // Objet utilisé pour le formulaire d'ajout ou d'édition d'un étudiant
  studentForm = {
    id: 0, // ID unique de l'étudiant (généré automatiquement)
    name: '', // Nom de l'étudiant
    email: '', // Email de l'étudiant
    sessionsCount: 0, // Nombre de sessions associées à cet étudiant
  };

  // Indicateur pour savoir si un étudiant est en cours d'édition
  isEditing = false;

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit() {
    const storedStudents = localStorage.getItem('students'); // Récupérer les étudiants stockés dans le localStorage
    this.students = storedStudents ? JSON.parse(storedStudents) : []; // Initialiser la liste avec les données récupérées ou un tableau vide
  }

  // Sauvegarder la liste des étudiants dans le localStorage
  saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  // Ajouter un nouvel étudiant
  addStudent() {
    if (this.studentForm.name && this.studentForm.email) {
      // Vérifier que le nom et l'email sont remplis
      const newStudent = { ...this.studentForm, id: Date.now() }; // Créer un étudiant avec un ID unique basé sur la date
      this.students.push(newStudent); // Ajouter l'étudiant à la liste
      this.resetForm(); // Réinitialiser le formulaire
      this.saveToLocalStorage(); // Sauvegarder la liste mise à jour
    } else {
      alert('Veuillez remplir tous les champs.'); // Alerte si des champs sont vides
    }
  }

  // Passer en mode édition pour modifier un étudiant existant
  editStudent(student: any) {
    this.isEditing = true; // Activer le mode édition
    this.studentForm = { ...student }; // Charger les données de l'étudiant dans le formulaire
  }

  // Mettre à jour les informations d'un étudiant
  updateStudent() {
    const index = this.students.findIndex(s => s.id === this.studentForm.id); // Trouver l'index de l'étudiant à modifier
    if (index !== -1) {
      this.students[index] = { ...this.studentForm }; // Mettre à jour les données de l'étudiant
      this.resetForm(); // Réinitialiser le formulaire
      this.saveToLocalStorage(); // Sauvegarder la liste mise à jour
      this.isEditing = false; // Désactiver le mode édition
    }
  }

  // Supprimer un étudiant
  deleteStudent(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet étudiant ?')) {
      // Demander une confirmation avant la suppression
      this.students = this.students.filter(student => student.id !== id); // Filtrer la liste pour exclure l'étudiant supprimé
      this.saveToLocalStorage(); // Sauvegarder la liste mise à jour
    }
  }

  // Réinitialiser le formulaire et quitter le mode édition
  resetForm() {
    this.studentForm = { id: 0, name: '', email: '', sessionsCount: 0 }; // Réinitialiser les champs du formulaire
    this.isEditing = false; // Désactiver le mode édition
  }
}
