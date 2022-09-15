<template>
  <div class="container">
    <div class="link-element" v-for="link in links" :key="link.id">
      <p class="original-link">{{ link.original }}</p>
      <div class="row-div">
        <p class="shorten-link">{{ link.shorten }}</p>
        <div class="buttons">
          <button
            :id="`copy-btn-${link.id}`"
            @click="copyShortenLink(link.id, link.shorten)"
            class="copy-btn"
          >
            Copy
          </button>
          <button @click="removeLinkFromList(link.id)" class="remove-btn">
            X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [],
    };
  },
  methods: {
    getItemsFromLocalStorage() {
      JSON.parse(localStorage.getItem("links")) === null
        ? (this.links = [])
        : (this.links = JSON.parse(localStorage.getItem("links")));
    },
    removeLinkFromList(id) {
      const itemsWithoutRemoved = this.links.filter((item) => item.id !== id);
      localStorage.setItem("links", JSON.stringify(itemsWithoutRemoved));
      this.getItemsFromLocalStorage();
    },
    setCopiedClass(id) {
      let copyButtons = document.querySelectorAll(".copy-btn");
      let buttonToSetCopiedClass = document.getElementById(id);
      copyButtons.forEach((el) => {
        if (el.classList.contains("copied")) {
          el.classList.remove("copied");
          el.textContent = "Copy";
        }
      });

      buttonToSetCopiedClass.classList.add("copied");
      buttonToSetCopiedClass.textContent = "Copied!";
    },
    copyShortenLink(id, shorten) {
      try {
        window.navigator.clipboard.writeText(shorten);
        // console.log(event);
        this.setCopiedClass(`copy-btn-${id}`);
        // let btn = document.getElementById();
        // btn.style.backgroundColor = "rgb(59, 48, 84)";
        // btn.textContent = "Copied!";
      } catch (e) {
        alert("Whoops, something went wrong :/");
      }
    },
  },
  mounted() {
    this.getItemsFromLocalStorage();
  },
};
</script>

<style lang="scss" scoped>
.link-element {
  background: white;
  overflow: hidden;
  margin: 1.5rem 0;
  transition: 0.3s ease all;
  border-radius: 12px;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: 0.4s showUp ease-in-out;
  .original-link {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0.5rem 0;
    font-size: 0.9rem;
  }
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background: rgba($color: rgb(158, 154, 167), $alpha: 0.2);
    width: 100%;
    top: 60px;
    right: 0;
    left: 0;
    margin: auto;
  }
  .shorten-link {
    padding: 0.5rem 0;
    color: var(--cyan);
    font-size: 0.9rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    .copy-btn {
      width: 100%;
      margin: 0.5rem 0;
      border-radius: 10px;
      font-size: 0.9rem;
    }

    .remove-btn {
      // width: 25px;
      margin: 0 0.5rem;
      border-radius: 10px;
      // text-align: center;/@at-rootdis
      display: grid;
      place-items: center;
      font-size: 0.9rem;
      background: var(--red);

      &:hover {
        background: var(--red-hovered);
      }
    }
  }
  .copied {
    background: var(--dark-violet);
  }
  @media (min-width: 650px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    &::after {
      display: none;
    }

    .original-link {
      width: 50%;
    }

    .row-div {
      display: flex;
      justify-content: center;
      align-items: center;

      .copy-btn {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 1.2rem;
      }

      .remove-btn {
        width: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.2rem;
      }
    }
  }
}
</style>