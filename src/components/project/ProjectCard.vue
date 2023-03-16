<script>
export default {
    name: 'ProjectCard',
    data: () => ({

    }),
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
    props: { project: Array }
}
</script>

<template>
    <div class="card h-100 border-success">
        <figure class="d-flex justify-content-center align-items-center pt-5 m-3">
            <img :src="project.image" class="card-img-top img-fluid w-50 " :alt="project.name">
        </figure>
        <div class="card-body">
            <h3 class="card-title my-3 text-center">{{ project.name.toUpperCase() }}</h3>

            <p class="card-text card-description">{{ project.description }}</p>
            <div class="d-flex justify-content-between">
                <a :href="project.linkedin"> <font-awesome-icon icon="fa-brands fa-linkedin" class="icon p-1 fa-2x" /></a>
                <a :href="project.github"> <font-awesome-icon icon="fa-brands fa-github" class="icon p-1 fa-2x" /></a>
            </div>
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
            <div class="d-flex justify-content-between align-items-center">
                <div><strong>Updated at:</strong> {{ projectDate }}</div>
                <router-link :to="{ name: 'project-detail', params: { id: project.id } }"
                    class="btn btn-success"><font-awesome-icon icon="fa-solid fa-eye" class="icon fa-1x" />
                    Detail</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
figure {
    height: 200px;
}

.card-description {
    height: 400px;
    overflow-y: auto;
}
</style>