<template>
  <div id="skills">
    <h1>Web Development Skills</h1>
    <ul v-for="skill in skills">
      <li>{{ skill.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return{
      skills: [
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'JavaScript'},
        {name: 'JQuery'},
        {name: 'VueJS'},
        {name: 'Django'},
        {name: 'Python'},
      ]
    }
  }
}
</script>

<style>
  #skills{
    background: black;
    border-style: solid;
    border-color: gray;
    opacity: 0.75;
    filter: alpha(opacity=75);
  }
  h1, h2, h3, a, p, li {
    color: #08d12d;
  }
  a:hover{
    color: gray;
  }
</style>
