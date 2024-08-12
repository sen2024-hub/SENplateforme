<template>
    <navbarPage/>
    <div class="container">
      <section>
<h1>CONCEPTION GRAPHIQUE</h1>

<div class="section1">
    <h2 class="titre">Présentation de la formation</h2>
    <div class="section-content">
      <p>
        Maîtriser les techniques de création graphique est une compétence recherchée dans de nombreux secteurs. Notre formation vous permettra d'acquérir une expertise solide dans l'utilisation des outils professionnels tels que Photoshop, Illustrator et InDesign.

Vous apprendrez à créer des visuels impactants, en développant un sens aigu du design, de la composition et de l'esthétique. Découvrez les principes fondamentaux de la couleur, de la typographie et de la mise en page pour concevoir des créations captivantes.

Restez à la pointe des tendances du digital et de l'expérience utilisateur (UX) afin de proposer des solutions graphiques innovantes, adaptées aux besoins spécifiques de vos clients ou de votre entreprise.

Rejoignez-nous et devenez un créateur graphique accompli !

</p>
    </div>
  </div>

  <div class="conteneur">
  <span>Objectifs </span><br><br><br><br>
  
  <div class="objective">
    <h2>1. Maîtriser les outils professionnels de la création graphique</h2>
    <p>
        Acquérir une expertise dans l'utilisation des logiciels phares tels que Photoshop, Illustrator et InDesign<br>
        Savoir manipuler avec aisance les différents formats d'images et optimiser les fichiers pour le web <br></p>
  </div>
  
  <div class="objective">
    <h2>2. Développer un sens aigu du design et de l'esthétique visuelle</h2>
    <p>Comprendre et appliquer les principes fondamentaux du design (composition, équilibre, hiérarchie, etc.)<br>
        Maîtriser les techniques de la théorie des couleurs, de la typographie et de la mise en page <br></p>
  </div>
  
  <div class="objective">
    <h2>3. Concevoir des visuels impactants et créatifs</h2>
    <p>Être capable de créer des éléments graphiques originaux et de qualité professionnelle <br>
        Développer une approche créative pour répondre aux besoins spécifiques des clients ou de l'entreprise <br>
</p>
  </div>
  
  <div class="objective">
    <h2>4. S'adapter aux tendances du digital et de l'expérience utilisateur</h2>
    <p>Rester à jour sur les dernières tendances en matière de design web et d'expérience utilisateur (UX)<br>
        Savoir proposer des solutions graphiques innovantes et adaptées aux environnements numériques<br>
</p>
  </div>
  
  <div class="objective">
    <h2>5. Acquérir une approche professionnelle de la création graphique</h2>
    <p>Apprendre à gérer les étapes d'un projet de création graphique (brief, conception, validation, livraison)<br>
        Développer un portefeuille de travaux démontrant ses compétences.</p>
  </div>
</div>
 
  <div class="section1">
   
    <div class="section-content">
       
      <a href="#" class="button">S'inscrire</a>
    </div>
  </div>
  </section>
  <section class="partie6" >
  <footer>
  <div class="footer-container">
    <div class="footer-left">
      <div class="footer-section">
        
        <ul>
          <li><a href="#">Home</a></li>
        </ul>
      </div>
      <div class="footer-section">

        <ul>
          <li><a href="#">Formations</a></li>
          
        </ul>
      </div>
      <div class="footer-section">
        
        <ul>
          <li><a href="#">A propos</a></li>
        </ul>
      </div>
      <div class="footer-section">
        
        <ul>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-right">
      <p>&copy; 2024 <span>Charis</span>Action. Tous droits réservés.</p>
    </div>
  </div>
</footer>
<div class="footer-bottom" style="background-color: whitesmoke;">
  <p>polique de confidentialite </p>
  <p>polique de confidentialite</p>
  <p>&copy; 2024 <span>Charis</span>Action. Tous droits réservés.</p>
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

footer {
  background-color: #000;
  color: #fff;
  padding: 60px 0;
}

.footer-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-left {
  display: flex;
  justify-content: flex-end;
  flex-basis: 80%;
}

.footer-section {
  flex-basis: 30%;
  margin-right: 30px;
}

.footer-section h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-section ul li a:hover {
  color: #ccc;
}

.footer-right {
  text-align: right;
  font-size: 14px;
}
span{
  color: #2CC;
  
}
.footer-bottom {
  background-color: whitesmoke;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.footer-right p{
  font-size: 14px;
}

.footer-bottom p {
  margin: 0;
  font-size: 14px;
}

.footer-bottom p:first-child {
  text-align: left;
}

.footer-bottom p:last-child {
  text-align: right;
}
</style>