<template>
    <div class="layout-container">
        <div class="left-layout">
            <h1>Left Side</h1>
        </div>
        <div class="right-layout">
            <h1>Right Side</h1>
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
        justify-content: center;
        width: 50%;
        padding: 2rem 0;
    }

    .right-layout {
        display: flex;
        justify-content: center;
        width: 50%;
        padding: 2rem 0;
    }
</style>