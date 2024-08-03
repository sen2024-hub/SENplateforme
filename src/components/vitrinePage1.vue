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
    <div class="partie2">
        
        <div class="image2">
            <img alt="" src="../assets/belle.png">
        </div>
        <div class="message">
           
            <p id="formation"><span style="color: #2CC1D5;font-weight: bold;font-size: 35px;">Notre Engagement:</span><br>
       Une Formation De Qualite et de Confiance
       
    </p>
        </div>
        <div class="bouton2" style="margin-top: 570px; margin-left: -25%;">
                <router-link style="text-decoration: none; color: white;list-style: none;  transform: translateY(30%);">Inscrivez-Vous Dès Aujourd'hui !</router-link>
                </div>  
        <div class="texte" >
            <div class="nous">
                <p>QUI NOUS SOMMES?💡</p>
            </div>
            <p style="color: white;font-size: 20px;font-family: 'Times New Roman', Times, serif;text-indent: 10px;margin: 60px;">  Sur notre plateforme,nous ne nous contentons pas de vous instruire;nous créons
                des examins qui viserons à evaluer votre niveau et votre avancement au cours de votre apprentissage.</p>
                <p style="color: white;font-size: 20px;font-family: 'Times New Roman', Times, serif;text-indent: 10px;margin: 60px;">Nous vous accompagnons dans l'obtention de vos different diplome,de votre parcours scolaire et même sociale.<br><br>
                    Nous sommes une structure qui c’est donnée pour mission de former les leaders de demain dans les domaines clés de l'informatique et de la technologie. Que vous souhaitiez vous épanouir en tant que développeur de logiciels, administrateur système, analyste de données ou encore concepteur d'applications web, notre équipe d'experts vous accompagnera tout au long de votre parcours.
                </p> 
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
                
                <div>
                    <img alt="" src="../assets/gestion de projet.jpg">
                </div>
              
                    <span>GESTION DES PROJETS INFORMATIQUE</span>
                
            </li>
            <li>

                <div >
                    <img alt="" src="../assets/developpement-site-web.jpg">
                </div>
                <span>CONCEPTION ET DEVELOPPEMNT D'APPLICATION WEB</span>
                
            </li >

            <li>
                <div>
                    <img alt="" src="../assets/infographie.png">
                </div>
                <span>INFOGRAPHIE ET CREATION MULTIMEDIA</span>
                
            </li>
            <li >         
                <div>
                    <img alt="" src="../assets/conception graphique.jpg">
                </div>
                <span>CONCEPTION GRAPHIQUE </span>
                
            </li>
            <li >         
                <div>
                    <img alt="" src="../assets/app mobile.jpg">
                </div>
                <span>CONCEPTION ET DEVELOPPEMENT D'APPLICATION MOBILE</span>
                
            </li>
            <li >         
                <div>
                    <img alt="" src="../assets/reseaux.jpg">
                </div>
                <span>RESEAUX ET ADMINISTRATION RESEAU</span>
                
            </li>
        </ul>
        </div>
    </section>
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
    top: 25%;
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
  .image2 img{
    width: 570px;
    height: 700px;
    padding: 0;
    margin: 0;
    /* margin-left: 230px;
   padding-right: 300px; */
  }
  .partie2{
    height: 700px;
    padding: 0;
    margin-top:40px;
    border: 1px solid #938f8f;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #353333;
  background-size: cover;
  }
  .texte{
   
    background-color: #353333;
    width: 750px;
    height: 600px;
    padding-left: 120px;
    text-align: justify;
   padding-top: 40px;
  }
  #formation{
   
    margin-top: 25px;
    justify-content: center;
    color: white;
   
  }
  .message{
   
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    padding-right: 150px;
    position: relative;
    top: 90px;
  }
  .nous{
    color: gold;
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    padding-left: 70px;
  }
 
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


</style>