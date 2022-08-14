<template>
    <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: top; background-color: #42a5f5" viewBox="0 0 1440 320">
    <path fill="#1565c0" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <section class="s5">
        <div class="main-container">
            <h1>ME CONTACTER</h1>
            <div class="contact">
                <form id="contact-form" action="https://formsubmit.co/lukebryan@orange.fr" method="POST"  enctype="multipart/form-data" >
                    <input type="hidden" name="_captcha" value="false">
                    <input class="input-field" type="text" name="Prénom" placeholder="Prénom *" required>
                    <input class="input-field" type="text" name="Nom" placeholder="Nom *" required>
                    <input class="input-field" type="email" name="Email" placeholder="Email *" required>
                    <input type="hidden" name="_next" value="http://localhost:3000/">
                    <textarea class="input-field" name="Message" required></textarea>
                    <!-- <input type="file" name="attachment" accept="image/png, image/jpeg"> -->
                    <input id="submit-btn" type="submit" value="Envoyer">
                </form>
                
                <div class="contact-text">
                    <h3>Informations</h3>
                    <p>Si vous avez plus de questions n'hésiter pas à me contacter</p>
                    <div class="info">
                        <li><a class="fa fa-phone" ></a> 06 71 77 19 71</li>
                        <li><a class="fa fa-envelope" ></a> lukebryan@orange.fr</li>
                        <li><a class="fa fa-map-marker" ></a> 13 Rue Stéphane LeDuc, Nantes 44100</li>
                    </div>
                    <div class="reseaux">
                        <li><a target="_blank" class="fa fa-facebook" href="https://www.facebook.com/profile.php?id=100005241454058"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a target="_blank" href='https://www.instagram.com/luke_jones8509/' class="fa fa-instagram"></a></li>
                    </div>
                </div>

                <!-- <vue-recaptcha sitekey="6LeIP6weAAAAAOshHIwb5EROFETJi-MtbRtdyN2e">
                <button>Click me</button>
                </vue-recaptcha> -->
            </div>
        </div>
    </section>
</template>

<style>

.s5 {
    background-color: #1565c0;
    overflow: auto;

}

.s5 h1{
    padding-bottom: 50px;
    color: black;
    font-family: 'Chewy', cursive;
    font-size: 60px; 
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
}

.contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    column-gap: 60px;
    /* -webkit-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    -moz-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    box-shadow: -33px 23px 2px 2px rgba(0,0,0,1); */
}

@media screen and (max-width: 1300px){
    .contact {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'left'
    'right';
    }

    .contact-text{
        justify-content: center;
        text-align: center;
        width: 500px;
        margin: 0 auto;
    }
}

#contact-form{
    grid-area: left;
    display: grid;
    display: block;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    border-radius: 10px;
    background-color: rgb(0, 127, 255);
    margin-bottom: 50px;
    -webkit-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    -moz-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
}

#contact-form textarea{
    min-height: 100px;
    font-size: 14px;
}

.input-field {
    width: 100%;
    padding-top: 5px;
    padding-bottom: 10px;
    border-radius: 5px;
    border: 2px solid black;
    font-size: 14px;
    margin-top: 20px;
}

#submit-btn{
    margin-top: 17px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: black;
    color: white;
    float: left;
}

#submit-btn:hover{
    border: 2px solid white;
}

.contact-text{
    grid-area: right;
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    margin-bottom: 30px;
}

.fa {
    padding: 10px;
    font-size: 20px;
    width: 50px;
    text-decoration: none;
    color: black;
}

.fa:hover{
    text-decoration: none;
    list-style-type: none;
    color: white

}

.info li {
    list-style-type: none;
    font-size: 22px;
    padding-top: 30px;
}

.reseaux {
    display: flex;
    flex-wrap: nowrap;
}

.reseaux > li {
    list-style-type: none;
    font-size: 50px;
    padding-top: 10px;
    margin: 0 auto;
}

.reseaux li a:hover{
    color: rgb(0, 127, 255);
}
</style>
