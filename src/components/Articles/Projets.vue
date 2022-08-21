<template>
    <section class="s8">
        <div class="main-container">
            <div class="text">
                <h2>Projets réalisés 30/08/2022</h2>
                <br>
                <p>Lors de mon stage, j'ai pu travailler sur différents projets. Pour ma première tâche j'ai principalement travailler avec C# et microsoft Dynamcis. Je suis ensuite partit sur un projet que l'entreprise travaillait deçu depuis quelque années où ils utilisaient principalement PHP et Symfony (Back-End).</p>
                <br>
                <p> Je vous explique plus en détail mes différentes tâches que j'ai accomplie sur differents projets</p>
                <br>
                <p>Dès mon premier jour arriver en entreprise j'ai reçu ma première tâche.</p>
                <p>Projet n°1 : Récupèrer les informations d'une API pour les exporter dans un fichier et après l'importer sur SAGE. SAGE qui est un logiciel de comptabilité et de gestion d'entreprise.</p>
                <br>
                <p>Ma première tâche était d'appeler l'API qui est une API de microsoft Dynamics.</p>
                <br>
                <p>Deuxième tâche était de générer un fichier dans lequel on retrouve les informations de l'API voulut.</p>
                <p>Troisième tâche, prendre le fichier et le générer dans le logiciel SAGE.</p>
                <br>
                <p>Projet n°2 : Le projet s'appellle "Shweet". C'est une application qui vous permet de déployer une sonde et grâce à cette sonde on peut capturer l'ensemble de votre système d'information, les types et les monitores en temps réel (PC, box, boite réseau, ect...). Avec cela on peut retrouver leur interface 3D pour bien visualiser l'ensemble de l'infrastructure informatique de la personne.</p>
                <p>Si vous voulez en savoir plus sur le projet voici le lien -> https://shwett.com/</p>
                <br>
                <p>Tâche n°1 -> Mettre en place une alerte qui permet de mettre en vue ou non vue.</p>
                <br>
                <!-- <img id="photoTache1" src="../../assets/Tache1.jpg" /> -->
                <p> Cette tâche permet donc à l'utilisateur si il a vue ou non l'alerte qui lui à été envoyer.</p>
                <br>
                <p>Voici le résultat final de la tâche</p>
                <img id="photo2Tache1" src="../../assets/Tache1Fin.png" />
                <br>
                <br>
                <p>Tâche n°2 -> Reception d'un email de changement de mot de passe quand le mot de passe de l'utilisateur est modifier.  </p>
                <br>
                <!-- <img id="photoTache1" src="../../assets/Tache2.jpg" /> -->
                <br>
                <p> Cette tâche permet une meilleur sécurité et alerte l'utilisateur en au cas où ce n'est pas lui.</p>
                <br>
                <p>Voici le résultat final de la tâche</p>
                <img id="photo2Tache1" src="../../assets/Tache2Fin.png" />
                <br>
                <p>Tâche n°3 ->Ajouter, modifier et supprimer les informations d'une version  </p>
                <br>
                <!-- <img id="photoTache1" src="../../assets/Tache3.jpg" /> -->
                <br>
                <p></p>
                <br>
                <p>Voici le résultat final de la tâche</p>
                <img id="photo2Tache1" src="../../assets/Tache3Fin.png" />
                <br>
            </div>
            <div id="mapid" ></div>
        </div>

    </section>
</template>

<style scoped>
.s8{
    overflow: auto;
    background-color: #42a5f5;
}

.main-container {
    width: 1200px;
    margin: 0 auto;
}

.text{
    width: auto;
    height: auto;
    font-size: 18px;
    text-align: left;
    background-color: white;
    padding: 70px;
    border-radius: 20px;
    margin-top: 50px;
    border: 3px solid black;

}

.text h2{
    padding : 30px 0px 30px 0px;
    text-align: center;
    font-weight: bold;
    border-bottom: 2px solid black;
    border-bottom-width: 3px;
}

.text p {
    color: black;
}

#mapid{
    height: 450px;
}

#photoTache1{
    display: flex;
    margin: 0 auto;
    width: 400px;
}

#photo2Tache1{
    display: flex;
    margin: 0 auto;
    width: 1000px;
}

#photoMySql{
    display: flex;
    margin: 0 auto;
    width: 200px;
}
</style>