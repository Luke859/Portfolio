<template>
    <section class="s1">
        <div class="main-container">
            <div class="message">
                <div class="greeting">
                    <ul>
                        <li>
                            <a data-text="&nbsp;Luke&nbsp;Jones">&nbsp;Luke&nbsp;Jones</a>
                        </li>
                    </ul>
                    <h3>Etudiant en Informatique</h3>
                    <div class="button">
                        <a><router-link to="/About">A propos de moi</router-link></a>
                    </div>
                </div>
                <div class="phrase">
                    <img id="photo" src="../assets/luke_bleu.jpg" />
                    <!-- <h1 class="moi">Luke Jones</h1> -->
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.s1{
    overflow: auto;
    background-image: url("../assets/paysage.png");
    background-repeat: no-repeat;
    object-fit: cover;
    height: 800px;
    width: auto;
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
.message{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    height: 600px;
    /* column-gap: 150px; */
}
.greeting{
    grid-area: right;
    /* display: grid; */
    text-align: center;
    font-family: 'Kalam', cursive;
    margin-top: 50%;
}
.greeting ul{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.greeting ul li{
    position: relative;
    list-style: none;
}
.greeting ul li a{
    position: relative;
    font-size: 4em;
    text-decoration: none;
    line-height: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: black;
    -webkit-text-stroke: 1px rgba(255,255,255,0.5)
}
.greeting ul li a::before{
    content: attr(data-text);
    position: absolute;
    color: #004278;
    width: 0%;
    overflow: hidden;
    transition: 1s;
    border-bottom: 5px solid #004278;
    -webkit-text-stroke: 1px #1275c6;
}
.greeting ul li a:hover::before{
    width: 100%;
    text-shadow: 2px 2px 10px #1275c6;
}

.greeting .button {
    padding: 30px;
}
.greeting .button a{
    cursor: pointer;
    display: inline;
    text-decoration: none;
    color: black;
    background-color: #42a5f5;
    padding: 0.5em 1.25em;
    border-radius: 5px;
    transition: 800ms ease;
    transition-delay: 0ms;
}

.greeting .button a:hover{
    background-color: white;
    color: black;
    transition: 800ms ease;
}

/* Côté gauche de ma section */

#photo{
    display: block;
    margin: 0 auto;
    height: 300px;
    width: 300px;
    object-fit: cover;
    border: 2px solid rgba(255,255,255,.5);;
    border-radius: 300px;

}

.phrase{
    grid-area: left;
    display: flex;
    align-items: center;
}
.phrase .moi{
    display: grid;
    font-family: 'Kalam', cursive;
    padding-top: 200px;
    padding-left: 30px;
    font-size: 75px;
}

@media screen and (max-width: 900px){
    .message {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'left'
    'right';
    }
    .phrase{
        justify-content: center;
    }

    .greeting{
        margin-top: 0%;
    }
}

</style>