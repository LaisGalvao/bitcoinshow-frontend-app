<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import GlobeIconVue from './components/icons/GlobeIcon.vue';
/* import api from './services'

const coin  = 'bitcoin'
 function getfromapi (){
   api.get(`/coins/${coin}`).then(response => console.log(response.data.description.en))
 } 
getfromapi()
 */
</script>

<template>
  <header>
    <GlobeIconVue />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 100%;
/*   margin: 0 auto; */
 /*  padding: 2rem; */

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: flex;
  }

  header {
   width: 100%;
    display: flex;
    place-items: center;
    position: fixed;
    justify-content: center;
    flex-direction: column;
    top: 0;
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
    margin: auto;
   /*  padding-right: calc(var(--section-gap) / 2); */
  }

  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

  /*   padding: 1rem 0;
    margin-top: 1rem; */
  }
}
</style>
