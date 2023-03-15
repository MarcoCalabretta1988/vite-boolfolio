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
    <div class="card h-100">
        <div class="d-flex justify-content-center align-items-center mt-3">
            <img :src="project.image" class="card-img-top img-fluid w-50" :alt="project.name">
        </div>
        <div class="card-body">
            <h3 class="card-title my-3">{{ project.name }}</h3>
            <p class="card-text">{{ project.description }}</p>
            <hr>
            <strong>Type:</strong> {{ project.type.label }}
            <strong>Updated at:</strong> {{ projectDate }}
        </div>
    </div>
</template>

<style lang="scss" scoped></style>