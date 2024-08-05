<template>
    <div>
<div class="navi">
<nav>
    <router-link style="text-decoration: none; color: black;list-style: none;font-weight: bold;"><span style="font-family: 'Times New Roman', Times, serif;font-size: 25px;color: #2CC1D5;font-weight: bold;">Charis</span>Action</router-link> 
<ul>

             

<li><router-link style="text-decoration: none; color: black;list-style: none;font-weight: bold;">Acceuil</router-link>
</li>
<li><router-link 
        style="text-decoration: none; color: black;list-style: none;font-weight: bold;">Services</router-link></li>
<li><router-link 
        style="text-decoration: none; color:black;list-style: none;font-weight: bold;">A propos</router-link></li>
<li><router-link 
        style="text-decoration: none; color: black;list-style: none;font-weight: bold;">Contact</router-link></li>

</ul>
        </nav>
    </div>
    <div class="image1">
        <img alt="" src="../assets/contactus-banner-bg.jpg">
        <div class="overlay">
                    <h2 style="color: white; font-family: 'Times New Roman', Times, serif;font-size: 35px;font-weight: bold;">Faites De L'Informatique:<br>
                        Votre Alié,<span style="color: #2CC1D5;">Au Quotidien</span>
                    </h2>
                    <h3 style="font-family: 'Montserrat', sans-serif;">Decouvrez L'Expertise D'un Leader En Informatique.<br>
                        Formations Completes D'infographie , Programmation  ,<br> Design , Maintenance et bien d'autre. 
                    </h3>
                    <div class="bouton1">
                      
        <router-link style="text-decoration: none; color: white;list-style: none;  transform: translateY(30%);">Inscrivez-Vous Dès Aujourd'hui !</router-link>
                    </div>
                </div>
    </div>
    <div>
      
    </div>
               
    <p id="formation"><span style="color: #2CC1D5;font-weight: bold;font-size: 35px;">Notre Engagement:</span><br>
       Une Formation De Qualite et de Confiance
       
    </p>
   <div class="partie2">
    <div class="image2">
      <img alt="" src="../assets/belle.png">
    </div>
    <div class="message">

    </div>
   </div>
    <section class="partie3">
        <div class="formons">
            <h2 style="font-size: 30px;font-family: 'Times New Roman', Times, serif;">NOS <span style="color: #2CC1D5;">FORMATIONS</span></h2>
            <h3>Engagez-vous vers un avenir prospere</h3>
        </div>
        <div class="about">
        <ul>

            <li >
                
                <div class="mots">
                    <img alt="" src="../assets/gestion de projet.jpg">
                </div>
              
                    <span>GESTION DES PROJETS INFORMATIQUE</span>
                
            </li>
            <li>

                <div class="mots" >
                    <img alt="" src="../assets/developpement-site-web.jpg">
                </div>
                <span>CONCEPTION ET DEVELOPPEMNT D'APPLICATION WEB</span>
                
            </li >

            <li>
                <div class="mots">
                    <img alt="" src="../assets/infographie.png">
                </div>
                <span>INFOGRAPHIE ET CREATION MULTIMEDIA</span>
                
            </li>
            <li >         
                <div class="mots">
                    <img alt="" src="../assets/conception graphique.jpg">
                </div>
                <span>CONCEPTION GRAPHIQUE </span>
                
            </li>
            <li >         
                <div class="mots">
                    <img alt="" src="../assets/app mobile.jpg">
                </div>
                <span>CONCEPTION ET DEVELOPPEMENT D'APPLICATION MOBILE</span>
                
            </li>
            <li >         
                <div class="mots">
                    <img alt="" src="../assets/reseaux.jpg">
                </div>
                <span>RESEAUX ET ADMINISTRATION RESEAU</span>
                
            </li>
        </ul>
        </div>
    </section>
    <section>
        <div class="contact-form">
        <h2 class="form-title">Laissez-nous un message</h2>
  <form>
 
    <div class="form-group">
      <label for="name">Nom</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="firstname">Prénom</label>
      <input type="text" id="firstname" name="firstname" required>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="subject">Objet</label>
      <input type="text" id="subject" name="subject" required>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit" class="submit-btn">Envoyer</button>
  </form>
</div>
    </section>
</div>
</template>
<style>
body{
    width: 100%;
    position: relative;
    
}
    nav {
    display: flex;
    width: 80%;
    /* justify-content: space-between; */
    align-items: center;
   
}
li {
    text-decoration: none;
    list-style: none;
    /* margin-right: 5px;
     */
}

ul {
    width: 50%;
    display: flex;
    justify-content: space-between;


}
.navi{
      padding-left: 150px; 
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    background-color: whitesmoke;
 

}
.image1{
    width: 100%;
    display: flex;
    justify-content: center;
    
    
}
.image1 img{
    display: flex;
    align-items: center;
    margin: 5px;
    width: 80em;
    height: 50em;
    

}
.overlay {
    position: absolute;
    top: 15%;
    left: 500px;
    transform: translate(-50%, -50%);
    color: white;
    /* padding: 20px; */
    text-align: left;
  }
  .bouton1{
     margin-top: 30%; 
    border-radius:50px;
    background-color:#2CC1D5;
   width: 350px;
   height: 70px;
   text-align: center;
   display: flex;
   justify-content: center;
   margin-left: 20px;
   
  }

  .bouton2{
    /* margin-top: 30%; */
    border-radius:50px;
    background-color:#2CC1D5;
   width: 450px;
   height: 70px;
   text-align: center;
   display: flex;
   justify-content: center;
   margin-left: 90px;
    
}

/* .texte{
    border: solid;
    background-color: black;
    padding: 0;
    margin: 0;
    display: flex;
    
} */

 
 
.about {
    margin: 25px auto;
    padding: 0 8%;
     /* background-color: rgba(0, 0, 0, 0.5); */
     margin-top: 10px;

}
  
.about ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.about li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3%;
    transition: 0.5s;
    height: 300px;
    width: 28%;
    margin-left: 0.0px;
    margin-bottom: 0.0px;
}

.about li div {
    width: 100%;
    height: 60%;
}

.about li div img {
    height: 100%;
    width: 100%;
} 

span{
    margin-top: 5px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;

}
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #353333;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 0px;
}

.form-title {
  text-align: center;
  color: white;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #f8f8f8;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.8);
}

textarea {
  resize: vertical;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 12px 20px;
  background-color: #2CC1D5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:hover {
  background-color: #2CC1D5;
}
.mots{
      
    background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 40px;
      display: flex;
      align-items: center;
    
}
.message{
  border: solid;
  background-color: black;
  width: 570px;
  height: 605px;

  transform: translateY(-12.9%);
  
}
.image2 img{
  width: 570px;
  height: 700px;
  margin-left: 20px;
}
.partie2{
  position:center;
  display: flex;
  margin-left: 60px;
  width: 100%;
}

</style>