<template>
  <div class="container">
    <section>
      <nav style="position: fixed; background: white;">
        <h3><span>Charis</span>Action</h3>
        <ul>
          <li><router-link class="menu" to="/">Home</router-link></li>
          <li class="dropdown">
            <a href="#" class="menu">Formation</a>
            <ul class="dropdown-menu">
              <li><a href="/gestion-de-projets-informatique">Gestion des projets informatiques</a></li>
              <li><a href="/conception-et-developpement-web">Conception et développement d'applications web</a></li>
              <li><a href="/infographie-et-creation-multimedia">Infographie et création multimédia</a></li>
              <li><a href="/conception-graphique">Conception graphique</a></li>
              <li><a href="/conception-et-developpement-mobile">Conception et développement d'applications mobiles</a>
              </li>
              <li><a href="/reseau-et-administration">Réseau et administration réseau</a></li>
            </ul>
          </li>
          <li v-if="isAuthentify === false" @click="showSeConnecter"><a class="menu">Se connecter</a>
          </li>
          <li v-if="isAuthentify === true"><router-link class="menu" to="/lecon">Mes cours</router-link>
          </li>
          <li v-if="isAuthentify === true" @click="logout"><router-link class="menu" to="/"><i style="color: red;"
                class="fa fa-power-off"></i></router-link>
          </li>
        </ul>
      </nav>
      <div class="head">
        <div class="overlay">
          <div class="text2"></div>
          <div class="text">
            <h2>
              Faites De L'Informatique:<br>
              Votre Alié,<span>Au Quotidien</span>
            </h2>
            <h3>Decouvrez L'Expertise D'un Leader En
              Informatique.<br>
              Formations Completes D'infographie , Programmation ,<br> Design , Maintenance et bien d'autre.
            </h3>
            <router-link to="/inscriptionPage" class="btn">Inscrivez-Vous
              Dès Aujourd'hui !</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="sect2">
      <h2 id="message"><span id="span1">Notre Engagement:</span><br>
        Une Formation De Qualite et de Confiance
      </h2>
      <div class="s_part">
        <img alt="" src="../assets/belle.png">
        <div class="s_text">
          <p> Sur notre plateforme,nous ne nous contentons pas de vous instruire;nous créons
            des examins qui viserons à evaluer votre niveau et votre avancement au cours de votre apprentissage.</p>
          <p style="margin-bottom: 50px;">Nous vous accompagnons dans l'obtention de vos different diplome,de votre
            parcours scolaire
            et
            même sociale.<br></p>
          <router-link to="/inscriptionPage" class="btn">Inscrivez-Vous
            Dès Aujourd'hui !</router-link>
        </div>
      </div>
    </section>
    <section class="partie3">
      <h2 class="title">NOS <span>FORMATIONS</span></h2>
      <div class="partie3_1">
        <h2>
          <img alt="" src="../assets/gestion de projet.jpg">
          GESTION DES PROJETS INFORMATIQUE
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos ipsam minus exercitationem, officia
            voluptates ullam atque mollitia. Quibusdam ab sunt culpa earum commodi? Rerum, nihil. Dolore totam tempora
            assumenda?</p>
          <a href="/inscriptionPage" class="button">S'inscrire</a>
        </h2>
        <h2>
          <img alt="" src="../assets/developpement-site-web.jpg">
          CONCEPTION ET DEVELOPPEMNT D'APPLICATION WEB
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus, suscipit veniam voluptatem soluta
            ratione distinctio illum? Nobis id, nulla accusamus molestiae assumenda nemo iste est perferendis voluptates
            repellat sequi!</p>
          <a href="/inscriptionPage" class="button">S'inscrire</a>
        </h2>
        <h2>
          <img alt="" src="../assets/infographie.png">
          INFOGRAPHIE ET CREATION MULTIMEDIA
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quam cum nisi, autem tempora debitis
            corporis, unde labore dignissimos voluptatibus ipsam. Mollitia architecto temporibus reprehenderit deleniti
            provident expedita ea veniam?</p>
          <a href="/inscriptionPage" class="button">S'inscrire</a>
        </h2>
      </div>
      <h3>Engagez-vous vers un avenir prospere</h3>
      <div class="partie3_2">
        <h2>
          <img alt="" src="../assets/conception graphique.jpg">
          CONCEPTION GRAPHIQUE
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quos odio natus voluptates, beatae a
            placeat repellendus veritatis nulla eligendi iure! Quibusdam cumque assumenda nisi ea ducimus, eum
            accusantium libero.</p><br><br>
          <a href="/inscriptionPage" class="button">S'inscrire</a>
        </h2>
        <h2>
          <img alt="" src="../assets/app mobile.jpg">
          CONCEPTION ET DEVELOPPEMENT D'APPLICATION MOBILE
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae recusandae molestias sunt itaque cumque?
            Culpa est sunt, delectus rerum natus tenetur expedita, alias itaque cum beatae voluptates voluptate
            consectetur enim.</p>
          <a href="/inscriptionPage" class="button">S'inscrire</a>
        </h2>
        <h2>
          <img alt="" src="../assets/reseaux.jpg">
          RESEAUX ET ADMINISTRATION RESEAU
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, asperiores mollitia. Possimus, nemo.
            Blanditiis omnis aliquid consequuntur quam consectetur tenetur iste cumque ipsam, quia eveniet, tempore, in
            harum nemo! Recusandae!</p><br>
          <a href="/inscriptionPage" class="button">S'inscrire</a>
        </h2>
      </div>
    </section>
    <section class="partie4">
      <div class="partie4_2">
        <img src="../assets/code.jpg" alt="">
        <div class="textL">
          <h2>QUI SOMMES NOUS? <br>
            <p>
              Nous sommes une structurequi c’est donnée pour mission de former les leaders de demain dans les domaines
              clés
              de l’informatiques et de la technologie.Que vous souhaitez vous epanouir en tant que developpeur de
              logiciels,
              concepteurs web ou encore infographe ,notre equipe d’expert vous accompagneras tout au long de votre
              parcours<br>
              VIVEZ UNE EXPERIENCE NOUVELLE AVEC NOUS
            </p>
          </h2>
          <router-link class="btn">Voir plus</router-link>
        </div>
      </div>
    </section>
    <section class="partie5">
      <h2 class="form-title">Laissez-nous un message</h2>
      <p id="form-texte"> vous pouvez egalement remplir le formulaire Ci-<br>dessous et nous vous recontacterons<br>
        dans les
        brefs delais </p>
      <div class="contact-form" @submit.prevent="comment">

        <form>

          <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" name="name" v-model="nom" required>
          </div>
          <div class="form-group">
            <label for="firstname">Prénom</label>
            <input type="text" id="firstname" name="firstname" v-model="prenom" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="subject">Objet</label>
            <input type="text" id="subject" name="subject" v-model="objet" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" v-model="message" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Envoyer</button>
        </form>
      </div>
    </section>
    <section class="partie6">
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
  <div v-if="SeConnecter" style="width: 100%; position: absolute; left: 0; top: 0; height: 100vh;" >
    <connecter style="margin-top: 10%; margin-left: 30%; position: fixed;" />
  </div>
</template>

<script>
import axios from 'axios';
import connecter from './PageConnexion.vue';
export default {
  components: {
    connecter,
  },
  data() {
    return {
      selectedImageURL2: null,
      selectedImage2: null,
      isAuthentify: false,
      seConnecter: true,
      SeConnecter: false,
    }
  },

  created() {
    const isAuthentify = localStorage.getItem('isAuthentify');

    this.isAuthentify = isAuthentify === 'true';
  },
  methods: {
    showSeConnecter() {
      this.SeConnecter = true;
    },
    ifAuthentify() {
      this.seConnecter = false;
    },
    logout() {
      localStorage.removeItem('userId')
      localStorage.removeItem('isAuthentify')
      this.$router.push('/');
      window.location.reload();
    },
    async comment() {
      try {
        const response = await axios.post('http://localhost:3000/comment', {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          objet: this.objet,
          message: this.message,



        });
        this.$router.push('/');
        alert(response.data.message)
        console.log(response.data.message);
      } catch (error) {

        console.log('echec');
      }
    },
  }
}
</script>

<style scoped>
.container {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  width: 100%;
  margin: auto;
}

section {
  width: 100%;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  left: 0px;
  margin-top: -15px !important;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

ul {
  width: 50%;
  display: flex;
  justify-content: space-between;
}

li {
  list-style: none;
  font-weight: bold;
  font-size: 19px;
}

li:hover {
  background-color: rgba(13, 190, 167, 0.1);
  cursor: pointer;
}

.menu {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

nav h3 {
  color: black;
}

nav h3 span {
  font-weight: bold;
  color: #2CC;
}

.head {
  width: 100%;
  background-image: url(../assets/contactus-banner-bg.jpg);
  height: 90vh;
  background-position: center;
  background-size: cover;

}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 90vh;
  display: block;
}

.text2 {
  height: 20vh;
  width: 100%;
  background-color: transparent;
}

.text {
  width: 50%;
  text-align: left;
  margin-left: 60px;

}

.text h2 {
  font-size: 35px;
  color: white;
}

.text h2 span {
  font-size: 30px;
  color: #2CC;

}

.text h3 {
  font-size: 20px;
  color: rgb(222, 224, 224);
  margin-top: -30px;
  margin-bottom: 60px;
}

.overlay .btn {
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 20px;
  font-weight: bold;
  padding: 17px;
  text-decoration: none;
  color: white;
  background: #2CC;
  border-radius: 50px;
}

#message {
  width: 50%;
  text-align: left;
  color: rgba(0, 0, 0, 0.7);
  font-size: 25px;
}

#message span {
  color: #2CC;
  font-size: 35px;
}

.s_part {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.89);
}

.s_part img {
  width: 45% !important;
}

.s_text {
  width: 50%;
  text-align: left;
}

.s_text p {
  font-size: 25px;
  color: white;
}

.s_text .btn {
  background-color: black;
  font-size: 20px;
  font-weight: bold;
  padding: 17px;
  text-decoration: none;
  color: black;
  background: white;
  margin-top: 50px;
  border-radius: 50px;
}

.sect2 {
  display: block;
}

.partie3 {
  display: block;
  width: 100%;
  height: 100vh;
}

.partie3 .title {
  color: black;
  font-size: 40px;
  text-align: center;
}

.partie3 img {
  width: 100%;
  border-radius: 10px;
  margin: 0;
  height: 30vh;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
}

.partie3 .title span {
  color: #2CC;
}

.partie3 h3 {
  color: black;
  font-size: 30px;
}

.partie3_1 {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.partie3_2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.partie3_1 h2 {
  width: 27%;
  background-color: white;
  font-size: 25px;
  color: black;
  text-align: left;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;
}

.partie3_2 h2 {
  width: 27%;
  background-color: white;
  font-size: 25px;
  /* padding: 60px 0; */
  /* color: white; */
  color: black;
  text-align: left;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;
}

.partie4 {
  display: block;
  width: 100%;
  height: 100vh;
  margin-top: 750px;
}

.partie4 .partie4_1 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: green;
}

.partie4 .partie4_2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
}

.partie4 .partie4_2 img {
  width: 45%;
  height: 85vh;
  background: rgba(0, 0, 0, 0.2);
  margin-top: 8vh;
}

.partie4_2 .textL {
  text-align: left;
  font-size: 35px;
  width: 50%;
  color: #2CC;
  margin-top: 20vh;
}

.textL h2 p {
  font-size: 20px;
}

.partie4_2 p {
  font-size: 15px;
  color: black;
}

.partie4 .btn {
  background-color: black;
  font-size: 20px;
  font-weight: bold;
  padding: 20px 50px;
  text-decoration: none;
  color: white;
  margin-top: 50px;
  border-radius: 50px;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #2CC;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 0px;
}

.form-title {
  text-align: center;
  color: black;
  margin-bottom: 30px;
  font-size: 40px;
  font-family: tiro Devanagari Hindi;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #f8f8f8;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
}

textarea {
  resize: vertical;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 12px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:hover {
  background-color: rgb(173, 170, 170);
}

.mots {

  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  display: flex;
  align-items: center;
}

#form-texte {
  font-size: 24px;
  font-family: tiro Devanagari Hindi;
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

span {
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

/* Styles pour la liste déroulante */
.dropdown {
  position: relative;
  display: inline-block;
}

.menu {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: whitesmoke;
  min-width: 400px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.dropdown-menu li {
  padding: 10px 20px;
}

.dropdown-menu li a {
  color: #333;
  text-decoration: none;
  display: block;
}

.dropdown-menu li a:hover {
  background-color: rgb(133, 138, 138);
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.button {
  display: inline-block;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  width: 90%;
  margin-top: 15px;
}

.button:hover {
  background-color: #555;
}

h2 p {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: lighter;
}

.partie6 {
  margin-top: 100px;
}
</style>
