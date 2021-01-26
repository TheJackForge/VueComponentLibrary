<template>
    <nav>
        <div class="nav-container">
            <div>
                <router-link class="logo-header" :to="{ name: 'BurgerMenu001' }">Burger Menu Slide Down</router-link>
            </div>
            <div>
                <button class="nav-button" @click="handleClick">
                    <div class="nav-line"></div>
                    <div class="nav-line"></div>
                    <div class="nav-line"></div>
                </button>
            </div>
            
                <ul class="desktop-nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            
        </div>
            <div class="nav-links" id="navlinks" v-if="showNav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            showNav: false,
        }
    },
    methods: {
        handleClick() {
            this.showNav = !this.showNav
        }
        
        
    }

}
</script>

<style scoped>

nav {
    background-color: #2b2b2b;
    width: 100%;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
    width: 90%;
}

.logo-header {
    font-size: 1.6rem;
    font-weight: 500;
    color: rgb(185, 185, 185);
    text-decoration: none;
    
}

.desktop-nav {
    display: none;
    margin: 0;
    list-style-type: none;
}

.desktop-nav li {
    padding: 0px 30px;
    text-decoration: none;
    color: rgb(185, 185, 185);
}

.desktop-nav a {
    text-decoration: none;
    color: rgb(34, 34, 34);
    font-size: 1.2em;
    padding: 20px 40px;
}

.nav-button {
    border: none;
    background: none;
    height: 60px;
    width: 60px;
    cursor: pointer;
}

.nav-line {
    height: 5px;
    width: 50px;
    background-color: white;
    margin: 10px auto;
}

.nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    list-style-type: none;
}

.nav-links li {
    padding: 30px 50px;
    list-style-type: none;
    text-align: center;
}

.nav-links a {
    text-decoration: none;
    color: white;
}



@media (min-width:320px) { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }

@media (min-width:480px) { /* smartphones, Android phones, landscape iPhone */ }

@media (min-width:600px) { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }

@media (min-width:801px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }

 /* big landscape tablets, laptops, and desktops */ 
@media (min-width:1025px) {
    .nav-button {
        display: none;
    }

    .nav-links {
        display: none;
    }

    .desktop-nav {
        display: flex;
    }
}

@media (min-width:1281px) { /* hi-res laptops and desktops */ }

</style>