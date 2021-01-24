<template>
    <div class="layout-container">
        <div class="left-layout">
            <h2>Layouts</h2>
            <router-link :to="{ name: 'TwoColumnLayout' }">Two Column Layout</router-link>
            <h2>Landing Pages</h2>
        </div>
        <div class="right-layout">
            <h2>Navigation</h2>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .layout-container {
        display: flex;
        width: 100%;
        background-color: #ebebeb;
    }

    .left-layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        padding: 2rem 0;
    }

    .left-layout h2 {
        margin: 1rem 0;
        font-weight: 600;
    }

    .left-layout a {
        text-decoration: none;
        color: black;
    }

    .right-layout {
        display: flex;
        justify-content: center;
        width: 50%;
        padding: 2rem 0;
    }

    .right-layout h2 {
        margin: 1rem 0;
        font-weight: 600;
    }
</style>