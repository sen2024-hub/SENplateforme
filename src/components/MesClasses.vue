<template>
    <div>
        <h2>Mes formations</h2>
        <ul v-if="classes.length > 0">
            <li v-for="classe in classes" :key="classe.id_classe">
                {{ classe.nom_classe }}
            </li>
        </ul>
        <p v-else>Aucune classe inscrite.</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            classes: [] // Variable pour stocker les classes
        };
    },
    mounted() {
        this.loadUserClasses(); // Appelle la méthode pour charger les classes
    },
    methods: {
        loadUserClasses() {
            const userId = localStorage.getItem('userId'); // Récupère l'ID utilisateur
            console.log('ID Utilisateur récupéré:', userId);
            
            if (userId) {
                this.fetchUserClasses(userId); // Appelle la méthode pour récupérer les classes
            } else {
                console.error('Aucun ID utilisateur trouvé dans le localStorage.');
            }
        },
        async fetchUserClasses(userId) {
            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}`);
                this.classes = response.data; // Stocke les classes récupérées
                console.log('Classes récupérées:', this.classes); // Log des classes récupérées
            } catch (error) {
                console.error('Erreur lors de la récupération des classes:', error);
                if (error.response) {
                    console.error('Détails de l\'erreur:', error.response.data);
                }
            }
        }
    }
};
</script>

<style scoped>
/* Style général */
h2 {
    text-align: center;
    font-family: 'Arial', sans-serif;
    color: #333; /* Couleur du texte */
    margin-bottom: 20px;
    font-size: 24px;
}

/* Boîte pour les classes */
ul {
    list-style-type: none;
    padding: 0;
    margin: 40px auto;
    max-width: 600px; /* Largeur de la boîte */
    border: 1px solid #ddd; /* Bordure */
    border-radius: 15px; /* Coins arrondis */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Ombre */
    background-color: transparent; /* Pas de fond */
    font-size: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Élément de liste */
li {
    padding: 20px; /* Espacement interne */
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* Bordure des éléments */
    color: #333; /* Couleur du texte */
    transition: background-color 0.3s; /* Transition douce */
}

/* Dernier élément de la liste */
li:last-child {
    border-bottom: none; /* Pas de bordure pour le dernier */
}

/* Survol de l'élément de liste */
li:hover {
    background-color: rgba(0, 0, 0, 0.05); /* Effet de survol */
}

/* Message quand aucune classe est inscrite */
p {
    text-align: center;
    font-style: italic;
    color: #888; /* Couleur du message */
    margin-top: 20px;
}
</style>