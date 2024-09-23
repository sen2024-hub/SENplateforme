<template>
    <div class="background"> <!-- Ajout d'une classe pour le fond -->
        <div class="container">
            <h1>Mon Compte</h1>
            <button id="consult-btn" @click="showSection('consult')">Consulter mes informations</button>
            <button id="edit-btn" @click="showSection('edit')">Modifier mes informations</button>
            <button id="back-btn" @click="goBack">Retour</button> <!-- Bouton retour -->

            <div id="consult-section" class="form-section" v-show="currentSection === 'consult'">
                <h2>Informations</h2>
                <p v-if="user"><strong>Nom :</strong> {{ user.nom }}</p>
                <p v-if="user"><strong>Prénom :</strong> {{ user.prenom }}</p>
                <p v-if="user"><strong>Email :</strong> {{ user.email }}</p>
                <p v-if="user"><strong>Date de naissance :</strong> {{ formatDate(user.date_de_naissance) }}</p>
                <p v-if="user"><strong>Lieu de naissance :</strong> {{ user.lieu_de_naissance }}</p>
                <p v-if="user"><strong>Téléphone :</strong> {{ user.numero }}</p>
                <p v-else>Chargement des informations...</p>
            </div>

            <div id="edit-section" class="form-section" v-show="currentSection === 'edit'">
                <h2>Modifier mes informations</h2>
                <form id="account-form" @submit.prevent="saveInfo">
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" v-model="nom" placeholder="Votre nom" required>

                    <label for="prenom">Prénom</label>
                    <input type="text" id="prenom" v-model="prenom" placeholder="Votre prénom" required>

                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" placeholder="Votre email" required>

                    <label for="birthdate">Date de naissance</label>
                    <input :type="date" id="birthdate" v-model="dateNaissance" required>

                    <label for="birthplace">Lieu de naissance</label>
                    <input type="text" id="birthplace" v-model="lieuNaissance" placeholder="Votre lieu de naissance" required>

                    <label for="numero">Numéro</label>
                    <input type="tel" id="numero" v-model="numero" placeholder="Votre téléphone" required>

                    <button type="submit">Sauvegarder</button>
                </form>
            </div>

            <div class="footer">
                <p>&copy; 2024 <span>Charis</span>Action. Tous droits réservés.</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: null,
            nom: '',
            prenom: '',
            email: '',
            numero: '',
            dateNaissance: '',
            lieuNaissance: '',
            currentSection: 'consult',
            userId: null // ID de l'utilisateur
        };
    },
    methods: {
        async fetchUserInfo() {
            const userId = this.userId || localStorage.getItem('userId'); // Récupérer l'ID de l'utilisateur

            if (!userId) {
                console.error('Aucun ID utilisateur trouvé');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3000/api/utilisateur/${userId}`);
                this.user = response.data; // Stocker l'utilisateur
                this.nom = this.user.nom;
                this.prenom = this.user.prenom;
                this.email = this.user.email;
                this.numero = this.user.numero;
                this.dateNaissance = this.user.date_de_naissance; // Récupérer la date de naissance
                this.lieuNaissance = this.user.lieu_de_naissance; // Récupérer le lieu de naissance
            } catch (error) {
                console.error('Erreur lors de la récupération des informations utilisateur:', error.response ? error.response.data : error.message);
            }
        },
        showSection(section) {
            this.currentSection = section;
        },
        async saveInfo() {
            const userId = this.userId || localStorage.getItem('userId'); // Récupérer l'ID de l'utilisateur

            try {
                const response = await axios.put(`http://localhost:3000/api/utilisateur/${userId}`, {
                    nom: this.nom,
                    prenom: this.prenom,
                    email: this.email,
                    numero: this.numero,
                    date_de_naissance: this.dateNaissance, // Inclure la date de naissance
                    lieu_de_naissance: this.lieuNaissance // Inclure le lieu de naissance
                });

                if (response.status === 200) {
                    alert('Informations mises à jour avec succès !');
                    await this.fetchUserInfo(); // Rafraîchir les informations utilisateur
                    this.showSection('consult'); // Retourner à la section de consultation
                } else {
                    alert('Erreur lors de la mise à jour des informations.');
                }
            } catch (error) {
                console.error('Erreur lors de la mise à jour des informations utilisateur:', error.response ? error.response.data : error.message);
                alert('Erreur lors de la mise à jour des informations.');
            }
        },
        goBack() {
            this.$router.push('/'); // Rediriger vers la page d'accueil
        },
        formatDate(dateString) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            const date = new Date(dateString);
            return date.toLocaleDateString('fr-FR', options).replace(/\//g, '-'); // Format YYYY-MM-DD
        }
    },
    mounted() {
        this.fetchUserInfo(); // Récupère les informations de l'utilisateur à la montée du composant
    }
}
</script>

<style scoped>
html, body {
    height: 100%; /* Assurez-vous que le corps prend toute la hauteur */
    margin: 0;
}

.background {
    background-color: rgba(0, 0, 0, 0.3); /* Couleur de fond */
    height: 100vh; /* Hauteur de la vue */
    display: flex;
    align-items: center; /* Centrer verticalement le contenu */
    justify-content: center; /* Centrer horizontalement le contenu */
    overflow: hidden; /* Évite que le contenu dépasse */
}

.container {
    max-width: 600px; /* Limite la largeur du formulaire */
    width: 100%; /* S'assure que le conteneur prend toute la largeur */
    max-height: 80vh; /* Limite la hauteur du conteneur */
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto; /* Permet le défilement vertical */
}

h1 {
    text-align: center;
    color: #333;
}

button {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    background-color: #2cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #1a9;
}

.form-section {
    margin-top: 20px;
    padding: 20px; /* Padding pour éviter que le contenu soit collé aux bords */
    border: 1px solid #ccc; /* Bordure pour délimiter le formulaire */
    border-radius: 8px; /* Coins arrondis */
    background: #f9f9f9; /* Couleur de fond pour le formulaire */
}

.footer {
    text-align: center;
    margin-top: 20px;
    font-size: 0.9em;
    color: #666;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"] {
    width: calc(100% - 20px); /* Largeur moins les marges */
    padding: 10px; /* Hauteur uniforme */
    margin: 10px 0; /* Espacement vertical */
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* Inclure le padding et la bordure dans la largeur totale */
}

label {
    margin-top: 10px; /* Espacement au-dessus des labels */
    display: block; /* S'assurer que les labels prennent toute la largeur */
}

span {
    color: #2CC;
}
</style>