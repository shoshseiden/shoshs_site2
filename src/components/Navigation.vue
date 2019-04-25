<template>
  <div>
    <nav>
      <router-link class="spacing" v-for="routes in links" v-bind:key="routes.id":to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default{
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Hello World',
          page: '/HelloWorld'
        },
        {
          id: 1,
          text: 'Home',
          page: '/Home'
        },
        {
          id: 2,
          text: 'Sites',
          page: '/Sites'
        },
        {
          id: 3,
          text: 'Contact',
          page: '/Contact'
        },
        {
          id: 4,
          text: 'Skills',
          page: '/Skills'
        }
      ]
    }
  }
}
</script>

<style>
  .spacing {
    margin-right: 10px;
  }
</style>
