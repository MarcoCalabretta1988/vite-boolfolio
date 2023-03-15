<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/project/ProjectCard.vue';
import AppPaginator from './components/AppPaginator.vue';
import AppLoader from './components/AppLoader.vue';
import AppAlert from './components/AppAlert.vue';
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
  components: { AppHeader, ProjectCard, AppPaginator, AppLoader, AppAlert },
  methods: {
    fetchProjects(endpoint = null) {
      this.loading = true;
      if (!endpoint) endpoint = apiBaseUrl + '/projects';
      axios.get(endpoint).then(res => {
        const { data, links } = res.data;
        this.projects = { data, links };
      }).catch(() => {
        this.hasError = true;
      }).then(() => {
        this.loading = false;
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

  <app-alert v-if="hasError" @close-alert="hasError = false"></app-alert>
  <app-loader v-if="loading"></app-loader>
  <main class="container my-5" v-else>
    <div class="row row-cols-2 g-5" v-if="projects.data.length">
      <div class="col" v-for="project in projects.data" :key="project.id">
        <project-card :project="project"> </project-card>
      </div>
    </div>
    <div v-else class="text-center">
      <h1>Non ci sono progetti da mostrare</h1>
    </div>
  </main>

  <footer>
    <app-paginator :links="projects.links" @change-page="fetchProjects"></app-paginator>

  </footer>
</template>

<style lang="scss" scoped></style>