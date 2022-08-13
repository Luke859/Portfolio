<template>
    <section class="s1">
        <div class="main-container">
            <div class="message">
                <div class="greeting">
                    <h1 class="moi">Luke Jones</h1>
                    <h3>Etudiant en Informatique</h3>
                    <h2>Portfolio</h2>
                </div>
                <div class="phrase">
                    <ul>
                        <li>
                            <a data-text="&nbsp;Luke&nbsp;Jones">&nbsp;Luke&nbsp;Jones</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.s1{
    overflow: auto;
    background-image: url("../../public/paysage.png");
    background-repeat: no-repeat;
    object-fit: cover;
    height: 800px;
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
    display: grid;
}
.greeting .moi{
    display: grid;
    font-family: 'Kalam', cursive;
    padding-top: 200px;
    padding-left: 30px;
    font-size: 75px;
}

.phrase{
    grid-area: left;
    display: flex;
    justify-content: center;
}

.phrase ul{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.phrase ul li{
    position: relative;
    list-style: none;
}
.phrase ul li a{
    position: relative;
    font-size: 4em;
    text-decoration: none;
    line-height: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: black;
    -webkit-text-stroke: 1px rgba(255,255,255,0.5)
}
.phrase ul li a::before{
    content: attr(data-text);
    position: absolute;
    color: #42a5f5;
    width: 0%;
    overflow: hidden;
    transition: 1s;
    border-bottom: 5px solid #42a5f5;
    -webkit-text-stroke: 1px #42a5f5;
}
.phrase ul li a:hover::before{
    width: 100%;
    text-shadow: 2px 2px 10px #42a5f5;
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
}

</style>