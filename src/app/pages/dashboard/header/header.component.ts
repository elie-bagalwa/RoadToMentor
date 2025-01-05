import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logout() {
    // Logique de déconnexion
    // localStorage.removeItem('authToken'); 
    this.router.navigate(['/login']); // Redirige vers la page de connexion
  }
}
