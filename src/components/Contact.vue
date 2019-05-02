<template>
<div id="contact">
  <h1>Contact</h1>
  <ul>
    <p>Phone: {{ phone }}</p>
    <p>Email: <a v-bind:href="`mailto:${email}`">{{ email }}</a></p>
  </ul>
</div>
</template>

<script>
export default{
 name: 'Contact',
 data(){
  return{
    email: 'shosh.j.seiden@gmail.com',
    phone: '720-999-2341'
  }
 }
}

</script>
<style>
  #contact{
    background: black;
    border-style: solid;
    border-color: gray;
    opacity: 0.75;
    filter: alpha(opacity=75);
  }
  a:hover{
    color: gray;
  }
  h1, h2, h3, a, p {
    color: #08d12d;
  }
</style>
