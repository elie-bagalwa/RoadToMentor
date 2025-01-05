import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  standalone: true, 
  imports: [FormsModule, CommonModule], 
})
export class StudentsComponent {
  students: { id: number; name: string; email: string; sessionsCount: number }[] = [];

  studentForm = {
    id: 0,
    name: '',
    email: '',
    sessionsCount: 0,
  };

  isEditing = false;

  ngOnInit() {
    const storedStudents = localStorage.getItem('students');
    this.students = storedStudents ? JSON.parse(storedStudents) : [];
  }

  saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  addStudent() {
    if (this.studentForm.name && this.studentForm.email) {
      const newStudent = { ...this.studentForm, id: Date.now() };
      this.students.push(newStudent);
      this.resetForm();
      this.saveToLocalStorage();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  editStudent(student: any) {
    this.isEditing = true;
    this.studentForm = { ...student };
  }

  updateStudent() {
    const index = this.students.findIndex(s => s.id === this.studentForm.id);
    if (index !== -1) {
      this.students[index] = { ...this.studentForm };
      this.resetForm();
      this.saveToLocalStorage();
      this.isEditing = false;
    }
  }

  deleteStudent(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet étudiant ?')) {
      this.students = this.students.filter(student => student.id !== id);
      this.saveToLocalStorage();
    }
  }

  resetForm() {
    this.studentForm = { id: 0, name: '', email: '', sessionsCount: 0 };
    this.isEditing = false;
  }
}
