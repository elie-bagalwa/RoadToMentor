import { Component } from '@angular/core'; // Importation de la classe de base pour les composants
import { Router } from '@angular/router'; // Service pour gérer la navigation entre les pages

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], 
  standalone: true, // Composant autonome ne nécessitant pas de module parent
})
export class HeaderComponent {
  constructor(private router: Router) {} // Injection du service Router pour naviguer entre les routes

  // Méthode exécutée lorsque l'utilisateur clique sur "Déconnexion"
  logout() {
    
    this.router.navigate(['/login']); // Redirige l'utilisateur vers la page de connexion
  }
}
