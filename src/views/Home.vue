<template>
  <div class="hero-image">
    <img src="../assets/img/vue-logo.png">
    <h1>Vue Component Library</h1>
  </div>
  <VCPTwoColumnLayout />
</template>

<script>
import VCPTwoColumnLayout from '../components/VCPTwoColumnLayout.vue'

export default {
  name: 'Home',
  components: { VCPTwoColumnLayout }
}
</script>

<style scoped>
.hero-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 100%;
  background-color: rgba(221,221,221);
}

.hero-image img {
  height: 60%;
  margin: 50px auto;
}
</style>