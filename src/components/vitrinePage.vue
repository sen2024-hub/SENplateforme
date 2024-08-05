<template>
    <div class="body">
    <div class="barre">
        <p>Une promesse d'avenir Quelque Soit Le Chemin Dans La Formation  </p>

    </div>
    <div class="navi">
        <nav>
            <ul>

<li><router-link style="text-decoration: none; color: #465375;list-style: none;">Acceuil</router-link>
</li>
<li><router-link 
        style="text-decoration: none; color: #465375;list-style: none;">Services</router-link></li>
<li><router-link 
        style="text-decoration: none; color: #465375;list-style: none;">A propos</router-link></li>
<li><router-link 
        style="text-decoration: none; color: #465375;list-style: none;">Contact</router-link></li>

</ul>
        </nav>
    </div>
    <div class="partie2">
    <div class="message"  style="position: relative; top: 20px;">
        <p id="message1"  style="text-align: justify;display: flex; font-size: 30px;">
            <strong>Faites De L'Informatique :<br>
            Votre  Alié ,<span style="color:  yellowgreen;">Au Quotidien </span></strong>
             
        </p>
        <p id="message2" style="text-align: justify;display: flex;">Decouvrez L'Expertise D'un Leader En Informatique.<br>
            Formations Completes D'infographie , Programmation  , Design , Maintenance et bien d'autre. 
        </p>
        <div class="inscrire">
        <router-link style="text-decoration: none; color: white;list-style: none; ">Inscrivez-Vous Dès Aujourd'hui !</router-link>
    </div>
    </div>
    <div class="image">
        <img alt="" src="../assets/contactus-banner-bg.jpg">
    </div>
</div>
<div class="partie3">
<div class="image2">
    <img alt="" src="../assets/belle.png">
</div>
<div class="mess">
    <div class="mess1">
    <p style="font-size: 25px;font-family: 'Times New Roman', Times, serif;margin: 30px;"><span style="color: yellowgreen;">Notre Engagement :</span>Une Formation De Qualite et de Confiance</p>
</div>
<div class="mess2">
    <p style="margin: 20px;">         Sur notre plateforme,nous ne nous contentons pas de vous instruire;nous créons
        des examins qui viserons à evaluer votre niveau et vos avancement au cours de votre apprentissage.
        <br>
        <br>
    </p>
        <p style="text-indent: 10px;margin: 30px;">Nous vous accompagnons dans l'obtention de vos different diplome,de votre parcours scolaire et même sociale. </p>
   
</div>

<div class="former" style="transform: scale(1.5);">
    <router-link style="text-decoration: none;list-style: none;background-color: white;padding: 10px;border-radius: 30px; color: #041e65;">Inscrivez-Vous Dès Aujourd'hui !</router-link>
</div>
</div>
</div>
<div class="partie4">
    <div class="formations">
        <p>Nos <span style="color: yellowgreen;">Formations</span></p>
    </div>
    <div class="about">
        <ul>
            <li>
                <div>
                    <p>Conception et developpement d'applications web et mobiles</p>
                </div>
            </li>
            <li>
                <div>
                    <p>Reseaux et administration reseau</p>
                </div>
            </li>
            <li>
                <div>
                    <p>Conception graphique et experience utilisateur (UX/UI)</p>
                </div>
            </li>
            <li>
                <div>
                    <p>Apprentissage machine (Machine Learning)</p>
                </div>
            </li>
            <li>
                <div>
                    <p>Gestion de projet informatique</p>
                </div>
            </li>
            <li>
                <div>
                    <p>infographie et creation multimedia</p>
                </div>
            </li>
        </ul>
    </div>
</div>
</div>
</template>
<style scoped>
body{
width: 100%;
position: absolute;
background-color: whitesmoke;

}
.barre{
    width: 100%;
    border: solid;
    background-color: rgb(23, 101, 97);
    color: white;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;

}
nav {
    display: flex;
    
    width: 100%;
    justify-content: space-between;
    align-items: center;
   
}
li {
    text-decoration: none;
    list-style: none;
    
}

ul {
    width: 40%;
    display: flex;
    justify-content: space-between;


}
.navi{
    padding-left: 35%;
    background-color: white;
    margin: 5px;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
   

}
.image{
   
    padding-right: 230px;
    display: flex;
}

img{
    width: 45rem;
    height: 28rem;
    display: flex;
  
}
.partie2{
    
    display: flex;
    width: 100%;
    background-color: whitesmoke;
    margin: 0;
    padding: 100px;
    
   
}
.message{
    display: block;
    margin-right: 10px;
    padding-top: 90px;
    width: 480px;
  height: 200px;
  font-size: 20px;
 font-family: 'Times New Roman', Times, serif;
 margin-top: 90px;
 

}
.inscrire{
    border: solid;
    background-color: rgb(23, 101, 97);
    display: flex;
    font-size:25px;
    width: 345px;
    border-color: rgb(3, 112, 76);
    font-family: 'Times New Roman', Times, serif;
    padding-left: 20px;
   
   
    
}
.patie3{
    width: 100%;
    height: 500px;
    background-color: white;
}
    
/* 
.partie3 img{
    width: 650px;
    height: 700px;
    margin-left: 100px;
}
.mess{
    width: 650px;
    height: 380px;
    border: solid;
    margin-left: 650px;
    
    position: relative; 
    bottom: 550px;
    background-color: black;
    color: white;
    border-color: black;
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    text-align: justify;
    text-indent: 10px;
   
    

}
.former{
    margin: 80px;
     text-align: justify;
     position: relative;
     top: "40px";
     font-size: 10px;
     margin-right:300px;
     
     
}
.formations{
    font-size:60px;
    position: relative;
    bottom: 380px;
    font-family: 'Times New Roman', Times, serif;
}
 .about {
    margin: 25px auto;
    padding: 0 8%;
    background-color: aqua;
    position: relative;
    bottom: 350px;
    width: 700px;
    height: 700px;
}

.about ul {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
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
    width: 60%;
    height: 30%;
    border: solid;
}  */



</style>