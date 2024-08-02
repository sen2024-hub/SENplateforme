<template>
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
         <p id="formation"><span style="color: #2CC1D5;font-weight: bold;font-size: 35px;">Notre Engagement:</span><br>
       Une Formation De Qualite et de Confiance
    </p>
    </div>
    <div class="partie2">
        
        <div class="image2">
            <img alt="" src="../assets/belle.png">
        </div>
        <div class="texte" >
            <p></p>
            <p style="color: white;font-size: 17px;font-family:'Montserrat', sans-serif ;text-indent: 10px;margin: 60px;">  Sur notre plateforme,nous ne nous contentons pas de vous instruire;nous créons
                des examins qui viserons à evaluer votre niveau et vos avancement au cours de votre apprentissage.</p>
                <p style="color: white;font-size: 17px;font-family:'Montserrat', sans-serif ;text-indent: 10px;margin: 60px;">Nous vous accompagnons dans l'obtention de vos different diplome,de votre parcours scolaire et même sociale.</p>
        </div>
    </div>
</template>
<style>
body{
    width: 100%;
}
    nav {
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
    align-items: center;
   
}
li {
    text-decoration: none;
    list-style: none;
    margin-right: 35px;
    
}

ul {
    width: 50%;
    display: flex;
    justify-content: space-between;


}
.navi{
      padding-left: 1%; 
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
 

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
    width: 500em;
    height: 60em;
    

}
.overlay {
    position: absolute;
    top: 35%;
    left: 300px;
    transform: translate(-50%, -50%);
    color: white;
    padding: 20px;
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
  .image2 img{
    width: 570px;
    height: 700px;
    padding: 0;
    margin: 0;
    /* margin-left: 230px;
   padding-right: 300px; */
  }
  .partie2{
    padding: 0;
   
  }
  .texte{
    border: solid;
    background-color: black;
    width: 570px;
    height: 695px;
    /* padding: 0;
    margin: 0; */
    margin-left: 400px;
  }
  #formation{
   
    margin-top: 25px;
    justify-content: center;
   
  }

</style>