<template>
<div class="services-container">
    <div class="services-001c-spacer-left"></div>
  <div class="services-001c-left">
      <div class="services-001c-features-list">
      <h3 class="services-001c-features-header">Features</h3>
      <p>Great Coffee (Of course!)</p>
      <p>Outstanding Menu Options</p>
      <p>Free WiFi</p>
      <p>Dedicated Group Work Areas</p>
      <p>Open Late on Weekends</p>
      </div>
  </div>
  <div class="services-001c-right">
      <img src="../assets/img/coffee-shop-008.jpg">
  </div>
</div>  
</template>

<script>
export default {

}
</script>

<style>

.services-container {
    font-family: 'Roboto', sans-serif;
    background-color: rgb(238, 238, 238);
    display: flex;
    width: 100%;
    justify-content: center;
    padding-bottom: 6rem;
}

.services-001c-spacer-left {
    width: 10%;
    background-color: rgb(238, 238, 238);
}

.services-001c-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    background-color: black;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    color: rgb(238, 238, 238);
    line-height: 1.5;
}

.services-001c-features-list {
    margin-left: 7rem;
    margin-right:7rem;
}

.services-001c-features-list h3 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 1rem;
    border-bottom: 1px solid white;
}

.services-001c-features-list p {
    font-size: 1.2rem;
    font-weight: 100;
}

.services-001c-right {
    width: 50%;
    background-color: black;
}

.services-001c-right img {
    width: 100%;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-left: 12px solid rgb(238, 238, 238)
}

</style>