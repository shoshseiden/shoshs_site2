<template>
  <div>
    <h1>Seiden's Web</h1>
    <h2>Web Development Services Provided by Shosh Seiden</h2>
    <div id=headshot>
      <img src="static/images/headshot.jpg" alt="head shot" height="250" width="250">
    </div>
    <div id=intro>
      <h3>Introduction</h3>
      <p>{{ intro_message }}</p>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Home',
  data() {
    return {
      intro_message: "Greetings! My name is Shosh Seiden and I am an up and coming web developer located in Denver, Colorado. I am a technical person with a passion for creativity, therefore web development is a strong suit for me. With that said, I would love to provide you with my web development services for your personal or professional needs. Please feel free to browse my work."
    }
  }
}
</script>

<style>
  #intro{
    background: black;
    border-style: solid;
    border-color: gray;
    opacity: 0.75;
    filter: alpha(opacity=75);
  }
  h1, h2, h3, a, p {
    color: #08d12d;
  }
  a:hover{
    color: gray;
  }
</style>
