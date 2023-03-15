<script>
export default {
    name: 'AppAlert',
    data: () => ({}),
    emits: ['close-alert']
}
</script>

<template>
    <div class="alert alert-danger alert-dismissible fade show container mt-5" role="alert">
        <strong>Error!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" @click="$emit('close-alert')"></button>
    </div>
</template>

<style lang="scss" scoped></style>