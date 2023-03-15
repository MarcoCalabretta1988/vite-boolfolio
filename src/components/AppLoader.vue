<script>
export default {
    name: 'AppLoader',
    data: () => ({

    })
}
</script>

<template>
    <div class="loader-overlay">
        <div class="spinner-border text-success" role="status">
        </div>
        <h1 class="text-success mx-5">Loading</h1>
    </div>
</template>

<style lang="scss" scoped>
.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;

    .spinner-border {
        width: 150px;
        height: 150px;
    }
}
</style>