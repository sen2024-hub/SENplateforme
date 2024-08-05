<template>
    <div class="registration-form">
        <h2 class="form-title">Inscription</h2>
        <form>
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required>
      </div>
      <div class="form-group">
        <label for="confirm_password">Confirmation du mot de passe :</label>
        <input type="password" id="confirm_password" name="confirm_password" required>
      </div>
      <p>Pas de compte?</p>
	<div class="inscription">
	<router-link to="/COMPTE" style="text-decoration: none; color: #465375">s'inscrire</router-link>
</div>
</form>
</div>
</template>
<style>
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

input,
select {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f7f7f7;
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
  background-color: #2bc9e5;
}
</style>