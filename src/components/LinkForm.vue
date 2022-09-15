<template>
  <div class="container">
    <form @submit.prevent="shortLink" class="link-form">
      <input
        class="link-input"
        type="text"
        v-model="link"
        placeholder="Shorten a link here..."
      />
      <p v-show="showErrorState" class="error">Please add a link</p>
      <button class="shorten-btn">Shorten It!</button>

      <picture>
        <source
          srcset="../assets/bg-shorten-desktop.svg"
          media="(min-width: 375px)"
        />
        <img src="../assets/bg-shorten-mobile.svg" alt="" />
      </picture>
    </form>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
export default {
  data() {
    return {
      showErrorState: false,
      link: "",
    };
  },
  methods: {
    showError() {
      let input = document.querySelector(".link-input");
      input.classList.add("input-error");
      this.showErrorState = true;
    },
    hideError() {
      let input = document.querySelector(".link-input");
      input.classList.forEach((el) => {
        if (el === "input-error") {
          input.classList.remove("input-error");
          this.showErrorState = false;
        }
      });
    },
    setId(list) {
      let idList = [];
      list.forEach((el) => {
        idList.push(el.id);
      });

      return Math.max(...idList) + 1;
    },
    saveLink(shorten) {
      let storedLinks;
      let id;

      JSON.parse(localStorage.getItem("links")) === null
        ? (storedLinks = [])
        : (storedLinks = JSON.parse(localStorage.getItem("links")));

      storedLinks.length === 0 ? id = 0 : id = this.setId(storedLinks)

      let linkToStore = {
        id: id,
        original: this.link,
        shorten: shorten,
      };

      storedLinks.push(linkToStore);

      localStorage.setItem("links", JSON.stringify(storedLinks));
    },
    shortLink() {
      // console.log("short")
      if (this.link.length === 0) {
        // console.log("PUSTY LINK")
        this.showError();
      } else {
        this.hideError();
        ApiService.shortLink(this.link)
          .then((res) => {
            this.saveLink(res.data.result.full_short_link3);
            this.$emit("updateShortenList", true);
          })
          .catch((e) => {
            console.error(e);
            alert("Whoops, this link is not valid. Try with other one ;)");
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  //   position: relative;
  form {
    background: var(--dark-violet);
    padding: 1rem;
    position: relative;
    z-index: 0;
    border-radius: 12px;
    overflow: hidden;

    p {
      display: none;
    }
    .link-input {
      z-index: 2;
      // margin-bottom: 1rem;
      border-radius: 8px;
      padding: 0.8rem;
      font-size: 0.9rem;
      outline: none;
      border: none;
      width: 100%;
    }

    .shorten-btn {
      margin-top: 1.5rem;
      z-index: 5;
      width: 100%;
      border-radius: 10px;
      font-size: 0.9rem;
    }
    picture {
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
      @media (min-width: 375px) {
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        img {
          // object-fit: cover;
          width: 100%;
        }
      }
    }

    .error {
      display: block;
      color: var(--red);
      margin-top: 0.5rem;
      font-style: italic;
      font-size: 14px;
    }

    .input-error {
      outline: 4px solid var(--red);
      &::placeholder {
        color: var(--red);
      }
    }
  }
}
</style>