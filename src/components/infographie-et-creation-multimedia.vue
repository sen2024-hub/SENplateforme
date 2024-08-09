<template>
    <navbarPage/>
    <div class="container">
      <section>
<h1>INFOGRAPHIE ET CREATION MULTIMEDIA</h1>

<div class="section1">
    <h2 class="titre">Présentation de la formation</h2>
    <div class="section-content">
      <p>


        Devenez un créateur visuel accompli
Dans un monde numérique, la maîtrise de l'infographie et de la création multimédia est devenue une compétence recherchée. Notre formation vous permettra d'acquérir les techniques et les outils essentiels pour concevoir des visuels et des contenus captivants.<br><br>

Vous apprendrez à utiliser avec aisance les logiciels phares de la création graphique, tout en développant un sens aigu du design et de la composition. De l'animation 2D/3D au montage vidéo, vous serez en mesure de donner vie à des contenus multimédias innovants et engageants. <br><br>

Restez à la pointe des tendances du digital et de l'expérience utilisateur pour proposer des solutions créatives, adaptées aux besoins de vos clients ou de votre entreprise. Rejoignez-nous et devenez un professionnel accompli de l'image et du multimédia !</p>
    </div>
  </div>

  <div class="conteneur">
  <span>Objectifs </span><br><br><br><br>
  
  <div class="objective">
    <h2>1. Maîtriser les logiciels et outils de création graphique</h2>
    <p>Apprendre à utiliser les principaux logiciels d'infographie (Adobe Photoshop, Illustrator, InDesign, etc.)
Savoir manipuler les différents formats d'images (JPG, PNG, SVG, etc.) et leurs spécificités
Être capable de créer des éléments graphiques de qualité professionnelle
    r></p>
  </div>
  
  <div class="objective">
    <h2>2. Développer des compétences en design et en composition visuelleA</h2>
    <p>Comprendre les principes du design (couleurs, typographie, mise en page, etc.)
Savoir appliquer les règles de la théorie de la Gestalt et de la composition
Être capable de concevoir des visuels attrayants et équilibrés
.</p>
  </div>
  
  <div class="objective">
    <h2>3. Acquérir des connaissances en création multimédia</h2>
    <p>Apprendre à créer et à animer des contenus multimédias (vidéos, animations, infographies, etc.)
Maîtriser les techniques d'enregistrement, de montage et de post-production audiovisuelle
Savoir exporter et optimiser les fichiers multimédias pour le web et les applications mobiles
</p>
  </div>
  
  <div class="objective">
    <h2>4. Développer une approche centrée sur l'expérience utilisateur (UX)</h2>
    <p>Comprendre les principes de l'ergonomie et de l'accessibilité web
Savoir réaliser des maquettes, wireframes et prototypes interactifs
Être capable d'évaluer l'expérience utilisateur et d'itérer sur les designs
</p>
  </div>
  
  <div class="objective">
    <h2>5. Acquérir une culture et une veille dans les tendances du digital</h2>
    <p>Rester à jour sur les dernières tendances en matière de design web et digital
Être capable d'innover et de proposer des solutions créatives et originales
Développer une démarche d'apprentissage continu et d'amélioration continue.</p>
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