<template>
<div id="sites">
  <h1>Sites</h1>
  <div class="grid-container">
    <ul>
      <div class="grid-item">
      <li v-for="site_link in site_links">
        <a v-bind:href="site_link.url">{{site_link.name}}</a>
      </li>
      </div>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Sites',
  data(){
    return{
      site_links: [
        {name: 'Pachyderm Publishing', url: 'http://www.pachydermpublishing.com'},
        {name: 'C.A. Griggs Books', url: 'http://www.cagriggsbooks.com'}
      ]
    }
  }
}
</script>

<style>
  #sites{
    background: black;
    border-style: solid;
    border-color: gray;
    opacity: 0.75;
    filter: alpha(opacity=75);
    a{
      color: #08d12d;
    }
  }
  h1, h2, h3, a, p {
    color: #08d12d;
  }
  a:hover{
    color: gray;
  }
  li{
    list-style-type: none;
  }
</style>
