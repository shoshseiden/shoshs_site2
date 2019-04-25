<template>
<div>
  <h1>Sites</h1>
  <ul>
    <li v-for="site_link in site_links">
      <a v-bind:href="site_link.url">{{site_link.name}}</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Sites',
  data(){
    return{
      site_links: [
        {name: 'Pachyderm Publishing', url: 'pachydermpublishing.com'},
        {name: 'C.A. Griggs Books', url: 'cagriggsbooks.com'}
      ]
    }
  }
}
</script>

<style>
</style>
