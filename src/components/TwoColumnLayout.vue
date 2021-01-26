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
        flex-direction: column;
        width: 100%;
        background-color: #ebebeb;
    }

    .left-layout {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 2rem 0;
        height: 400px;
    }

    .right-layout {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 2rem 0;
        height: 400px;
    }

        @media (min-width:320px) { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }

@media (min-width:480px) { /* smartphones, Android phones, landscape iPhone */ }

@media (min-width:600px) { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }

@media (min-width:801px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }

 /* big landscape tablets, laptops, and desktops */ 
@media (min-width:1025px) {
    .layout-container {
        flex-direction: row;
    }

    .right-layout {
        width: 50%;
    }

    .left-layout {
        width: 50%;
    }
}

@media (min-width:1281px) { /* hi-res laptops and desktops */ }

</style>