import { Component } from '@angular/core'; // Importation du décorateur @Component
import { FormsModule } from '@angular/forms'; // Importation pour gérer les formulaires
import { Router } from '@angular/router'; // Service pour la navigation entre les routes

@Component({
  selector: 'app-login', // Nom de l'étiquette HTML pour ce composant
  templateUrl: './login.component.html', // Fichier HTML lié
  styleUrls: ['./login.component.css'], // Fichier CSS lié
  standalone: true, // Déclare ce composant comme autonome
  imports: [FormsModule], // Modules nécessaires pour le fonctionnement du composant
})
export class LoginComponent {
  // Propriétés liées aux champs de formulaire
  email: string = ''; 
  password: string = ''; 

  // Une liste simulant une base de données locale avec des utilisateurs
  users = [
    { email: 'elie@gmail.com', password: 'password', name: 'Elie' },
    { email: 'admin@gmail.com', password: 'admin123', name: 'Admin' },
  ];

  // Constructeur pour injecter le service Router
  constructor(private router: Router) {}

  // Méthode appelée lors de la soumission du formulaire de connexion
  onLogin() {
    // Recherche d'un utilisateur correspondant aux identifiants saisis
    const user = this.users.find(
      (u) => u.email === this.email && u.password === this.password
    );

    if (user) {
      // Si un utilisateur est trouvé, afficher un message de succès
      alert(`Connexion réussie ! Bienvenue, ${user.name}.`);
      // Redirection vers la page tableau de bord
      this.router.navigate(['/dashboard']);
    } else {
      // Sinon, afficher un message d'erreur
      alert('Email ou mot de passe incorrect.');
    }
  }
}
