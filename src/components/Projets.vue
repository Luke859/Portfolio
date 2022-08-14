<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="vertical-align: top; background-color: #1565c0">
    <path fill="#42a5f5" fill-opacity="1" d="M0,128L24,122.7C48,117,96,107,144,112C192,117,240,139,288,154.7C336,171,384,181,432,176C480,171,528,149,576,160C624,171,672,213,720,208C768,203,816,149,864,149.3C912,149,960,203,1008,224C1056,245,1104,235,1152,202.7C1200,171,1248,117,1296,112C1344,107,1392,149,1416,170.7L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
    </svg>
    <section class="s4">
        <div class="main-container">
            <h1 class="s4-title">MES PROJETS</h1>
            <div class="projets">
                <div class="card-projets">
                    <div class="card-content">
                        <h2 class="card-title">
                        Application mobile
                        </h2>
                        <p class="card-body1">
                        Le but du projet mettre en place une application mobile(Android/iOS) permettant de renseigner un annuaire des objets dans une maison/un appartement.
                        Le language utilisé est React Native. 
                        </p>
                        <a href="#" class="button">Learn more</a>
                    </div>
                </div>
                <div class="card-projets">
                    <div class="card-content">
                        <h2 class="card-title">
                        Projets 2
                        </h2>
                        <p class="card-body">
                        text
                        </p>
                        <a href="#" class="button">Learn more</a>
                    </div>
                </div>
                <div class="card-projets">
                    <div class="card-content">
                        <h2 class="card-title">
                        Projets 3
                        </h2>
                        <p class="card-body">
                        Ok
                        </p>
                        <a href="#" class="button">Learn more</a>
                    </div>
                </div>
                <div class="card-projets">
                    <div class="card-content">
                        <h2 class="card-title">
                        Projets 3
                        </h2>
                        <p class="card-body">
                        Ok
                        </p>
                        <a href="#" class="button">Learn more</a>
                    </div>
                </div>
                <div class="card-projets">
                    <div class="card-content">
                        <h2 class="card-title">
                        Projets 3
                        </h2>
                        <p class="card-body">
                        Ok
                        </p>
                        <a href="#" class="button">Learn more</a>
                    </div>
                </div>
                <div class="card-projets">
                    <div class="card-content">
                        <h2 class="card-title">
                        Projets 3
                        </h2>
                        <p class="card-body">
                        Ok
                        </p>
                        <a href="#" class="button">Learn more</a>
                    </div>
                </div>
                <div class="card-projets">
                    <div class="card-content">
                        <h2 class="card-title">
                        Projets 3
                        </h2>
                        <p class="card-body">
                        Ok
                        </p>
                        <a href="#" class="button">Learn more</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style>
.s4 {
    background-color: #42a5f5;
    overflow: auto;

}

.s4-title{
    color: var(--mainText);
    padding-bottom: 50px;
    font-family: 'Chewy', cursive;
    font-size: 60px; 
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
}

.main-container {
    width: 1200px;
}

@media screen and (max-width: 1200px){
    .main-container {
        width: 95%
    }
}

.projets{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 75px;
    min-height: 100vh;
    line-height: 1.6;
    background: black;
    font-family: sans-serif;
    padding: 50px 50px 50px 50px;
    /* min-width: 990px; */
}

.projets .card-projets{
    color: red;
    background-image: url("../assets/CAT.gif");
    background-size: cover;
    padding: 10rem 0 0;
    max-width: 35ch;
    min-width: 220px;
    max-height: 40ch;
    border-radius: 0.5em;
    overflow: hidden;
    transition: transform 500ms ease;
}

.projets .card-projets:hover, .card-projets:focus-within{
    transform: scale(1.05)
}

.projets .card-content{
    background: linear-gradient(hsl(0 0% 0% / 0), hsl(20 0% 0% / 0.3) 10%, hsl(0 0% 0% / 1));
    --padding: 1.5rem;
    padding: var(--padding);
    right: 0;
}

.projets .card-content .card-title{
    position: relative;
    width: max-content;
    color: white;
}

.projets .card-content .card-body{
    color: white;
}

.projets .card-content .card-body1{
    color: white;
    font-size: 10px;
}

.projets .card-content .card-title::after{
    content: "";
    position: absolute;
    height: 4px;
    left: calc(var(--padding) * -1);
    top: 40px;
    bottom: 20px;
    width: calc(100% + var(--padding));
    background: #42a5f5;
    transform: scaleX(0);
    transition: transform 700ms ease;
    transform-origin: left;
}

.card-projets:hover .card-title::after, .card-projets:focus-within .card-title::after{
    transform: scaleX(1);
}

.projets .card-content .button{
    cursor: pointer;
    display: inline;
    text-decoration: none;
    color: white;
    background-color: #42a5f5;
    padding: 0.5em 1.25em;
    border-radius: 5px;
    transition: 800ms ease;
    transition-delay: 0ms;
}

.projets .card-content:hover .button:hover{
    background-color: white;
    color: black;
    transition: 800ms ease;
}

@media (hover){
    .card-content{
        transform: translateY(60%);
        transition: transform 500ms ease;
    }

    .card-projets:hover .card-content, .card-projets:focus-within .card-content{
    transform: translateY(0);
    transition-delay: 500ms ;
    }

    .card-projets:focus-within .card-content{
        transition-duration: 0ms;
    }

    .card-content > *:not(.card-title){
        opacity: 0;
        transition: opacity 500ms linear;
    }

    .card-projets:hover .card-content > *:not(.card-title), .card-projets:focus-within .card-content > *:not(.card-title){
        opacity: 1;
        transition-delay: 1000ms ;
    }
}

</style>