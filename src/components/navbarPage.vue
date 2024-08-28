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
          <li v-if="isAuthentify === false"><router-link class="menu" to="/PageConnexion">Se connecter</router-link>
          </li>
          <li v-if="isAuthentify === true"><router-link class="menu" to="/lecon">Mes cours</router-link>
          </li>
          <li v-if="isAuthentify === true"><router-link class="menu" to="/MesClasses">Mes formations</router-link></li>
            <li v-if="isAuthentify === true" @click="logout"><router-link class="menu" to="/"><i style="color: red;" class="fa fa-power-off"></i></router-link>
          </li>
        </ul>
      </nav>
      
    </section>
    </div>
     
</template>
<script>

export default {
  data() {
    return {
      isAuthentify: false,
      seConnecter: true,
    }
  },
  created() {
    const isAuthentify = localStorage.getItem('isAuthentify');

    this.isAuthentify = isAuthentify === 'true';
  },
  methods: {

    ifAuthentify() {
      this.seConnecter = false;
    },
    logout() {
      localStorage.removeItem('userId')
      localStorage.removeItem('isAuthentify')
      this.$router.push('/');
      window.location.reload(); 
    },
  
    },
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
  margin-top: -50px!important;
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
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
.container {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  width: 85%;
  margin: auto;
}

section {
  width: 100%;
  margin-top: 50px;
}

</style>