<script>
export default {
    name: 'AppCard',
    data: () => ({

    }),
    props: { content: Array }
}
</script>

<template>
    <div class="card h-100">
        <div class="d-flex justify-content-center align-items-center mt-3">

            <img :src="content.image" class="card-img-top img-fluid w-50" :alt="content.name">
        </div>
        <div class="card-body">
            <h3 class="card-title my-3">{{ content.name }}</h3>
            <p class="card-text">{{ content.description }}</p>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>