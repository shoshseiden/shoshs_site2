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
          text: 'Home',
          page: '/Home'
        },
        {
          id: 1,
          text: 'Sites',
          page: '/Sites'
        },
        {
          id: 2,
          text: 'Contact',
          page: '/Contact'
        },
        {
          id: 3,
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
