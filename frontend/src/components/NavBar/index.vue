<template>
  <div id="nav">
    <router-link to="/" class="text-indigo-500" data-test="link-to-home">Home</router-link> |
    <router-link to="/orders" class="text-indigo-500" data-test="link-to-orders">Orders</router-link>
  </div>
</template>

<script>
  export default {
    name: 'nav-bar',
  }
</script>