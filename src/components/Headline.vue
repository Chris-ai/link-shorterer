<template>
  <div class="container">
    <div class="primary-image">
      <img src="../assets/illustration-working.svg" alt="ilustration" />
    </div>
    <div class="headline">
      <h1>More than just <br />shorter links</h1>
      <p>
        Build your brand’s recognition and get detailed <br />
        insights on how your links are performing.
      </p>

      <button @click="$emit('goToForm')">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 0;
  .primary-image {
    margin-bottom: 1rem;

    img {
      height: 400px;
      transition: 0.3s ease-in-out;

      @media (max-width: 500px) {
        height: 350px;
      }
      @media (max-width: 375px) {
        height: 300px;
      }
    }
  }

  .headline {
    text-align: center;
    h1 {
      font-size: 2rem;
      line-height: 1.2;
      color: var(--very-dark-blue);
      transition: 0.3s ease-in-out;
    }

    p {
      color: var(--grayish-violet);
      line-height: 1.5;
      margin: 1rem 0;
      transition: 0.3s ease-in-out;
    }

    button {
      margin: 1rem 0;
      transition: 0.3s ease-in-out;
    }
  }

  @media (min-width: 650px) {
    overflow: visible;
    flex-direction: row-reverse;
    .primary-image {
      width: 50%;
      margin-bottom: 0;
      img {
        height: 300px;
      }
    }
    .headline {
      width: 50%;
      justify-self: flex-start;
      h1 {
        font-size: 1.4rem;
      }
      p {
        font-size: 0.7rem;
      }
      padding: 1rem;
      text-align: start;
    }
  }

  @media (min-width: 800px) {
    .primary-image {
      img {
        height: 400px;
      }
    }
    .headline {
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 0.8rem;
      }
      padding: 1rem;
      text-align: start;
    }
  }
  @media (min-width: 1200px) {
    .primary-image {
      width: 40%;
      img {
        height: 500px;
      }
    }
    .headline {
      width: 60%;
      h1 {
        font-size: 4rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
}
</style>