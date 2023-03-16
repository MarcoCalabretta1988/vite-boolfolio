<script>

import AppHeader from './components/AppHeader.vue';

export default {
  name: 'AppMain',
  data: () => ({}),
  components: { AppHeader },

}
</script>

<template>
  <app-header></app-header>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>