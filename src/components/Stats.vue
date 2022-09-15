<template>
  <div class="container">
    <div class="headline">
      <h3>Advanced Statistics</h3>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
    </div>

    <div class="cards">
      <Card
        img="1"
        class="top"
        title="Brand Recognition"
        paragraph="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
      />
      <Card
        img="2"
        class="center"
        title="Detailed Records"
        paragraph="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
      />
      <Card
        img="3"
        class="bottom"
        title="Fully Customizable"
        paragraph="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  components: { Card },
};
</script>

<style lang="scss" scoped>
.container {
  .headline {
    text-align: center;
    margin-bottom: 3rem;
    h3 {
      font-size: 1.4rem;
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
  }

  .cards {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &::after {
      width: 5px;
      height: 70%;
      content: "";
      background: var(--cyan);
      position: absolute;
      top: 20%;
      right: 0;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 5;
    }
    @media (min-width: 1000px) {
      justify-content: center;
      flex-direction: row;
      height: 350px;

      &::after {
        width: 70%;
        height: 5px;
        top: 40%;
      }
      .top {
        align-self: flex-start;
      }

      .center {
        align-self: center;
      }

      .bottom {
        align-self: flex-end;
      }
    }
  }
}
</style>