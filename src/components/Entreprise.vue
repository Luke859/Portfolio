<template>
    <section class="s8">
        <div class="main-container">
            <div class="text">
            <h2>Présentation de SIIUM</h2>
            <br>
            <img id="photo" src="../assets/Siium.png" />
            <br>
            <p>Pour mon stage de fin d'année de B2 en informatique à Nantes Ynov Campus, j'ai choisi l'entreprise SIIUM.</p>
            <p>SIIUM est une entreprise qui réinvente la vision globale des systèmes informatiques par plusieurs activités telles que : son expertise en cloud d’entreprise, hyperconvergence, infogérance, sécurité, audit, les offres d’hébergement en Datacenter, les plateformes collaboratives.</p>
            <br>
            <p>Une activité née d’une réelle volonté d’accompagner les entreprises accrue par la présence de leurs partenaires et certifications : NUTANIX, MICROSOFT, OFFICE 365, SYSTANCIA, MELLANOX, CITRIX et bien d’autres qui s’investissent avec SIIUM avec leur propositions d’innovations.</p>
            <br>
            <p>SIIUM se définit comme véritable superviseur d'enjeux en s’impliquant dans les exigences et l’anticipation des projets tout en accompagnant leur client sur le long terme, une notion de suivi d’une importance primordiale pour eux et pour la satisfaction de leur client.</p>
            <br>
            <p>SIIUM a été fondé en 2013 par le directeur Cédric Girard.</p>
            <h2>L'équipe SIIUM</h2>
            <br>
            <p>SIIUM regroupe 8 personnes dans l'entreprise et est composé de 3 équipes : </p>
            <p>C'est 3 équipes sont  :</p>
            <p>- les développeurs web</p>
            <p>- les responsables marketing et communication </p>
            <p>- les ingénieurs Systèmes et Réseaux</p>
            <br>
            <p>Voici le schéma de l'équipe :</p>
            <img id="photoEquipe" src="../assets/EquipeSiium.png" />
            <br>
            <h2>Localisation de SIIUM</h2>
            <br>
            <p>Leur siège social est situé à 2 Rue Owen Chamberlain à Challans.</p>
            <p>Dans l'immeuble BX ONE.</p>
            <img id="photoLieu" src="../assets/lieu.png" />
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

#photoLieu{
    display: flex;
    margin: 0 auto;
    width: 1000px;
    border-radius: 10px;
    border: solid 2px black;
}

#photoEquipe{
    display: flex;
    margin: 0 auto;
    width: 1000px;
    border-radius: 10px;
    border: solid 1px black;
}

</style>
