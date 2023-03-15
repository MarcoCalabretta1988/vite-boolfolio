<script>
export default {
    name: 'AppPaginator',
    props: {
        links: Array,
    },
    emits: ['change-page'],
    data: () => ({

    })
}
</script>

<template>
    <ul class="pagination d-flex justify-content-center">
        <li v-for="link in links" :key="link.label" class="page-item"
            :class="[{ 'active': link.active }, { 'disabled': !link.url }]">
            <button type="button" class="page-link" @click="$emit('change-page', link.url)" v-html="link.label"
                :disabled="!link.url"></button>
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>