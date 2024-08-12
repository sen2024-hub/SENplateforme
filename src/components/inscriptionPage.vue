<template>
  
<div class="body">
<div class="form">
    <h1>Inscription à une formation</h1>
    
    <div class="form-group">
      <label for="nom">Nom</label>
      <input type="text" id="nom" name="nom" required>
    </div>
    
    <div class="form-group">
      <label for="prenom">Prénom</label>
      <input type="text" id="prenom" name="prenom" required>
    </div>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
            <label for="cours">formations</label>
            <select id="cours" name="cours" required>
                <option value="">Sélectionnez une formation</option>
                <option value="cours1">gestion des projets infformatiques</option>
                <option value="cours2">conception et developpement d'applications web</option>
                <option value="cours3">infographie et creation multimedia</option>
                <option value="cours4">conception graphique</option>
                <option value="cours5">conception et developpement d'application web</option>
                <option value="cours6">reseau et administration reseau</option>
            </select>
        </div>
    
    <button type="submit">S'inscrire</button>
    <router-link to="/" class="btn">annuler</router-link>

 </div>
</div>
</template>
<style>
.body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #2cc;
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
  
  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  input, select {
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