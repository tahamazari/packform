<template>
  <NavBar />
  <div>This is the Home Page</div>
</template>

<script>
  import NavBar from "../../components/NavBar/index.vue";
  export default {
    name: 'home-page',
    components: {
      NavBar
    }
  }
</script>