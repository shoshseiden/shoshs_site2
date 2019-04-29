<template>
  <div>
    <div id="intro">
      <h1>SJSeiden's Websites</h1>
      <p>{{ message }}</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      message: "Welcome to my online portfolio. Feel free to explore the websites I've created."
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
  h1, h2, h3, a, p {
    color: #08d12d;
  }
  a:hover{
    color: gray;
  }
</style>
