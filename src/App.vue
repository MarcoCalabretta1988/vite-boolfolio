<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppCard from './components/AppCard.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api';

export default {
  name: 'AppMain',
  data: () => ({
    projects: [],
  }),
  components: { AppHeader, AppCard },
  methods: {
    fetchProjects() {
      axios.get(apiBaseUrl + '/projects').then(res => {
        this.projects = res.data;
      })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <app-header></app-header>

  <main class="container my-5">
    <div class="row row-cols-2 g-5">
      <div class="col" v-for="project in projects" :key="project.id">
        <app-card :content="project"> </app-card>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>