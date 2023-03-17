<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';
import AppAlert from '../components/AppAlert.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api';
export default {
    name: 'ProjectDetail',
    data: () => ({
        hasError: false,
        loading: false,
        project: [],
    }),
    components: { AppLoader, AppAlert },
    computed: {
        projectDate() {
            const date = new Date(this.project.updated_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            let hour = date.getHours();
            let minute = date.getMinutes();

            if (day < 10) day = `0${day}`;
            if (month < 10) month = `0${month}`;
            if (hour < 10) hour = `0${hour}`;
            if (minute < 10) minute = `0${minute}`;

            return ` ${day}/${month}/${year}  ${hour}:${minute}`
        }
    },
    methods: {
        fetchProjects(endpoint = null) {
            this.loading = true;

            if (!endpoint) endpoint = apiBaseUrl + '/projects/' + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.project = res.data;
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
    <app-alert v-if="hasError" @close-alert="hasError = false"></app-alert>
    <app-loader v-if="loading"></app-loader>
    <div class="container">
        <h1 class="text-center my-5">{{ project.name.toUpperCase() }}</h1>
        <div class="row row-cols-2">
            <div class="col">
                <figure>
                    <img :src="project.image" class="img-fluid" :alt="project.name">
                </figure>
            </div>
            <div class="col">
                <p class="card-text card-description">{{ project.description }}</p>
            </div>
            <div class="col-12">
                <hr>
                <div class="d-flex justify-content-between">
                    <div><strong>Type:</strong> <span class="badge" :style="{ backgroundColor: project.type?.color }">{{
                        project.type.label }}</span></div>
                    <div><strong>technologies:</strong>
                        <span v-for="technology in project.technologies" class="badge mx-1"
                            :style="{ backgroundColor: technology?.color }">{{ technology?.label }}</span>
                    </div>
                </div>
                <hr>
                <div class="not-found d-flex justify-content-between align-items-center">
                    <div class="d-flex justify-content-between align-items-center"><strong>Updated at:</strong> {{
                        projectDate }}
                        <div class="d-flex justify-content-between mx-3">
                            <a :href="project.linkedin"> <font-awesome-icon icon="fa-brands fa-linkedin"
                                    class="icon p-1 fa-2x" /></a>
                            <a :href="project.github"> <font-awesome-icon icon="fa-brands fa-github"
                                    class="icon p-1 fa-2x" /></a>
                        </div>
                    </div>
                    <router-link :to="{ name: 'home' }" class="btn btn-success"><font-awesome-icon
                            icon="fa-solid fa-rotate-left" class="icon fa-1x" /> Back</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>