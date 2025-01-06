# Tableau de Bord de Mentorat en Ligne

Ce projet est un tableau de bord conçu pour les mentors d'un site de mentorat en ligne. Il leur permet de gérer leurs sessions de mentorat, de suivre leurs étudiants et de consulter les feedbacks.

## Fonctionnalités

### **Page de Connexion**
- Authentifie les utilisateurs avec des données statiques (stockées localement).

### **Tableau de Bord**
- **Liste des étudiants** :
  - Affiche les informations de base : nom, email, nombre de sessions réalisées.
  - Fonctionnalités : ajouter, modifier, et supprimer un étudiant.

- **Gestion des sessions** :
  - Ajouter une nouvelle session avec une date, une heure, et un étudiant.
  - Modifier ou supprimer une session existante.
  - Filtrer les sessions par date.

- **Feedbacks** :
  - Liste statique des feedbacks des étudiants.
  - Possibilité de filtrer les feedbacks par étudiant.

## Structure Technique

### **Technologies Utilisées**
- **TypeScript** : Gestion des scripts et logique métier.
- **Angular** : Framework choisi pour sa simplicité et sa modularité.
- **HTML & CSS** : Structure et design.

### **Stockage des Données**
- Utilisation du **localStorage** pour stocker :
  - Les informations des étudiants.
  - Les sessions de mentorat.
  - Les feedbacks des étudiants.

### **Organisation Modulaire**
- **Composants Réutilisables** :
  - `HeaderComponent` : En-tête avec bouton de déconnexion.
  - `SidebarComponent` : Menu de navigation latéral.
  - `HomeComponent` : Vue d'accueil avec statistiques globales.
  - `StudentsComponent` : Gestion des étudiants.
  - `SessionsComponent` : Gestion des sessions.
  - `FeedbacksComponent` : Gestion des feedbacks,

### **Responsive Design**
- Design adaptatif pour une utilisation sur ordinateurs et mobiles.
- Utilisation d'un système de grille CSS pour organiser les éléments.


## Installation et Lancement

### **Prérequis**
- Node.js installé pour exécuter le projet Angular.

