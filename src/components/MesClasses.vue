<template>
    <div>
        <h2>Mes Classes</h2>
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
ul li{
    text-decoration: none;
    font-size: 24px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  
}
</style>