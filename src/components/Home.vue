<template>
  <div>
    <div id="intro">
      <h1>SJSeiden's Websites</h1>
      <p>{{ message }}</p>
    </div>

    <br>

    <div id="home-nav">
      <h2>Links</h2>
      <ul v-for="link in links">
        <a v-bind:href="link.url">{{ link.name}}</a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      message: "Welcome to my online portfolio. Feel free to explore the websites I've created.",
      links: [
        {name: 'Web Sites', url: 'sites.html'},
        {name: 'Skills', url: 'skills.html'},
        {name: 'Contact Information', url: 'contact.html'}
      ]
    }
  }
}
</script>

<style>
  #intro{
    background: black;
    border-style: solid;
    border-color: gray;
    opacity: 0.5;
    filter: alpha(opacity=50);
  }
  #home-nav{
    background-color: black;
    border-color: gray;
    border-style: solid;
    opacity: 0.5;
    filter: alpha(opacity=50);
  }
  h1, h2, h3, a, p {
    color: #08d12d;
  }
  a:hover{
    color: gray;
  }
</style>
