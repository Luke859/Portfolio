<script setup> 

</script>

<template>
  <header class="primary-header">
    <button class="nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
      <span class="sr-only">Menu</span> <!-- caché visuelement !--> 
    </button>
    <div class="logo">
      <img src="../assets/Jeux.png">
    </div>
    <nav>
      <ul class="primary-navigation" data-visible="false">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About me</router-link></li>
        <li><router-link to="/Articles">Blog</router-link></li>
        <li><router-link to="/Experiences">Experiences</router-link></li>
        <li><router-link to="/Contact">Contact</router-link></li>
        <li><router-link to="/Entreprise">Entreprise</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style>

.primary-header{
  background: #1565c0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.nav-toggle{
  display: none;
}

.logo{
  display: flex;
  margin: 1rem;
  top: 500px;
}

.logo img{
  width : 150px;
  height : 150px;
  border-radius: 50%;
}

.primary-navigation {
  display: flex;
  gap: var(--gap, 2rem);
  list-style: none;
  padding: 0;
  margin-top: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: hsl(0 0% 100% /0.1);
  backdrop-filter: blur(1rem);
  
}

.primary-navigation[data-visible="true"]{
  transform: translateX(0%);
}

.primary-navigation a {
  display: flex;
  padding: 20px;
  font-size: 18px;
  color: black;
  text-decoration: none;
  
}

.primary-navigation a:hover{
  display: flex;
  color: white;
  text-decoration: none;
}

@media (max-width: 55em) {
  .primary-navigation{
    --gap: 2em;
    position: fixed;
    z-index:1000;
    inset: 0 0 0 30%;
    flex-direction: column;
    padding: min(10vh, 10rem) 30px;
    transform: translateX(100%);
    transition: transform 350ms ease-out;
  }

  .nav-toggle{
    position: fixed;
    display: block;
    z-index: 9999;
    background: black;
    border: none;
    border-radius: 5px;
    width: 2rem;
    aspect-ratio: 1;
    top: 2rem;
    right: 2rem;
  }
}

@media (min-width: 68em) {
  .primary-navigation{
    padding-inline: clamp(3rem, 10vw, 10rem);
  }
}
</style>
