<template>
    <navbarPage/>
    <div class="container">
      <section>
<h1>FORMATION EN GESTION DES PROJETS INFORMATIQUES</h1>

<div class="section1">
    <h2 class="titre">Présentation de la formation</h2>
    <div class="section-content">
      <p>
Voici un texte de présentation pour une formation en gestion des projets informatiques :

Présentation de la Formation en Gestion des Projets Informatiques

La gestion de projets informatiques est une compétence essentielle dans le monde numérique d'aujourd'hui. Cette formation a pour objectif de fournir aux participants les connaissances et les outils nécessaires pour planifier, exécuter, et superviser des projets informatiques de manière efficace et efficiente. Au cours de cette formation, les apprenants acquerront une compréhension approfondie des méthodologies de gestion de projets, telles que l'Agile, le Scrum, et le Waterfall, ainsi que des compétences en leadership, communication, et résolution de problèmes spécifiques aux environnements technologiques.<br><br>

Les participants apprendront à identifier les besoins des clients, à définir des objectifs clairs, à gérer les ressources, et à surveiller l'avancement des projets tout en respectant les délais et les budgets. Des études de cas réels et des ateliers pratiques permettront d'ancrer les concepts théoriques dans des situations concrètes, offrant ainsi une expérience d'apprentissage complète et immersive. À l'issue de cette formation, les participants seront en mesure de prendre en charge des projets informatiques complexes et de conduire leur équipe vers le succès.</p>
    </div>
  </div>

  <div class="conteneur">
  <span>Objectifs </span><br><br><br><br>
  
  <div class="objective">
    <h2>1. Comprendre les fondamentaux de la gestion de projet</h2>
    <p>
Maîtriser les concepts de base de la gestion de projet (triple contrainte, cycle de vie, etc.)<br>
Savoir identifier et définir les rôles et responsabilités des différents acteurs d'un projet <br>
Être capable d'élaborer un plan de projet détaillé (planning, budget, ressources, risques, etc.) <br></p>
  </div>
  
  <div class="objective">
    <h2>2. Acquérir des méthodes et outils de gestion de projet agiles</h2>
    <p>Connaître les principes et pratiques des méthodes agiles (Scrum, Kanban, etc.)
Savoir adapter les méthodes agiles aux projets informatiques
Maîtriser les outils de gestion de projet agile (tableaux Kanban, sprints, rétrospectives, etc.).</p>
  </div>
  
  <div class="objective">
    <h2>3. Développer des compétences en leadership et en gestion d'équipe</h2>
    <p>Savoir motiver, encadrer et coordonner une équipe de projet
Apprendre à communiquer efficacement avec les différentes parties prenantes
Être capable de résoudre les conflits et les problèmes au sein de l'équipe.
</p>
  </div>
  
  <div class="objective">
    <h2>4. Maîtriser les processus de suivi et de contrôle des projets</h2>
    <p>Savoir mettre en place des indicateurs de suivi pertinents (coût, délai, qualité, etc.)
Être capable d'analyser les écarts et de prendre les mesures correctives nécessaires
Apprendre à réaliser des revues de projet et à capitaliser sur les enseignements.
</p>
  </div>
  
  <div class="objective">
    <h2>5. Développer une vision stratégique des projets informatiques</h2>
    <p>Comprendre l'alignement des projets avec les objectifs de l'organisation
Savoir évaluer et sélectionner les projets les plus pertinents
Être capable de piloter la transformation numérique de l'entreprise.</p>
  </div>
</div>
 
  <div class="section1">
   
    <div class="section-content">
       
      <a href="#" class="button">S'inscrire</a>
    </div>
  </div>
  </section>
    </div>
    
</template>
<script>
import navbarPage from './navbarPage.vue';
export default {
  components: {
      navbarPage 
  },
}
</script>
<style scoped>
.container {
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
width: 85%;
margin: auto;
}
.container h1{
    background-color: #333;
    padding: 20px;
    text-align: center;
}
.section1 {
    margin-bottom: 40px;
  }
  
  .section-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    
  }
  
  .section-content {
    line-height: 1.5;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    font-size: 24px;
}
.button {
    display: inline-block;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .button:hover {
    background-color: #555;
  }     
  .conteneur{
    
    margin: 0 auto;
    padding: 40px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .objective {
    background-color: #f5f5f5;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  
  .objective h2 {
    color: #333;
    margin-top: 0;
  }
  
  .objective p {
    color: #555;
    line-height: 1.5;
}
.conteneur span{
font-size: 60px;
font-weight: bold;
color: #2cc;


}
.titre{
font-size: 60px;
font-weight: bold;
color: #2cc;
}
.section-content p{
text-align: justify;
text-indent: 50px;
}
h1{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  font-weight: bold;
  font-size: 60px;
color: #2cc;

}
p{
  font-size: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}
</style>