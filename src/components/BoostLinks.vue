<template>
  <div class="container">
    <h1>Boost your links today</h1>
    <button @click="$emit('goToForm')">Get Started</button>
    <!-- <div class="backgroud-image"></div> -->

    <picture>
      <source
        srcset="../assets/bg-boost-desktop.svg"
        media="(min-width: 375px)"
      />
      <img src="../assets/bg-boost-mobile.svg" alt="" />
    </picture>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  background: var(--dark-violet);
  text-align: center;
  padding: 3rem 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  h1 {
    color: #f3f3f3;
    margin: 1rem;
    font-size: 1.5rem;
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>