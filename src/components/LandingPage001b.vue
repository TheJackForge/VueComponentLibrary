<template>
  <div class="landing-page-001b-container">
        <div class="landing-page-001b-left-side">
            <div landing-page-text>
                <h1>Introducing the new Apple iPhone</h1>
                <p>Stay in touch with the world at the speed of 5G</p>
                <div class="button-container">
                    <button class="button-1">Details</button>
                    <button class="button-2">Pre-order</button>
                </div>
            </div>
            <img src="../assets/img/iphone-landing-page-photo-001.png">
        </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

.landing-page-001b-container {
    font-family: 'Roboto', sans-serif;
    background-color: rgb(238, 238, 238);
    display: flex;
    width: 100%;
    justify-content: center;
}

.landing-page-001b-left-side {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: black;
    height: 800px;
    width: 70%;
}

.landing-page-001b-left-side h1 {
    font-size: 4rem;
    font-weight: 400;
}

.landing-page-001b-left-side p {
    font-size: 2rem;
    font-weight: 200;
    padding: 2rem 0;
}

.button-container {
    display: flex;
    justify-content: center;
}

.button-1 {
    border: none;
    background-color: rgb(34, 34, 34);
    font-size: 1.2rem;
    color: white;
    height: 50px;
    border-radius: 20px;
    width: 200px;
    margin-right: 20px;
    cursor: pointer;
}

.button-1:active {
    transform: scale(0.98);
}

.button-2 {
    border: none;
    background-color: rgb(34, 34, 34);
    font-size: 1.2rem;
    color: white;
    height: 50px;
    border-radius: 20px;
    width: 200px;
    margin-left: 20px;
    cursor: pointer;
}

.button-2:active {
    transform: scale(0.98);
}

.landing-page-001b-left-side img {
    height: 100%;
}

</style>