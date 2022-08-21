<template>
    <section class="s9">
        <div class="main-container">
            <div class="text">
                <h1>Activités en entreprise 09/06/2022</h1>
                <br>
                <h2>Introduction</h2>
                <br>
                <p>Pendant mon stage de 6 semaines, j'ai découvert des activités en entreprise qui nous a permis de prendre du recul sur le travail.</p>
                <p>Un moment où l'on pouvait se détendre et discuter.</p>
                <h2>Les activités</h2>
                <br>
                <h3>Affinage de stories</h3>
                <br>
                <p>L'affinage des stories était un moment où l'on pouvait discuter des prochaines tâches qui étaient à venir.</p>
                <p>Avec ces tâches à venir, il fallait leurs donner une note de difficulté.</p>
                <p>Pour cela, nous avons joué à un jeu pour que chaque personne donne une note allant de 0 à 100.</p>
                <p>Ce jeu, ce nomme "Planning poker"</p>
                <div class="imagePlanning">
                    <img id="planning" src="../../assets/jeuPoker.jpg" />
                    <img id="planning" src="../../assets/planning.jpg" />
                </div>
                <br> 
                <h3>Atelier bonne pratique</h3>
                <br>
                <p>L'Atelier bonne pratique est très important en entreprise c'est un moment pour discuter des comportements à avoir quand on code en informatique.</p>
                <p>Ce sont des comportements dit indispensables, par exemple :</p>
                <p>- Vérrouiller son poste dès qu'on n'est pas devant</p>
                <p>- Verifier que notre poste est sécurisé</p>
                <p>- Bien sauvegarder ses modifications sur Visual studio code</p>
                <p>- Ne pas communiquer ses mots de passe</p>
                <br> 
                <h3>Rétrospective</h3>
                <br>
                <p>Une rétrospective est nécessaire en entreprise car c'est le moment où l'on reflète sur les derniers mois qui sont passés et permet de débriefer ensemble du déroulement d’un sprint.</p>
                <p>C'est ici que l'on récapitule, que l'on partage ses ressentis et que l'on prend des actions en conséquence.</p>
                <p>Elle permet de créer une cohésion et une confiance de groupe importante : peu importe le problème, on sait qu’on peut le résoudre ensemble, à partir du moment où on le partage.</p>
                <p>Une rétrospective se découpe généralement en 3 phases :</p>
                <p>1- Recueil d'informations</p>
                <p>2- Choix des sujets à traiter</p>
                <p>3- Prise d'actions</p>
                <br>
                <h2>Conclusion</h2>
                <br>
                <p>Pour conclure ces activités vont influencer la cohésion de groupe et aide avec la productivité.</p>
                <p>Les équipes vont pouvoir prendre des décisions ensemble pour faire avancer le projet et pour devenir chacun plus autonome.</p>

            </div>
            <div id="mapid" ></div>
        </div>

    </section>
</template>

<style scoped>
.s9{
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

#photoBureau{
    display: flex;
    margin: 0 auto;
    width: 900px;
}

#photoMySql{
    display: flex;
    margin: 0 auto;
    width: 200px;
}

.imagePlanning{
    display: flex;
    justify-content: space-between;
}

.imagePlanning #planning{
    width: 450px;
    height: 600px;
    border-radius: 20px;
}
</style>