# 🎓 CFA v2s - Refonte du site du Centre de Formation

> Projet de refonte complète d'un site web pour un centre de formation d'apprentis, réalisé dans le cadre d'une mission professionnelle.

![Wix](https://img.shields.io/badge/Wix-0C6EFC?style=for-the-badge&logo=wix&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Velo](https://img.shields.io/badge/Velo_by_Wix-000000?style=for-the-badge&logo=wix&logoColor=white)

---

## 📋 À propos du projet

Ce projet consiste en la **refonte complète du site web** d'un centre de formation d'apprentis (CFA). L'objectif est de moderniser l'interface, améliorer l'expérience utilisateur et ajouter des fonctionnalités interactives pour faciliter l'accès à l'information pour les apprentis, les entreprises et les formateurs.

### 🎯 Objectifs

- ✨ Moderniser le design et l'ergonomie
- 🚀 Améliorer les performances et la navigation
- 📱 Rendre le site 100% responsive
- ⚡ Ajouter des fonctionnalités interactives avec Velo by Wix
- 🎨 Optimiser l'expérience utilisateur (UX/UI)

---

## 🛠️ Technologies utilisées

### Plateforme
- **Wix** - Plateforme de création de sites web
- **Velo by Wix** - Framework pour développement avancé (JavaScript côté serveur et client)

### Développement
- **Node.js** (v18+) - Environnement d'exécution JavaScript
- **npm** - Gestionnaire de paquets
- **Wix CLI** - Outil en ligne de commande pour le développement local
- **Git** - Gestion de versions

### Langages
- **JavaScript (ES6+)** - Logique et interactivité
- **HTML5/CSS3** - Structure et styles
- **JSON** - Configuration et données

---

## 🚀 Installation et configuration

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [Git](https://git-scm.com/)
- Un compte [Wix](https://www.wix.com)

### Installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/Adjasaba/cfa-v2s.git
cd cfa-v2s
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Installer Wix CLI (si pas déjà fait)**
```bash
npm install -g @wix/cli
```

4. **Se connecter à Wix**
```bash
wix login
```

5. **Lancer l'environnement de développement local**
```bash
wix dev
```

Le site sera accessible sur `http://localhost:5173` (ou un autre port indiqué dans le terminal).

---

## 📂 Structure du projet

```
cfa-v2s/
├── src/
│   ├── pages/              # Code JavaScript des pages
│   │   ├── masterPage.js   # Code global (toutes les pages)
│   │   └── Home.js         # Page d'accueil
│   ├── backend/            # Code backend (serveur)
│   └── public/             # Ressources publiques
├── .wix/                   # Configuration Wix
├── node_modules/           # Dépendances npm
├── package.json            # Configuration npm et dépendances
└── README.md              # Ce fichier
```

---

## ✨ Fonctionnalités développées

### 🎯 Fonctionnalités principales

- **Navigation améliorée** - Menu responsive et intuitif
- **Bouton "Retour en haut"** - Animation smooth avec apparition au scroll
- **Intégration réseaux sociaux** - Flux Instagram/Facebook en temps réel
- **Formulaires de contact** - Avec notifications email automatiques
- **Recherche de formations** - Système de filtrage dynamique
- **Espace documentaire** - Accès aux ressources et documents

### 🔧 Fonctionnalités techniques

- Développement avec **Velo by Wix** pour des interactions avancées
- Code JavaScript moderne (ES6+)
- Gestion d'événements (scroll, click, hover)
- Animations et transitions fluides
- Responsive design (mobile, tablette, desktop)

---

## 💻 Développement

### Lancer le serveur de développement

```bash
wix dev
```

Cette commande :
- ✅ Synchronise les types avec l'éditeur Wix
- ✅ Lance un serveur local
- ✅ Active le hot-reload (rechargement automatique)
- ✅ Ouvre le navigateur automatiquement

### Commandes utiles

| Commande | Description |
|----------|-------------|
| `wix dev` | Lancer le serveur de développement |
| `wix build` | Compiler le projet |
| `wix sync-types` | Synchroniser les types TypeScript |
| `wix login` | Se connecter à Wix |
| `npm install` | Installer les dépendances |

### Workflow de développement

1. **Modifier le code** dans VS Code (ou votre éditeur préféré)
2. **Sauvegarder** (Ctrl+S)
3. **Le navigateur se rafraîchit automatiquement** ✨
4. **Tester** les modifications en temps réel
5. **Commiter** les changements avec Git

---

## 🎨 Personnalisation

### Modifier les styles

Les styles sont gérés via l'éditeur Wix et peuvent être surchargés avec du CSS personnalisé dans les paramètres du site.

### Ajouter des fonctionnalités

Pour ajouter de nouvelles fonctionnalités JavaScript :

1. Ouvrir le fichier de page correspondant dans `src/pages/`
2. Ajouter votre code dans la fonction `$w.onReady()`
3. Sauvegarder et tester

Exemple :
```javascript
$w.onReady(function () {
    // Votre code ici
    $w("#monBouton").onClick(() => {
        console.log("Bouton cliqué !");
    });
});
```

---

## 🐛 Débogage

### Console du navigateur

Utilisez la console pour déboguer (F12) :
```javascript
console.log("Debug:", maVariable);
```

### Problèmes fréquents

| Problème | Solution |
|----------|----------|
| `npm: command not found` | Installer Node.js |
| `wix: command not found` | Installer Wix CLI : `npm install -g @wix/cli` |
| Élément non trouvé | Vérifier que l'ID correspond dans l'éditeur Wix |
| Hot-reload ne fonctionne pas | Relancer `wix dev` |

---

## 📚 Ressources et documentation

- [Documentation Velo by Wix](https://dev.wix.com/docs)
- [API Reference Wix](https://www.wix.com/velo/reference/api-overview)
- [Wix CLI Documentation](https://dev.wix.com/docs/build-apps/developer-tools/cli/get-started)
- [Forum Wix](https://www.wix.com/velo/forum)

---

## 👥 Contribution

Ce projet est développé dans le cadre d'une mission professionnelle. Les contributions externes ne sont pas acceptées pour le moment.

---

## 📄 Licence

Ce projet est la propriété du centre de formation. Tous droits réservés.

---

## 📞 Contact

Pour toute question concernant ce projet :

- **GitHub** : [@Adjasaba](https://github.com/Adjasaba)
- **Projet** : Refonte site CFA

---

## 🎯 Roadmap

### Phase 1 - Fondations ✅
- [x] Configuration de l'environnement de développement
- [x] Structure du projet
- [x] Design et navigation de base

### Phase 2 - Fonctionnalités ⏳
- [x] Bouton "Retour en haut" avec animation
- [ ] Intégration réseaux sociaux
- [ ] Formulaires de contact
- [ ] Système de recherche

### Phase 3 - Optimisation 📋
- [ ] Tests utilisateurs
- [ ] Optimisation des performances
- [ ] SEO et accessibilité
- [ ] Documentation complète

### Phase 4 - Déploiement 🚀
- [ ] Tests finaux
- [ ] Formation du client
- [ ] Mise en production
- [ ] Monitoring

---

## 🙏 Remerciements

Merci au centre de formation pour la confiance accordée et l'opportunité de réaliser ce projet.

---

<p align="center">
  <strong>Développé dans le cadre d'une expérience professionnelle</strong>
</p>

<p align="center">
  <sub>Projet de refonte site web • 2025</sub>
</p>
