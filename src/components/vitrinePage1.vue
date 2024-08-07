<template>
  <section class="partie1">
    <div>
      <nav>
        <p
          style="font-size: 24px;font-weight: bold;margin-left: 50px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
          <span style="color: #2CC1D5;font-family: inter;">Charis</span>Action </p>
        <ul>

          <li><router-link to="/"
              style="text-decoration: none; color:black;list-style: none; font-size: 16px;font-weight: bold; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Home</router-link>
          </li>
          <li><router-link to="/"
              style="text-decoration: none; color: black;list-style: none; font-size: 16px;font-weight: bold; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Formations</router-link>
          </li>
          <li><router-link to="/"
              style="text-decoration: none; color: black;list-style: none; font-size: 16px;font-weight: bold; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">A
              propos</router-link></li>
          <li><router-link to="/"
              style="text-decoration: none; color: black;list-style: none; font-size: 16px;font-weight: bold; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Contact</router-link>
          </li>

        </ul>
      </nav>
    </div>

    <div class="image1">
      <img alt="" src="../assets/contactus-banner-bg.jpg">
      <div class="overlay">
        <h2
          style="color: white; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-size: 40px;font-weight: bold;">
          Faites De L'Informatique:<br>
          Votre Alié,<span style="color: #2CC1D5;">Au Quotidien</span>
        </h2>
        <h3 style="font-family:inter; font-size: 24px;font-weight: bold;">Decouvrez L'Expertise D'un Leader En
          Informatique.<br>
          Formations Completes D'infographie , Programmation ,<br> Design , Maintenance et bien d'autre.
        </h3>
      </div>
    </div>
    <div class="bouton1">

      <router-link
        style="text-decoration: none; color: white;list-style: none;  transform: translateY(30%); font-size: 24px; font-family: inter; font-weight: bold;">Inscrivez-Vous
        Dès Aujourd'hui !</router-link>
    </div>
  </section>
  <div class="message">

    <p id="formation"><span id="span1">Notre Engagement:</span><br>
      Une Formation De Qualite et de Confiance

    </p>
  </div>
  <section class="partie2">

    <div class="image2">
      <img alt="" src="../assets/belle.png">
    </div>
    <div class="message1">
      <div class="nous">
        <p id="titre">NOTRE EXPERTISE💡</p>
      </div>
      <p id="message2"> Sur notre plateforme,nous ne nous contentons pas de vous instruire;nous créons
        des examins qui viserons à evaluer votre niveau et votre avancement au cours de votre apprentissage.</p>
      <p id="message2">Nous vous accompagnons dans l'obtention de vos different diplome,de votre parcours scolaire et
        même sociale.<br></p>
      <div class="bouton2">
        <router-link
          style="text-decoration: none; color: white;list-style: none;  transform: translateY(30%); font-size: 24px; font-family: inter; font-weight: bold;">Inscrivez-Vous
          Dès Aujourd'hui !</router-link>
      </div>
    </div>
    <section class="partie3">
      <div class="formons">
        <h2 style="font-size: 30px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
">NOS <span
            style="color: #2CC1D5; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
">FORMATIONS</span></h2>
        <p>Engagez-vous vers un avenir prospere</p>
      </div>
      <div class="about">
        <ul>

          <li>

            <div class="mots">
              <img alt="" src="../assets/gestion de projet.jpg">
            </div>

            <span>GESTION DES PROJETS INFORMATIQUE</span>

          </li>
          <li>

            <div class="mots">
              <img alt="" src="../assets/developpement-site-web.jpg">
            </div>
            <span>CONCEPTION ET DEVELOPPEMNT D'APPLICATION WEB</span>

          </li>

          <li>
            <div class="mots">
              <img alt="" src="../assets/infographie.png">
            </div>
            <span>INFOGRAPHIE ET CREATION MULTIMEDIA</span>

          </li>
          <li>
            <div class="mots">
              <img alt="" src="../assets/conception graphique.jpg">
            </div>
            <span>CONCEPTION GRAPHIQUE </span>

          </li>
          <li>
            <div class="mots">
              <img alt="" src="../assets/app mobile.jpg">
            </div>
            <span>CONCEPTION ET DEVELOPPEMENT D'APPLICATION MOBILE</span>

          </li>
          <li>
            <div class="mots">
              <img alt="" src="../assets/reseaux.jpg">
            </div>
            <span>RESEAUX ET ADMINISTRATION RESEAU</span>

          </li>
        </ul>
      </div>
    </section>

  </section>
</template>
<style>
.partie1 {
  width: 95%;
  margin: auto;
  /* background-color: red; */
}

nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

}

li {
  text-decoration: none;
  list-style: none;
  padding-right: 60px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

ul {
  width: 40%;
  display: flex;
  justify-content: space-between;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


}

.navi {

  background-color: white;
  margin: 5px;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;


}

.image1 img {
  width: 100%;
}

.overlay {
  position: absolute;
  top: 85%;
  left: 400px;
  transform: translate(-50%, -50%);
  /* background-color: rgba(0, 0, 0, 0.4); */
  color: white;
  padding: 20px;
  text-align: left;
}

.bouton1 {
  margin-top: 30%;
  border-radius: 50px;
  background-color: #2CC1D5;
  width: 450px;
  height: 90px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-left: 450px;
  transform: translateY(-690px);


}

#formation {
  transform: translateY(-510px);
  text-align: left;
  margin: 3%;
  font-weight: bold;
  font-size: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

#span1 {

  font-size: 40px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #2CC1D5;
}

.image2 img {
  transform: translateY(-510px);
  margin: 3%;
  width: 650px;

}

.image2 {
  display: flex;
}

.message1 {
  background-color: black;
  width: 773px;
  height: 976px;
  transform: translateY(-510px);
  margin: 3%;
  position: absolute;
  top: 1794px;
  right: 0;

}

#message2 {
  color: white;
  font-size: 25px;
  font-family: 'Times New Roman', Times, serif;
  text-indent: 10px;
  margin: 60px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


}

#titre {
  color: gold;
  font-size: 25px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

.bouton2 {
  /* margin-top: 30%; */
  border-radius: 50px;
  background-color: #2CC1D5;
  width: 450px;
  height: 90px;
  text-align: center;
  display: flex;
  justify-content: center;
  transform: translateY(90%);
  margin: 150px;
}

.about {
  margin: 25px auto;
  padding: 0 8%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  margin-top: 10px;
  transform: translateY(-510px);

}

.about ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.about li {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
  transition: 0.5s;
  height: 300px;
  width: 28%;
  margin-left: 0.0px;
  margin-bottom: 0.0px;
}

.about li div {
  width: 100%;
  height: 60%;
}

.about li div img {
  height: 100%;
  width: 100%;
}

span {
  margin-top: 5px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;

}

.formons {
  transform: translateY(-510px);
}
p{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: bold;
}
</style>