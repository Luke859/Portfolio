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
                <p>Pendant ces 6 semaines en entreprise j'ai pu découvrir le monde du travail en informatique mais aussi de nouveau langage que je n'avais jamais étudiée en cours. </p>
                <p>Dès mon arrivé je fut accueilli par mon maitre de stage qui m'a présenté les équipes, les locaux et mon montré le poste où je travaillerais.</p>
                <p>Il m'a donc donné une mission ("si je l'accepte") et j'étais parti pour le travaille. J'ai donc commencer par revoir les bases des langages vu pendant mon stage.</p>
                <p>Si vous voulez en savoir plus sur les missions qui m'on été assigné allez voir mon article <router-link to="Articles/Projets">ici</router-link>.</p>
                <br>
                <p>Voici une photo de mon poste où je travaillais dans l'entreprise. Chaque équipe avait leur propre salle et chacun son poste.</p>
                <br>
                <img id="photoBureau" src="../../assets/bureau.jpg" />
                <br>
                <h2>Mon ressenti</h2>
                <br>
                <p>A quelque moment durant mon stage surtout au début, j'étais perdu. Heureusement que mon chef de projet était là car j'ai pu lui demander de l'aide et des conseils.</p>
                <p>A la fin de mon stage je sentais que j'avais appris de nouvelles choses et que j'avais découvert ce qu'ai le monde de l'informatique en entreprise.</p>
                <p>Mon stage c'est très bien passé, grâce au cadre de travail agréable et énergétique et je remercie toute l'équipe SIIUM de leur gentillesse.</p>
                <p>C'est aussi grâce à leurs réactivités, que quand j'avais une question ils étaient toute suite là pour y répondre.</p>
                <p>J'ai pu me dire à la fin de mon stage, que j'ai réussi à aidées l'équipe avec les tâches qu'ils m'avaient données.</p>
                <br>
                <h2>Expérience acquise</h2>
                <br>
                <h3>- Expérience codage</h3>
                <br>
                <p>Grâce à ce stage j'ai pû acquérir de nouvelle compétence mais surtout d'affiner mes lacunes au niveau du codage donc monter en compétence.</p>
                <p>Par exemple la POO (Programmation Orientée Objet) j'ai pû appronfondire mes compétences sur ce point.</p> 
                <p>J'ai pu découvrir et apprendre a utilisé le framework Symfony.</p>
                <p>J'ai appris à utiliser MySQL (côté Base de données) qui est un peu different de PHPMyAdmin mais qui reste similaire.</p>
                <p>J'ai appris les data tables en C#.</p>
                <p>J'ai appris à faire la connection d'une API de microsoft dynamics à un projet en C#.</p>
                <p>J’ai appris la création de test unitaire.</p>
                <br>
                <h3>- Expérience de travail en équipe</h3>
                <br>
                <p>J'ai aussi appris à travailler en équipe donc ce répartir les tâches, faire des points tout les jours.</p>
                <p>Si vous êtes intéressé par les activités que j'ai pu vivre en entreprise allez voir mon article <router-link to="Articles/Activites_entreprise">ici</router-link>.</p>
                <p>J'ai pu découvrir l'atelier bonne pratique, l'affinage de stories, les points de tests unitaires.</p>
                <p>J'ai découvert le planning de sprint, un sprint représente une durée de temps pour faire des tâches, un sprint dure un certain nombre de jours.</p>
                <br>
                <p>Voici une photo du tableau de sprint où on ce répartissait les tâches et où l'on fesait nos points :</p>
                <img id="photoTableau" src="../../assets/tableau.jpg" />
                <br>
                <h2>Points d'amélioration</h2>
                <br>
                <p>Il me reste beaucoup de travail car il faut que je m'améliore niveau code : être plus précis, plus rigoureux et de mieux maitriser les langages en général car pendant ce stage je demandait plus souvent de l'aide aux autres développeurs pour m'aider à réaliser mes tâches.</p>
                <p>Ce stage m'a aussi fait découvrir que l'organisation est très important et qu'il faut que je m'organise dans ce que je fais et je recherche.</p>

                <br>
                <h2>Conclusion</h2>
                <br>
                <p>En général ce stage à été une excellent expériences. J'ai pu apprendre énormement de choses au niveau professionnelle mais aussi niveau technique.</p>
                <p>Je remercie toutes les personnes de SIIUM qui m'ont aidées pendant mon stage.</p>
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
