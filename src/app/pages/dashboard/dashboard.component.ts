import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard', //Nom du composant pour l'utiliser dans d'autres templates.
  templateUrl: './dashboard.component.html', //Fichier HTML lié à ce composant.
  styleUrls: ['./dashboard.component.css'], //Fichiers CSS associés au style de ce composant.
  standalone: true, //Permet d'utiliser ce composant sans dépendre d'un module Angular.
  imports: [HeaderComponent, HomeComponent, SidebarComponent, RouterOutlet], //Liste des composants et services requis.
})
export class DashboardComponent {
  // Ce composant représente le tableau de bord principal de l'application.
  // Il intègre un en-tête, une barre latérale et une zone de contenu dynamique.
}