<template>
  <div class="body">
  <div class="registration-form" @submit.prevent="createAcount" id="signup-form">
    <h2 class="form-title">Inscription</h2>
    <form>
      <div class="form-group">
        <!-- <div class="profile-picture-container">
          <div class="input-field">
            <label for="photoProfil"> Photo de profil </label>
            <input class="box" type="file" id="photoProfil" accept="image/*" @change="onFileSelected2" required>
            <img class="affiche" :src="selectedImageURL2" v-if="selectedImage2">
          </div>
        </div> -->
        <label for="name">Nom :</label>
        <input type="text" id="name" name="name" v-model="nom" required>
      </div>
      <div class="form-group">
        <label for="firstname">Prénom :</label>
        <input type="text" id="firstname" name="firstname" v-model="prenom"  required>
      </div>
      <div class="form-group">
        <label for="birthdate">Date de naissance :</label>
        <input type="date" id="birthdate" name="birthdate" v-model="date_de_naissance"  required>
      </div>
      <div class="form-group">
        <label for="birthplace">Lieu de naissance :</label>
        <input type="text" id="birthplace" name="birthplace" v-model="lieu_de_naissance"  required>
      </div>
      <label for="gender" class="required">Sexe :</label>
    <select id="gender" name="gender" required>
      <option value="">Sélectionnez un sexe</option>
      <option value="male">Homme</option>
      <option value="female">Femme</option>
      <option value="other">Autre</option>
    </select>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" v-model="email"  required>
      </div>
   
      <!-- <div class="form-group">
        <label for="location">Localisation :</label>
        <input type="text" id="location" name="location" required>
      </div> -->
      <div class="form-group">
        
  
    <label for="pays">Pays de résidence:</label>
    <select id="pays" name="pays" required>
      <option value="">Sélectionner un pays</option>
      <option value="AFG">Afghanistan</option>
      <option value="ALB">Albanie</option>
      <option value="DZA">Algérie</option>
      <option value="AND">Andorre</option>
      <option value="AGO">Angola</option>
      <option value="ATG">Antigua-et-Barbuda</option>
      <option value="ARG">Argentine</option>
      <option value="ARM">Arménie</option>
      <option value="AUS">Australie</option>
      <option value="AUT">Autriche</option>
      <option value="AZE">Azerbaïdjan</option>
      <option value="BHS">Bahamas</option>
      <option value="BHR">Bahreïn</option>
      <option value="BGD">Bangladesh</option>
      <option value="BRB">Barbade</option>
      <option value="BLR">Bélarus</option>
      <option value="BEL">Belgique</option>
      <option value="BLZ">Belize</option>
      <option value="BEN">Bénin</option>
      <option value="BTN">Bhoutan</option>
      <option value="BOL">Bolivie</option>
      <option value="BIH">Bosnie-Herzégovine</option>
      <option value="BWA">Botswana</option>
      <option value="BRA">Brésil</option>
      <option value="BRN">Brunei Darussalam</option>
      <option value="BGR">Bulgarie</option>
      <option value="BFA">Burkina Faso</option>
      <option value="BDI">Burundi</option>
      <option value="CPV">Cabo Verde</option>
      <option value="KHM">Cambodge</option>
      <option value="CMR">Cameroun</option>
      <option value="CAN">Canada</option>
      <option value="CAF">République centrafricaine</option>
      <option value="TCD">Tchad</option>
      <option value="CHL">Chili</option>
      <option value="CHN">Chine</option>
      <option value="COL">Colombie</option>
      <option value="COM">Comores</option>
      <option value="COD">République démocratique du Congo</option>
      <option value="COG">Congo</option>
      <option value="CRI">Costa Rica</option>
      <option value="CIV">Côte d'Ivoire</option>
      <option value="HRV">Croatie</option>
      <option value="CUB">Cuba</option>
      <option value="CYP">Chypre</option>
      <option value="CZE">Tchéquie</option>
      <option value="DNK">Danemark</option>
      <option value="DJI">Djibouti</option>
      <option value="DMA">Dominique</option>
      <option value="DOM">République dominicaine</option>
      <option value="ECU">Équateur</option>
      <option value="EGY">Égypte</option>
      <option value="SLV">El Salvador</option>
      <option value="GNQ">Guinée équatoriale</option>
      <option value="ERI">Érythrée</option>
      <option value="EST">Estonie</option>
      <option value="SWZ">Eswatini</option>
      <option value="ETH">Éthiopie</option>
      <option value="FJI">Fidji</option>
      <option value="FIN">Finlande</option>
      <option value="FRA">France</option>
      <option value="GAB">Gabon</option>
      <option value="GMB">Gambie</option>
      <option value="GEO">Géorgie</option>
      <option value="DEU">Allemagne</option>
      <option value="GHA">Ghana</option>
      <option value="GRC">Grèce</option>
      <option value="GRD">Grenade</option>
      <option value="GTM">Guatemala</option>
      <option value="GIN">Guinée</option>
      <option value="GNB">Guinée-Bissau</option>
      <option value="GUY">Guyana</option>
      <option value="HTI">Haïti</option>
      <option value="HND">Honduras</option>
      <option value="HUN">Hongrie</option>
      <option value="ISL">Islande</option>
      <option value="IND">Inde</option>
      <option value="IDN">Indonésie</option>
      <option value="IRN">Iran</option>
      <option value="IRQ">Irak</option>
      <option value="IRL">Irlande</option>
      <option value="ISR">Israël</option>
      <option value="ITA">Italie</option>
      <option value="JAM">Jamaïque</option>
      <option value="JPN">Japon</option>
      <option value="JOR">Jordanie</option>
      <option value="KAZ">Kazakhstan</option>
      <option value="KEN">Kenya</option>
      <option value="KIR">Kiribati</option>
      <option value="PRK">Corée du Nord</option>
      <option value="KOR">Corée du Sud</option>
      <option value="KOS">Kosovo</option>
      <option value="KWT">Koweït</option>
      <option value="KGZ">Kirghizistan</option>
      <option value="LAO">Laos</option>
      <option value="LVA">Lettonie</option>
      <option value="LBN">Liban</option>
      <option value="LSO">Lesotho</option>
      <option value="LBR">Libéria</option>
      <option value="LBY">Libye</option>
      <option value="LIE">Liechtenstein</option>
      <option value="LTU">Lituanie</option>
      <option value="LUX">Luxembourg</option>
      <option value="MDG">Madagascar</option>
      <option value="MWI">Malawi</option>
      <option value="MYS">Malaisie</option>
      <option value="MDV">Maldives</option>
      <option value="MLI">Mali</option>
      <option value="MLT">Malte</option>
      <option value="MHL">Îles Marshall</option>
      <option value="MRT">Mauritanie</option>
      <option value="MUS">Maurice</option>
      <option value="MEX">Mexique</option>
      <option value="FSM">États fédérés de Micronésie</option>
      <option value="MDA">Moldavie</option>
      <option value="MCO">Monaco</option>
      <option value="MNG">Mongolie</option>
      <option value="MNE">Monténégro</option>
      <option value="MAR">Maroc</option>
      <option value="MOZ">Mozambique</option>
      <option value="MMR">Myanmar</option>
      <option value="NAM">Namibie</option>
      <option value="NRU">Nauru</option>
      <option value="NPL">Népal</option>
      <option value="NLD">Pays-Bas</option>
      <option value="NZL">Nouvelle-Zélande</option>
      <option value="NIC">Nicaragua</option>
      <option value="NER">Niger</option>
      <option value="NGA">Nigéria</option>
      <option value="MKD">Macédoine du Nord</option>
      <option value="NOR">Norvège</option>
      <option value="OMN">Oman</option>
      <option value="PAK">Pakistan</option>
      <option value="PLW">Palaos</option>
      <option value="PAN">Panama</option>
      <option value="PNG">Papouasie-Nouvelle-Guinée</option>
      <option value="PRY">Paraguay</option>
      <option value="PER">Pérou</option>
      <option value="PHL">Philippines</option>
      <option value="POL">Pologne</option>
      <option value="PRT">Portugal</option>
      <option value="QAT">Qatar</option>
      <option value="ROU">Roumanie</option>
      <option value="RUS">Russie</option>
      <option value="RWA">Rwanda</option>
      <option value="KNA">Saint-Christophe-et-Niévès</option>
      <option value="LCA">Sainte-Lucie</option>
      <option value="VCT">Saint-Vincent-et-les-Grenadines</option>
      <option value="WSM">Samoa</option>
      <option value="SMR">Saint-Marin</option>
      <option value="STP">Sao Tomé-et-Principe</option>
      <option value="SAU">Arabie saoudite</option>
      <option value="SEN">Sénégal</option>
      <option value="SRB">Serbie</option>
      <option value="SYC">Seychelles</option>
      <option value="SLE">Sierra Leone</option>
      <option value="SGP">Singapour</option>
      <option value="SVK">Slovaquie</option>
      <option value="SVN">Slovénie</option>
      <option value="SLB">Îles Salomon</option>
      <option value="SOM">Somalie</option>
      <option value="ZAF">Afrique du Sud</option>
      <option value="SSD">Soudan du Sud</option>
      <option value="ESP">Espagne</option>
      <option value="LKA">Sri Lanka</option>
      <option value="SDN">Soudan</option>
      <option value="SUR">Suriname</option>
      <option value="SWE">Suède</option>
      <option value="CHE">Suisse</option>
      <option value="SYR">Syrie</option>
      <option value="TWN">Taïwan</option>
      <option value="TJK">Tadjikistan</option>
      <option value="TZA">Tanzanie</option>
      <option value="THA">Thaïlande</option>
      <option value="TLS">Timor-Leste</option>
      <option value="TGO">Togo</option>
      <option value="TON">Tonga</option>
      <option value="TTO">Trinité-et-Tobago</option>
      <option value="TUN">Tunisie</option>
      <option value="TUR">Turquie</option>
      <option value="TKM">Turkménistan</option>
      <option value="TUV">Tuvalu</option>
      <option value="UGA">Ouganda</option>
      <option value="UKR">Ukraine</option>
      <option value="ARE">Émirats arabes unis</option>
      <option value="GBR">Royaume-Uni</option>
      <option value="USA">États-Unis</option>
      <option value="URY">Uruguay</option>
      <option value="UZB">Ouzbékistan</option>
      <option value="VUT">Vanuatu</option>
      <option value="VEN">Venezuela</option>
      <option value="VNM">Viêt Nam</option>
      <option value="YEM">Yémen</option>
      <option value="ZMB">Zambie</option>
      <option value="ZWE">Zimbabwe</option>
    </select>
    <label for="phone-input">Numéro de téléphone :</label>
    <div class="phone-input">
      <select id="country-code">
        <option value="+1">+1 (États-Unis)</option>
        <option value="+44">+44 (Royaume-Uni)</option>
        <option value="+33">+33 (France)</option>
        <option value="+49">+49 (Allemagne)</option>
        <option value="+81">+81 (Japon)</option>
        <option value="+86">+86 (Chine)</option>
        <option value="+237">+237 (Cameroun)</option>
        <option value="+27">+27 (Afrique du Sud)</option>
        <option value="+234">+234 (Nigeria)</option>
        <option value="+254">+254 (Kenya)</option>
      </select>
      <input type="tel" id="phone-number"  v-model="numero"  placeholder="Entrez votre numéro">
    </div>
      </div>
      
    <label for="status">Statut :</label>
    <select id="status" name="status">
      <option value="active">Actif</option>
      <option value="resigned">Démissionner</option>
      <option value="ejected">Éjecter</option>
    </select>
    <label for="profile">Profil :</label>
    <select id="profile" name="profile">
      <option value="classic">Classique</option>
    </select>
      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" v-model="password"  required>
      </div>
      <label>
      <input type="checkbox" name="terms" required> J'accepte les termes et conditions générales d'utilisation*
    </label>
      <button type="submit" class="submit-btn">S'inscrire</button>
      <router-link to="/PageConnexion" class="btn">annuler</router-link>

    </form>
  </div>

</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      selectedImageURL2: null,
      selectedImage2: null,
    }
  },
  methods: {
    onFileSelected2(event) {
      this.selectedImage2 = event.target.files[0];
      this.fileName3 = this.selectedImage2.name;
      this.selectedImageURL2 = URL.createObjectURL(this.selectedImage2);
    },
    async createAcount() {
      try {
        const response = await axios.post('http://localhost:3000/signup', {
          nom: this.nom,
          prenom: this.prenom,
          date_de_naissance: this.date_de_naissance,
          lieu_de_naissance: this.lieu_de_naissance,
          email: this.email,
          numero: this.numero,
          password: this.password,
          confirmation_du_password: this.prenom,

         
        });
        this.$router.push('/');
        
        console.log(response.data.message);
      } catch (error) {
        
        console.log('echec');
      }
    },
  }
}
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.body{
background-color: #2cc;
}
.box {
  font-size: 15px;
  background: white;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  outline: none;
}

.registration-form {
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  padding: 40px 50px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin: auto;
}

.form-title {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
}

/* Styles pour input et select identiques */
input,
select {
  width: calc(100% - 30px);
  height: 45px;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f7f7f7;
  box-sizing: border-box;
}

input:focus,
select:focus {
  outline: none;
  border-color: #2bc9e5;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: 500;
  background-color: #2bc9e5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #1ba8a8;
}

.profile-picture-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.form-group1 {
  margin-bottom: 25px;
  display: flex;
}

input[type="checkbox"] {
  transform: scale(1); /* Ajustez cette valeur pour changer la taille */
  margin-right: 1px; /* Espacement à droite de la case à cocher */
}

.btn {
  font-size: 20px;
  font-weight: bold;
  padding: 17px;
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>