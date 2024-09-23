<template>
    <div class="registration-form" @submit.prevent="login" id="signup-form">
        <h2 class="form-title">Connexion</h2>
        <form>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text"  name="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Mot de passe :</label>
                <input type="password"  name="password" v-model="password" required>
            </div>
            <p>pas de compte?</p>
            <a href="/COMPTE">creer un compte</a>
            <button type="submit" class="submit-btn">Se connecter</button>            
        </form>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            FormData :{
            isAuthentify: false,
            email: '',
            password: '',
            userId: '',
            userName: '',
            error: '',
        },
    };
    },
    methods: {
        async login() {
    try {
        const response = await axios.post('http://localhost:3000/login', {
            email: this.email,
            password: this.password
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const { token, userId, userName } = response.data;
        this.isAuthentify = true;
        localStorage.setItem('isAuthentify', true);
        localStorage.setItem('userId', userId);
        localStorage.setItem('userName', userName);
        this.token = token;
        this.userId = userId;
        this.userName = userName;

        console.log({'userText': userId});
        console.log({'userText': userName});
        // window.location.reload();
        //this.$router.push('/');
    } catch (error) {
        this.error = error.response ? error.response.data.message : 'Une erreur est survenue';
    }
}
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.box {
    font-size: 15px;
    background: white;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    width: 100%;
    outline: none;
}

.affiche {
    width: 100px;
    height: 100px;
    border-radius: 50%;
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

input,
select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    background-color: #f7f7f7;
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
    background-color: #2bc9e5;
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
a{
    text-decoration: none;
    color: darkslateblue;
}

</style>