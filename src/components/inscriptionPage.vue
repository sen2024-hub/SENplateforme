<template>

  <div class="body">
    <div class="form">
      <h1>Inscription à une formation</h1>
      <form class="form-group" @submit.prevent="formation">
        <label for="cours">formations</label>
        <select id="cours" name="cours" v-model="id_classe" required>
          <option v-for="classes in formations" :key="classes.id" :value="classes.id">{{ classes.libelle }}</option>
        </select>
        <button type="submit">Souscrire</button>
      </form>
      <h1 class="messageErreur" v-if="message">L'utilisateur est déjà inscrit pour cette classe <br>
        <button @click="offPup">ok</button>
      </h1>
      <router-link to="/" class="btn">annuler</router-link>

    </div>
  </div>
</template>
<style scoped>
.body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  width: 100%;
  

}

.messageErreur {
  position: absolute;
  left: 35%;
  width: 30%;
  padding: 20px;
  font-size: 25px;
  top: 37%;
  background-color: black;
  color: #2cc;
}

.form {
  max-width: 400px;
  margin: 0 auto;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.form-group {
  text-align: center;
  margin-bottom: 30px;
}

select {
  width: 100%;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #2cc;
  color: white;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

button:hover {
  background-color: #1ba8a8;
}

.btn {

  font-size: 20px;
  font-weight: bold;
  padding: 17px;
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      formations: [],
      id_utilisateur: '',
      id_classe: '',
      message: false
    }
  },
  mounted() {
    this.getTypefs();
  },
  methods: {
    async getTypefs() {
      try {
        const response = await axios.get('http://localhost:3000/classe'); // Appeler l'API GET
        this.formations = response.data;
        console.log(this.formations);
      } catch (error) {
        console.error('Erreur lors de la récupération des classe :', error);
      }
    },
    offPup() {
      this.message = false;
    },
    async formation() {
      try {
        const response = await axios.post('http://localhost:3000/formation', {
          id_classe: this.id_classe,
          id_utilisateur: localStorage.getItem('userId'),
        });
        this.$router.push('/');

        console.log(response.data.message);
      } catch (error) {
        this.message = true;
        console.log('echec');
      }
    },
  }
}
</script>