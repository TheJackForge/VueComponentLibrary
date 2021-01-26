<template>
    <div class="layout-container">
        <div class="left-layout">
            <h2>Layouts</h2>
            <router-link :to="{ name: 'TwoColumnLayout' }">Two Column Layout</router-link>
            <h2>Landing Pages</h2>
            <router-link :to="{ name: 'LandingPage001' }">Landing Page 001</router-link>
        </div>
        <div class="right-layout">
            <h2>Navigation</h2>
            <router-link :to="{ name: 'BurgerMenu001' }">Slide Down Burger Menu</router-link>
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
        flex-direction: column;
        align-items: center;
        width: 100%;
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
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 2rem 0;
    }

    .right-layout h2 {
        margin: 1rem 0;
        font-weight: 600;
    }

    .right-layout a {
        text-decoration: none;
        color: black;
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