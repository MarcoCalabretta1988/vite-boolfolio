<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/project/ProjectCard.vue';
import AppPaginator from './components/AppPaginator.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api';

export default {
  name: 'AppMain',
  data: () => ({
    hasError: false,
    loading: false,
    projects: {
      data: [],
      links: [],
    },
  }),
  components: { AppHeader, ProjectCard, AppPaginator },
  methods: {
    fetchProjects(endpoint = null) {
      this.Loding = true;
      if (!endpoint) endpoint = apiBaseUrl + '/projects';
      axios.get(endpoint).then(res => {
        const { data, links } = res.data;
        this.projects = { data, links };
      }).catch(() => {
        this.hasError = true;
      }).then(() => {
        this.loding = false;
      });
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
      <div class="col" v-for="project in projects.data" :key="project.id">
        <project-card :project="project"> </project-card>
      </div>
    </div>
  </main>

  <footer>
    <app-paginator :links="projects.links" @change-page="fetchProjects"></app-paginator>

  </footer>
</template>

<style lang="scss" scoped></style>