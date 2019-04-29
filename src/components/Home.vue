<template>
  <div>
    <div id=intro>
      <h1>Shosh's Websites</h1>
      <p>{{ intro_message }}</p>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Home',
  data() {
    return {
      intro_message: "My name is Shosh Seiden and I am an up and coming web developer. Please check out the sites I've developed."
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
