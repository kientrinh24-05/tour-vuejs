<template>
<div class="search">
  <form class="search__form" @submit.prevent="search">
    <div class="search__wrapper">
      <input class="search__input" type="text" placeholder="Search">
      <button class="search__button" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.64 22.252l-6.098-6.098c1.25-1.558 1.998-3.514 1.998-5.654 0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.14 0 4.096-.748 5.654-1.998l6.098 6.098c.326.326.774.518 1.252.518s.926-.192 1.252-.518c.68-.68.68-1.792 0-2.472zm-14.64-12.252c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7z"/></svg>
      </button>
    </div>
  </form>
</div>
</template>

<script>
const body = document.getElementsByTagName("body")[0];
export default {
  name: "search-intro",
  data() {
    return {
      searchTerm: '',
      searchResults: []
    }
  },

  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  methods: {
    // async search() {
    //   try {
    //  //   const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_SEARCH_ENGINE_ID&q=${this.searchTerm}`);
    //     this.searchResults = response.data.items.map((item) => {
    //       return {
    //         title: item.title,
    //         description: item.snippet,
    //         link: item.link
    //       };
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    imFeelingLucky() {
      window.location.href = 'https://www.google.com/doodles/';
    }
  }
}
</script>

<style>
.search {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.search__form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search__wrapper {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
}

.search__input {
  width: 100%;
  padding: 16px 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease-in-out;
}

.search__input:focus {
  border-color: #4285f4;
  box-shadow: 0 0 0 4px rgba(66,133,244,0.2);
}

.search__button {
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: #4285f4;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
}

.search__button:hover {
  background-color: #3367d6;
}

.search__button:focus {
  box-shadow: 0 0 0 4px rgba(66,133,244,0.2);
}

</style>