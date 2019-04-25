<template>
<div>
  <h1>Contact</h1>
  <ul>
    <li>Phone: {{ phone }}</li>
    <li>Email: {{ email }}</li>
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
</style>
