<template>

  <div class="container">
    <p>Chargement...</p>
  </div>
</template>

<script>
export default {
  mounted() {
    // Définir un délai de 9 secondes avant de masquer l'écran de chargement
    setTimeout(() => {
      this.$router.push('/vitrinePage1');
    }, 3000); // 9000 millisecondes = 9 secondes
  },
};
</script>

<style scoped>
.container{
  background-color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 100%;
}
.container p{
  color: #2CC;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin: auto;
  margin-top: 200px;
}
</style>