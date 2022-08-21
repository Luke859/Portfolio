<template>
    <section class="s8">
        <div class="main-container">
            <div class="text">
                <h1>Missions réalisés chez SIIUM 30/08/2022</h1>
                <br>
                <h2>Introduction</h2>
                <br>
                <p>Lors de mon stage, j'ai pu travailler sur différents projets. Pour ma première tâche j'ai principalement travailler avec C# et microsoft Dynamics.</p> 
                <p>Je suis ensuite parti sur un projet dont l'entreprise travaillait deçu depuis plusieurs années, où ils utilisaient principalement PHP et Symfony (Back-End).</p>
                <p>Je vous explique plus en détail mes différentes tâches que j'ai accomplie pendant mon stage.</p>
                <p>Dès mon premier jour arrivé en entreprise j'ai reçu ma première tâche.</p>
                <br>
                <h2>Projet n°1 : Projet API </h2>
                <br>
                <p>Pour des raisons privés je n'ai pas eu le droit de vous montrez des images de ce projet.</p>
                <br>
                <p>Le but de ce projet était de récupèrer les informations d'une API contenant des informations sur les entreprises en relation avec SIIUM, pour les exporter dans un fichier et après l'importer sur SAGE. SAGE qui est un logiciel de comptabilité et de gestion d'entreprise.</p>
                <br>
                <p>- Ma première tâche était d'appeler l'API qui est une API de microsoft Dynamics et d'essayer de l'afficher dans la console de visual studio.</p>
                <p>Il fallait que je gère la requête pour appeler l'API mais aussi gérer la pagination car l'API comportait plusieurs pages.</p>
                <p>Je devais alors afficher ces 3 pages sur une seule page dans la console de visual studio.</p>
                <p>Pour finaliser cette première tâche, la dernière chose à faire était de trier les informations voulut pour chaque entreprise.</p>
                <br>
                <p>- Ma deuxième tâche était de générer un fichier dans lequel on retrouve les informations de l'API ci-dessus.</p>
                <p>- Ma troisième tâche, étant de récuperer le fichier généré et de l'importer sur le logiciel SAGE.</p>
                <br>
                <h2>Projet n°2 : Le projet Shweet</h2>
                <br>
                <p>Le projet s'appelle "Shweet". C'est une application qui vous permet de déployer une sonde et grâce à cette sonde on peut capturer l'ensemble de votre système d'information, les types et les monitores en temps réel (PC, box, boite réseau, ect...). Avec cela on peut retrouver leur interface 3D pour bien visualiser l'ensemble de l'infrastructure informatique de la personne.</p>
                <p>Si vous voulez en savoir plus sur le projet voici le lien : <a href="https://shwett.com/"> lien vers shweet</a></p>
                <br>
                <p>Tâche n°1 - Mettre en place une alerte qui permet de mettre en vue ou non vue.</p>
                <br>
                <img id="photoTache1" src="../../assets/Tache1.png" />
                <br>
                <p> Cette tâche permet donc à l'utilisateur si il a vue ou non l'alerte qui lui à été envoyée.</p>
                <p>Il fallait gérer l'action de non vue à vue et que cette action soit pris en compte dans la base de données pour être stocké.</p>
                <br>
                <p>Voici le résultat final de la tâche n°1 :</p>
                <img id="photo2Tache1" src="../../assets/Tache1Fin.png" />
                <br>
                <br>
                <p>Tâche n°2 - Reception d'un email de changement de mot de passe quand le mot de passe de l'utilisateur est modifier.  </p>
                <br>
                <img id="photoTache1" src="../../assets/Tache2.png" />
                <br>
                <p> Cette tâche permet une meilleur sécurité et alerte l'utilisateur au cas où ce n'est pas lui.</p>
                <br>
                <p>Voici le résultat final de la tâche n°2 :</p>
                <img id="photo2Tache1" src="../../assets/Tache2Fin.png" />
                <br>
                <p>Tâche n°3 - Ajouter, modifier et supprimer les informations d'une version  </p>
                <br>
                <img id="photoTache1" src="../../assets/Tache3.png" />
                <br>
                <p>Pour cette tâche, nous avons dû mettre en place 3 formulaires, un formualaire qui nous permet d'ajouter des données sur la page mais aussi dans la base de données. </p>
                <p>Un formulaire pour modifier les données et un pour supprimer les données.</p>
                <p>Pour compléter cette tâche nous avons ajouter des messages de reussite et d'erreur pour l'ajout, la modification et la suppression.</p>
                <br>
                <p>Voici le résultat final de la tâche n°3 :</p>
                <img id="photo2Tache1" src="../../assets/TacheFin.png" />
                <br>
                <br>
                <h2>Conclusion</h2>
                <br>
                <p>Si vous voulez savoir plus sur mon ressenti, l'expérience que j'ai pu acquérir et les points d'améliorations. Vous pouvez allez consulter mon bilan sur ce stage chez SIIUM <router-link to="Bilan_stage">ici</router-link>. </p>
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
.text h1{
    padding : 30px 0px 30px 0px;
    text-align: center;
    font-weight: bold;
    border-bottom: 2px solid black;
    border-bottom-width: 3px;
}

.text h2{
    padding : 30px 0px 30px 0px;
    text-align: left;
    font-weight: bold;
    border-bottom: 2px solid black;
    border-bottom-width: 3px;
    width: 500px;
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