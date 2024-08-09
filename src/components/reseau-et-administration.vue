<template>
    <navbarPage/>
    <div class="container">
      <section>
<h1>RESEAU ET ADMINISTRATION RESEAU</h1>

<div class="section1">
    <h2 class="titre">Présentation de la formation</h2>
    <div class="section-content">
      <p>

        Dans notre monde numérique, les réseaux informatiques sont devenus essentiels au bon fonctionnement des organisations de toutes tailles. Qu'il s'agisse d'un simple réseau local ou d'une infrastructure réseau étendue et complexe, leur gestion efficace est primordiale pour assurer la connectivité, la performance et la sécurité des systèmes d'information.<br><br>

Cette formation en "Réseau et administration réseau" vous permettra d'acquérir les connaissances et les compétences nécessaires pour relever ces défis. Vous apprendrez à comprendre les concepts fondamentaux des réseaux, à configurer et à administrer les équipements réseau, à mettre en place des réseaux locaux et étendus, à résoudre les problèmes de connectivité et de performance, et à sécuriser vos infrastructures.

</p>
    </div>
  </div>

  <div class="conteneur">
  <span>Objectifs </span><br><br><br><br>
  
  <div class="objective">
    <h2>1.Comprendre les concepts de base des réseaux informatiques :</h2>
    <p>Modèle OSI (Open Systems Interconnection)<br>
       Protocoles réseau (TCP/IP, Ethernet, Wi-Fi, etc.)<br>
       Adressage IP (IPv4, IPv6)<br>
       Routage et commutation<br>
    </p>
  </div>
  
  <div class="objective">
    <h2>2. Acquérir des compétences en configuration et gestion des équipements réseau :</h2>
    <p>Routeurs
          Commutateurs (switches)<br>
          Points d'accès sans fil<br>
          Pare-feux<br>
          Serveurs DHCP, DNS, etc.<br>
</p>
  </div>
  
  <div class="objective">
    <h2>3. Apprendre à mettre en place et à administrer des réseaux locaux (LAN) et étendus (WAN) :</h2>
    <p>Segmentation du réseau (sous-réseaux, VLANs)<br>
Configuration des interfaces réseau<br>
Gestion de la connectivité et de la qualité de service<br>
Déploiement de services réseau (serveurs, clients, services d'annuaire, etc.)<br>
</p>
  </div>
  
  <div class="objective">
    <h2>4. Développer des compétences en dépannage et résolution de problèmes réseau :</h2>
    <p>Utilisation d'outils de surveillance et d'analyse (Wireshark, PRTG, etc.)<br>
        Identification et résolution des problèmes de connectivité, de performances, de sécurité, etc.<br>
</p>
  </div>
  
  <div class="objective">
    <h2>5. Se familiariser avec les technologies de virtualisation et de cloud computing appliquées aux réseaux :</h2>
    <p>Concepts de SDN (Software-Defined Networking)<br>
Orchestration et automatisation des réseaux <br>
Déploiement de réseaux virtuels (VPN, SD-WAN, etc.)<br>
</p>
  </div>
  <div class="objective">
    <h2>6. Acquérir des connaissances en sécurité des réseaux :</h2>
    <p>Mise en place de politiques de sécurité <br>
Configuration de pare-feux et de systèmes de détection d'intrusion<br>
Gestion des accès et des autorisations<br>
</p>
  </div>

  <div class="objective">
    <h2>7.Comprendre les tendances et les évolutions futures dans le domaine des réseaux :</h2>
    <p>Internet des objets (IoT)<br>
5G et réseaux mobiles avancés<br>
Réseaux de nouvelle génération (SDN, NFV, etc.)<br>
</p>
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