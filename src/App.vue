<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <Navigation />
        <Headline @goToForm="scrollToForm" />
      </header>

      <main>
        <LinkForm id="form" @updateShortenList="updateShortenLinksList" />
        <ShortenLinksList :key="componentKey" />
        <Stats />
        <div class="violet-background"></div>
      </main>
    </div>
    <BoostLinks @goToForm="scrollToForm" />
    <footer><Footer /></footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Headline from "@/components/Headline.vue";
import LinkForm from "@/components/LinkForm.vue";
import ShortenLinksList from "@/components/ShortenLinksList.vue";
import Stats from "@/components/Stats.vue";
import BoostLinks from "@/components/BoostLinks.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      componentKey: 0,
    };
  },
  components: {
    Navigation,
    Headline,
    LinkForm,
    ShortenLinksList,
    Stats,
    BoostLinks,
    Footer,
  },
  methods: {
    updateShortenLinksList() {
      this.componentKey += 1;
    },
    scrollToForm() {
      // console.log('transd')
      const element = document.getElementById("form");
      element.scrollIntoView();
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  --cyan: rgb(41, 199, 199);
  --cyan-hovered: rgb(41, 199, 199, 0.7);
  --dark-violet: rgb(59, 48, 84);

  --red: rgb(244, 98, 98);
  --red-hovered: rgba(244, 98, 98, 0.7);

  --gray: rgb(191, 191, 191);
  --grayish-violet: rgb(158, 154, 167);
  --very-dark-blue: rgb(53, 50, 62);
  --very-dark-biolet: rgb(35, 33, 39);

  --fw-regular: 500;
  --fw-bold: 700;

  font-size: 18px;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}
body {
  display: grid;
  place-items: center;
}
#app {
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  overflow: hidden;
  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
  }
}

.container {
  padding: 1rem;
  // max-width: 1200px;
}
main {
  position: relative;
  .violet-background {
    width: 100vw;
    height: 100%;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 100px;
    background: rgba(158, 154, 167, 0.2);
    z-index: -2;
    @media (min-width: 1200px) {
      width: 5000px;
      left: -100%;
    }
  }
}
button {
  background: var(--cyan);
  padding: 0.5rem 2rem;
  color: #fff;
  border: none;
  border-radius: 50em;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #fff;
    background: var(--cyan-hovered);
  }
}

@keyframes rollUp {
  0% {
    opacity: 0;
    transform: translateY(-500px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes showUpFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>