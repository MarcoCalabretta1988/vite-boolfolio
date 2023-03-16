<script>
export default {
    name: 'NotFoundPage',
    data: () => ({})
}
</script>

<template>
    <div class="not-found d-flex justify-content-center align-items-center">
        <h1 class="me-3">404 | Page not found</h1>
        <button class="btn btn-success " @click="$router.back()">Back</button>
    </div>
</template>

<style lang="scss" scoped>
.not-found {
    height: calc(100vh - 56px);

}
</style>