<template>
    <section class="s8">
        <div class="main-container">
            <div class="text">
                <h2>Laravel VS Symfony 17/07/2022</h2>
                <br>
                <div class="images">
                    <img id="photoBureau" src="../../assets/symfony.png" />
                    <img id="photoBureau" src="../../assets/VS.png" />
                    <img id="photoBureau" src="../../assets/laravel.png" />
                </div>
                <br>
                <p>Je vais comparer 2 frameworks de développement d'applications web qui sont Laravel et Symfony</p>
                <p>Ce sont les 2 plus connut en PHP. Ces 2 framework ce ressemble beaucoup mais aujourd'hui je vais vous montrer que des frameworks peuvent ce ressembler mais on chacun leur spécialité.</p>
                <br>
                <p>Je veux faire la comparaison de ces 2 frameworks car pendant mon stage j'ai pu découvrir Symfony et ces fonctionnalités. J'ai aussi découvert Laravel en cours et je me suis dit qu'ils ont beaucoup de point commmun mais on chacun leur différences.</p>
                <br>
                <h2>Définition</h2>
                <br>
                <h3>Qu'est ce que Laravel ?</h3>
                <br>
                <p>Laravel est un framework open source pour PHP qui suit un modèle de développement MVC (modèle vue contrôleur). Il a été créée en 2011.</p>
                <p>Si vous êtes intéressé par ce langage voici leur <a href='https://laravel.com/'>documentation.</a></p>
                <p>On utilise Laravel pour des projets de courte durée. Il est facile à apprendre car il y a beaucoup de documentation, support video et des tutoriels.</p>
                <p>Laravel est très performant niveau rapidité car il permet de réduire le temps de développement.</p>
                <br>
                <h3>Qu'est ce que Symfony ?</h3>
                <br>
                <p>Symfony est lui aussi un framework open source pour PHP qui permet de créer des applications Web . Il a été créée en 2005.</p>
                <p>Si vous êtes intéressé par ce langage voici leur <a href='https://symfony.com/'>documentation.</a></p>
                <p>On utilise Symfony pour des petits projets mais aussi pour les projets plus complexes . Il est pas aussi facile de trouver des documentations ou des tutoriels pour ce langage.</p>
                <p>Symfony est un peu plus exigeant que Laravel niveau performance et niveau rapidité.</p>
                <h2>Voici les principales différences entre Symfony et Laravel.</h2>
                <br>
                <h3>Niveau performance et puissance</h3>
                <p>Pour ce qui est niveau performance, Laravel est supérieur à Symfony mais niveau puissance Symfony possède un noyau plus puissant.</p>
                <br>
                <h3>Rapidité de développement</h3>
                <p>Pour l'aspect rapidité tout dépend du type de projet que vous voulez faire.</p>
                <p>Si vous voulez développer un petit projet en PHP le mieux serait de partir sur du Laravel car il est beaucoup plus souple et n’est pas aussi exigeant que Symfony.</p>
                <p>Toutefois, si vous souhaitez travailler sur un projet plus complexe Symfony va être votre option car il vous offre une bonne performance et une évolutivité sur le long terme.</p>
                <br>
                <h3>Facilité d’utilisation et fonctionnalités</h3>
                <p>Pour ce qui est de la facilité d'utilisation Symfony possède un moteur de template nommé "Twig" qui est plus difficile à utilisé que Laravel.</p>
                <p>Alors que Laravel quand à lui possède "Blade" qui est plus simple d'utilisation.</p>
                <p>Niveau facilité d'utilisation on ce pencherait plus sur Laravel mais pour les fonctionnalités Symfony est meilleur.</p>
                <br>
                <h3>Les migrations</h3>
                <p>Les migrations de la base de données sont automatiques avec Symfony, grâce aux modèles définies dans le code.</p>
                <p>Avec Laravel, les migrations doivent se faire manuellement, ce qui implique d’avoir des conaissances plus poussées en SQL.</p>
                <br>
                <h3>Le coûts </h3>
                <p>Le coût de développement dépend donc de la taille du projet car un projet plus complexes et à long terme on utilisera Symfony, il sera plus chère mais vous pourrez économiser des coûts car il est évolutif.</p>
                <p>Alors qu'un petit projet on utilisera Laravel, il sera peut être pas chère mais ne sera pas sur le long terme et peu évolutif.</p>
                <br>
                <h2>Conclusion</h2>
                <br>
                <p>Pour conclure, si vous chercher un projet sur le long terme donc qui est nécessite de la puissance, rapide et qui est évolutif il faut partir sur du Symfony.</p>
                <p>Au contraire si vous chercher un petit projet il serait mieux de partir sur du Laravel car il est facile d'utilisation, puissant, coûte peu.</p>
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

.text .images {
  display: flex;
  justify-content: space-between;
}

.text .images img {
  width: 100px;
  height: 300px;
  padding: 50px;
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
</style>