<template>
  <div>
    <div id="intro">
      <h1>SJSeiden's Websites</h1>
    </div>

    <br>
    
    <div id="home-nav">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
