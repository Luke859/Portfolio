<template>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="vertical-align: top; background-color: #42a5f5"><path fill="#1565c0" fill-opacity="1" d="M0,128L34.3,122.7C68.6,117,137,107,206,133.3C274.3,160,343,224,411,229.3C480,235,549,181,617,160C685.7,139,754,149,823,149.3C891.4,149,960,139,1029,133.3C1097.1,128,1166,128,1234,149.3C1302.9,171,1371,213,1406,234.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    <transition name="slide">
        <section class="s3">
            <div class="main-container">
                <h1 class="s3-title">MES EXPERIENCES</h1>
                <div class="experiences">
                    <div class="left-card"> 
                        <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="../assets/atlanticTobo.png" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title"> Atlantic Toboggan</h4>
                                <p class="card-text">Travail dans un Parc aquatique "Atlantic Toboggan" à Saint Jean de Monts, d'une durée de 2 mois.
                                    Poste de surveillant des toboggans : la mission -> surveillance des clients pour assurer leurs sécurités.
                                    Travail en équipe et individuel.</p>
                                <a target="_blank" href="https://www.atlantic-toboggan.com/" download="" class="button_redirect">Lien vers le site</a>
                            </div>                 
                        </div>
                    </div>

                    <div class="middle-card">
                        <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="../assets/challenge48h.png" alt="Card image cap" style="width: 178px; margin: 0 auto;">
                            <div class="card-body">
                                <h4 class="card-title"> Challenge 48h</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet a voluptatem architecto, necessitatibus sapiente qui distinctio praesentium vero harum eos ut, totam quos asperiores voluptatum labore minima cupiditate aliquid quam!</p>
                                <a target="_blank" href="https://www.ynov-nantes.com/actualites/challenge-48h/" download="" class="button_redirect">Plus de detail </a>
                            </div>                 
                        </div>
                    </div>

                    <div class="right-card">
                        <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="../assets/ydays.png" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title">Projet YDays</h4>
                                <p class="card-text">Les Ydays, ce sont 10 journées dans le calendrier académique, dédiées à la conduite de projets. Lors des Ydays, nous sommes en groupe est construisons notre projet de A à Z</p>
                                <a target="_blank" href="https://www.ynov-nantes.com/qui-sommes-nous/ydays/" download="" class="button_redirect">Pour plus d'info</a>
                            </div>                 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </transition>
</template>

<style>
:root{
    --mainText: black;
    --secondaryText: #4b5156;
}

.s3 {
    background-color: #1565c0;
    overflow: auto;

}

.s3-title{
    color: var(--mainText);
    padding-bottom: 50px;
    font-family: 'Chewy', cursive;
    font-size: 60px; 
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
}

p {
    color: var(--secondaryText);
}

.main-container {
    width: 1200px;
    margin: 0 auto;
}

@media screen and (max-width: 1200px){
    .main-container {
        width: 95%
    }
}

.experiences {
    display: grid;
    background-color: black;
    border-radius: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'left center right';
    padding-top: 30px;
    margin-bottom: 75px;
    /* -webkit-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    -moz-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    box-shadow: -33px 23px 2px 2px rgba(0,0,0,1); */
}

@media screen and (max-width: 1000px){
    .experiences {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'left'
    'center'
    'right';
    }

    .right-block{
        justify-content: center;
    }
}

.left-card{
    grid-area: left;
    padding-top: 50px;
    padding-bottom: 50px;

}

.middle-card{
    grid-area: center;
    padding-top: 50px;
    padding-bottom: 50px;
}


.right-card {
    grid-area: right;
    padding-top: 50px;
    padding-bottom: 50px;
}

.card{
    position: relative;
    padding: 15px;
    margin: 0 auto;
}

.card-text{
    padding-bottom: 20px;
}

.button_redirect {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;
  border-radius: 5px;
}

.button_redirect:hover {
  background-color: RoyalBlue;
  text-decoration: none;
}

</style>