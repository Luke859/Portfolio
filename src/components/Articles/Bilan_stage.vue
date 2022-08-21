<template>
    <section class="s8">
        <div class="main-container">
            <div class="text">
                <h1>Bilan de stage chez SIIUM 18/08/2022</h1>
                <br>
                <br>
                <h2>Introduction</h2>
                <br>
                <p>Du 18 mai jusqu'au 31 Juin, j'ai réalisé un stage de 6 semaines chez SIIUM (si vous voulez en savoir plus sur l'entreprise cliquez <router-link to="/Entreprise">ici</router-link> ).</p>
                <p>Pendant ces 6 semaines j'ai pu découvrir la vie professionnelle dans une petite entreprise informatique et aussi j’ai eu l’opportunité d’utiliser des nouveaux langages que je n'avais pas encore abordé en cours.</p>
                <p>Lors de mon arrivée j’étais accueilli par mon maitre de stage, le directeur de l’entreprise qui m'a présenté ses équipes, les locaux et le poste où j’ai travaillé.</p>
                <p>Il m'a présenté ma première mission qui consistait de plusieurs taches. Tout d’abord j'ai commencé par revoir les bases des langages nécessaires pour accomplir les tâches.</p>
                <p>Si vous voulez en savoir plus sur les missions qui ont été assigné vous pouvez consulter mon article <router-link to="Articles/Projets">ici</router-link>.</p>
                <br>
                <p>Voici une photo de mon poste où je travaillais dans l'entreprise. Chaque équipe avait leur propre bureau et chacun son poste.</p>
                <br>
                <img id="photoBureau" src="../../assets/bureau.jpg" />
                <br>
                <h2>Mon ressenti</h2>
                <br>
                <p>Au début de mon stage, je me sentais un peu perdu car c’était ma première expérience professionnelle en informatique. Mon chef de projet était très présent et ainsi j’ai pu lui demander de l'aide et des conseils pour compléter au mieux les taches demandées.</p>
                <p>Mon stage s’est très bien passé, grâce au cadre de travail agréable et une jeune équipe énergétique et motivée. Je remercie toute l'équipe SIIUM de leur gentillesse.</p>
                <p>C'est aussi grâce à leurs réactivités, que lorsque j'avais une question ils étaient prêts à m’aider.</p>
                <p>A la fin de mon stage je sentais que j'avais appris de nouvelles compétences et une approche plus autonome au travail donné.</p>
                <p>J’étais content que j'ai réussi à aider l'équipe à avancer avec les tâches dans leur projet.</p>
                <br>
                <h2>Expérience acquise</h2>
                <br>
                <h3>- Expérience codage</h3>
                <br>
                <p>Grâce à ce stage j'ai pu acquérir de nouvelles compétences mais surtout d'affiner mes lacunes au niveau du codage avec un résultat de progression et de monter en compétence.</p>
                <p>Voici des exemples :</p>
                <p>La POO (Programmation Orientée Objet) où j'ai pu approfondir mes compétences sur ce point.</p> 
                <p>La découverte et apprentissage d’utiliser le Framework Symfony.</p>
                <p>L’utilisation de MySQL (côté Base de données) qui est un peu diffèrent de PHPMyAdmin mais qui reste similaire.</p>
                <p>La maitrise des data tables en C#.</p>
                <p>Comment faire la connexion d'une API de Microsoft Dynamics à un projet en C#.</p>
                <p>L’acquisition de la création de test unitaire.</p>
                <br>
                <h3>- Expérience de travail en équipe</h3>
                <br>
                <p>J'ai appris à travailler en équipe, c’est à dire se répartir les tâches, faire des points tous les jours.</p>
                <p>Si vous êtes intéressé par les activités que nous avons pratiqué en entreprise, vous pouvez aller voir mon article  <router-link to="Articles/Activites_entreprise">ici</router-link>.</p>
                <p>J'ai pu découvrir l'atelier bonne pratique, l'affinage de stories, les points de tests unitaires.</p>
                <p>J'ai découvert la notion « le planning de sprint », un sprint représente une durée de temps pour faire des tâches, un sprint dure un certain nombre de jours.</p>
                <br>
                <p>Voici une photo du tableau de sprint où on s’est répartit les tâches et où l'on a fait nos points :</p>
                <img id="photoTableau" src="../../assets/tableau.jpg" />
                <br>
                <h2>Points d'amélioration</h2>
                <br>
                <p>Après mon stage je me rende compte qu’il me reste beaucoup de compétences à acquérir. Il faut que j’améliore mon niveau code, être plus précis, plus rigoureux et de mieux maitriser les langages en général.</p>
                <p>Je réalise que les autres développeurs avaient beaucoup plus de connaissances pour m'aider à réaliser mes tâches.</p>
                <p>Ce stage m'a aussi fait découvrir que l'organisation est très importante. Il faut qu’on soit organisé dans les taches et les recherches pour ne pas perdre du temps.</p>

                <br>
                <h2>Conclusion</h2>
                <br>
                <p>Ce stage de six semaines a été une excellente expérience. J'ai pu apprendre énormément au niveau professionnel et aussi niveau technique.</p>
                <p>Je remercie toute l’équipe de SIIUM.</p>
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
    width: 350px;
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

#photoTableau{
    display: flex;
    margin: 0 auto;
    width: 1000px;
}
</style>
