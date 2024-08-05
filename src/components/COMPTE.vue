<template>
 <div class="registration-form">
  <h2 class="form-title">Inscription</h2>
  <form>
     <div class="form-group">
        <div class="profile-picture-container">
    <img src="default-profile-picture.jpg" alt="Photo de profil" class="profile-picture">
  </div> 
  <!-- <div class="profile-picture-container">
  <img src="default-profile-picture.jpg" alt="Photo de profil" class="profile-picture" id="profile-picture">
  <label for="profile-image" class="custom-file-upload">Choisir une photo</label>
  <input type="file" id="profile-image" name="profile-image" accept="image/*" onchange="previewProfileImage()">
</div> -->
      <label for="name">Nom :</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="firstname">Prénom :</label>
      <input type="text" id="firstname" name="firstname" required>
    </div>
    <div class="form-group">
      <label for="birthdate">Date de naissance :</label>
      <input type="date" id="birthdate" name="birthdate" required>
    </div>
    <div class="form-group">
      <label for="birthplace">Lieu de naissance :</label>
      <input type="text" id="birthplace" name="birthplace" required>
    </div>
    <div class="form-group">
      <label for="education">Niveau scolaire :</label>
      <select id="education" name="education" required>
        <option value="">Sélectionnez votre niveau</option>
        <option value="primary">Primaire</option>
        <option value="secondary">Secondaire</option>
        <option value="undergraduate">Licence</option>
        <option value="graduate">Master</option>
        <option value="doctoral">Doctorat</option>
      </select>
    </div>
    <div class="form-group">
      <label for="location">Localisation :</label>
      <input type="text" id="location" name="location" required>
    </div>
    <!-- <div class="form-group">
      <label for="profile_picture">Photo de profil :</label>
      <input type="file" id="profile_picture" name="profile_picture" accept="image/*" required>
    </div> -->
    <div class="form-group">
      <label for="country">Pays de résidence :</label>
      <input type="text" id="country" name="country" required>
    </div>
    <div class="form-group">
      <label for="status">Statut :</label>
      <input type="text" id="status" name="status" required>
    </div>
    <div class="form-group">
      <label for="password">Mot de passe :</label>
      <input type="password" id="password" name="password" required>
    </div>
    <div class="form-group">
      <label for="confirm_password">Confirmation du mot de passe :</label>
      <input type="password" id="confirm_password" name="confirm_password" required>
    </div>
    <button type="submit" class="submit-btn">S'inscrire</button>
  </form>
</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-image: linear-gradient(to right, #4e54c8, #8f94fb);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.registration-form {
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  padding: 40px 50px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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

input, select {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f7f7f7;
}

input:focus, select:focus {
  outline: none;
  border-color: #8f94fb;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: 500;
  background-color: #4e54c8;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #3c42a6;
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
</style>