<template>
    <section class="s9">
        <div class="main-container">
            <div class="text">
                <h2>Activités en entreprise 09/06/2022</h2>
                <br>
                <br>
                <p>Pendant mon stage de 6 semaines </p>
                <br>
                <p>text</p>
                <br>
                <p>text</p>
                <p>text</p>
                <br>
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