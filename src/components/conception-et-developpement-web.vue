<template>
      <navbarPage/>
      <div class="container">
        <section>
 <h1>FORMATION EN CONCEPTION ET DEVELOPPEMENT WEB</h1>

 <div class="section1">
      <h2 class="titre">Présentation de la formation</h2>
      <div class="section-content">
        <p>La maîtrise des technologies web est aujourd'hui essentielle. Que vous soyez étudiant, professionnel ou entrepreneur, savoir concevoir et développer des sites web et applications web peut grandement vous avantager.

La conception web consiste à créer une expérience utilisateur intuitive et esthétique, en maîtrisant les langages HTML et CSS. Le développement web se concentre sur la programmation des fonctionnalités interactives, notamment avec JavaScript et ses frameworks.

Ensemble, la conception et le développement forment un duo complémentaire pour donner vie à des projets web ambitieux, qu'il s'agisse de sites vitrines, de boutiques en ligne ou d'applications métier.

Acquérir ces compétences ouvre de nombreuses perspectives professionnelles passionnantes dans des domaines variés. C'est un atout indéniable dans le monde du travail d'aujourd'hui et de demain.</p>
      </div>
    </div>

    <div class="conteneur">
    <span>Objectifs </span><br><br><br><br>
    
    <div class="objective">
      <h2>1. Maîtriser les langages et technologies de base du web</h2>
      <p>Apprendre les langages de balisage (HTML) et de présentation (CSS), acquérir les fondamentaux de la programmation web avec JavaScript, et se familiariser avec les frameworks et bibliothèques JavaScript (React, Angular, Vue.js, etc.).</p>
    </div>
    
    <div class="objective">
      <h2>2. Développer des compétences en conception d'interface utilisateur (UI)</h2>
      <p>Apprendre les principes de l'ergonomie et de l'expérience utilisateur (UX), savoir concevoir des maquettes, wireframes et prototypes attrayants, et maîtriser les outils de design web (Figma, Adobe XD, Sketch, etc.).</p>
    </div>
    
    <div class="objective">
      <h2>3. Acquérir une méthodologie de développement web agile</h2>
      <p>Comprendre les différentes étapes d'un projet web (analyse, conception, développement, déploiement), adopter une approche itérative et incrémentale pour livrer rapidement, et travailler en mode projet et en équipe sur des développements complexes.</p>
    </div>
    
    <div class="objective">
      <h2>4. Être capable de créer des sites et applications web responsive et accessibles</h2>
      <p>Savoir développer des sites web adaptés aux différents supports (ordinateurs, tablettes, smartphones), intégrer des principes d'accessibilité pour permettre l'accès à tous les utilisateurs, et optimiser les performances web pour une expérience fluide.</p>
    </div>
    
    <div class="objective">
      <h2>5. Développer un esprit créatif et une veille technologique</h2>
      <p>Être capable d'innover et de proposer des solutions web originales, rester à jour sur les dernières tendances et technologies web émergentes, et être autonome dans son apprentissage et sa montée en compétences.</p>
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