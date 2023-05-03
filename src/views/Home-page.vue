<template>
  <main class="mt-0 main-content">
    <section>
      <header data-test-id="page-header" class="page-header light">
        <div class="page-header__content">
          <a href="" data-test-id="page-header-logo" title="GetYourGuide" class="page-header__logo-link">
            <div role="img" aria-label="GetYourGuide logo" class="gyg-logo page-header__logo-image"></div>
          </a>
          <nav data-test-id="page-header-nav" class="navigation page-header__navigation light">
            <ul class="navigation__list">
              <li class="navigation__list-item-parent item__sign-up"><button type="button"
                  data-test-id="header-signup-link"
                  class="gtm-trigger__header--sign-up-btn c-button c-button--medium c-button--filled-standard">
                  Sign up
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div class="search-container container">
        <div
          class="search-container__searchbar-datepicker-wrapper search-container__searchbar-datepicker-wrapper--srp-to-trip-item-experiment">
          <div class="search-autocomplete autocomplete-improvements">
            <section class="autocomplete-search-box">
              <div title="Where are you going?" data-test-id="search-box"
                class="search-box js-search-box search-box__modal">
                <div class="form-group form-control-input">
                  <div
                    class="c-input c-input--has-value autocomplete-improvements__input search-box-field js-search-box-field">
                    <span class="c-input__icon c-input__icon--preicon">
                      <span class="c-icon autocomplete-improvements__search-icon"><svg>
                          <use xlink:href="#c-search-magnifier"></use>
                        </svg> <!----></span>
                    </span>
                    <div class="c-input__container"><!----> 
                      <input 
                      v-model="query"
                      @input="handleInput"
                      @keydown.up="handleUpArrow"
                      @keydown.down="handleDownArrow"
                      @keydown.enter="handleEnter"
                      placeholder="Bạn muốn đi đâu?" 
                      autocomplete="off" 
                      name="q" 
                      required="required" 
                      type="text"
                      class="c-input__field">
                      </div> 

                      <ul v-if="results.length > 0">
                        <li
                          v-for="(result, index) in results"
                          :key="index"
                          :class="{ active: index === selectedIndex }"
                          @mouseenter="selectedIndex = index"
                          @click="handleResultClick(result)"
                        >
                          {{ result }}
                        </li>s
                      </ul>
                  </div>
                </div>
                <div class="form-group autocomplete-improvements__search-button-container"><button type="button"
                    data-test-id="search-box-submit" title="Search"
                    class="autocomplete-improvements__search-button c-button c-button--medium c-button--filled-standard"><!---->
                    Search
                  </button></div>
              </div>
              <section data-v-ded5c3be="" class="gyg-container autocomplete-panel autocomplete-panel__desktop"
                style="display: none;">
                <div data-v-ded5c3be="" class="gyg-row">
                  <div data-v-ded5c3be="" class="gyg-column gyg-column-breakpoint-sm"><!----></div>
                </div>
                <div data-v-ded5c3be="" class="gyg-row autocomplete-panel__footer">
                  <div data-v-ded5c3be="" class="gyg-column gyg-column-breakpoint-sm">
                    <footer data-v-e2eae2b6="" data-v-ded5c3be="" class="panel-footer"><!---->
                      <p data-v-e2eae2b6="" class="panel-footer__input">
                        See all results for "qe"
                      </p> <span data-v-e2eae2b6="" class="c-icon panel-footer__icon"><svg>
                          <use xlink:href="#c-arrow-right"></use>
                        </svg> <!----></span>
                    </footer>
                  </div>
                </div>
              </section>
            </section> <!---->
          </div>
        </div>
      </div>

      <!-- Result Search Items -->

      <div class="trip-item-activities-desktop__activities-container container" data-v-55e9e816="">
        <div class="trip-item-activities-desktop__activities-container-content" data-v-55e9e816="">
          <section hide-breadcrumps-s-r-p="true" class="search-header" data-v-b8e8af1c="" data-v-55e9e816=""><!---->
            <!----> <!---->
            <div class="search-header-query" data-v-b8e8af1c="">
              <div class="search-header__left" data-v-b8e8af1c="">
                <div data-v-b8e8af1c="">
                  <h1 data-test-id="search-query" class="search-title search-title-experiment">
                    "e2e"
                  </h1> <!---->
                </div>
                <div class="search-header__left__data-wrapper" data-v-b8e8af1c="">
                  <div data-test-id="search-results-count" class="search-header__left__data-wrapper__count"
                    data-v-b8e8af1c="">
                    307 activities found
                  </div> <!---->
                  <div id="tooltip-127" class="tooltip" data-v-1b89c8d3="" data-v-b8e8af1c=""><button aria-label="Info"
                      aria-describedby="tooltip-127" class="tooltip__button" data-v-1b89c8d3=""><span
                        class="c-icon tooltip__icon" data-v-1b89c8d3=""><svg>
                          <use xlink:href="#c-info-in-circle"></use>
                        </svg> <!----></span></button>
                    <div role="tooltip" class="tooltip__card" data-v-1b89c8d3=""><small data-v-1b89c8d3=""
                        data-v-b8e8af1c="">
                        <h1 data-v-1b89c8d3="" data-v-b8e8af1c="">
                          How GetYourGuide ranks activities
                        </h1>
                        <p data-v-1b89c8d3="" data-v-b8e8af1c="">Activities on the GetYourGuide marketplace are ranked by
                          a combination of factors including popularity, diversity, availability, customer rating,
                          cancellation rate, performance over time, and amount of revenue generated.</p>
                      </small></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="trip-item-pagination trip-item-activities-desktop__activities-container__pagination"
            data-v-55e9e816="">
            <div class="trip-item-activities-desktop__activities-container__list" data-v-55e9e816="">
              <ul use-new-activity-cards="" class="activity-card-container activity-card-container_vertical"
                data-v-359450d4="" data-v-55e9e816="">
                <li key="0" class="list-element" style="height:inherit;" data-v-359450d4="">
                  <div style="display:contents;" data-v-359450d4="">
                    <article data-test-id="vertical-activity-card" class="vertical-activity-card" data-v-359450d4="">
                      <div class="vertical-activity-card__content-wrapper"><a
                          href="https://www.getyourguide.com/cassino-l87573/cassino-soft-rafting-t449340/"
                          role="contentinfo" data-activity-id="449340" target="_blank"
                          class="vertical-activity-card__container gtm-trigger__card-interaction">
                          <div class="vertical-activity-card__top-wrapper">
                            <div class="vertical-activity-card__top">
                              <div class="vertical-activity-card__photo">
                                <picture>
                                  <source srcset="https://cdn.getyourguide.com/img/tour/6406521dd172e.jpeg/132.webp"
                                    type="image/webp" fetchpriority="auto"> <img
                                    src="https://cdn.getyourguide.com/img/tour/6406521dd172e.jpeg/132.jpg"
                                    alt="Cassino: Soft Rafting" fetchpriority="auto">
                                </picture>
                              </div> <!---->
                            </div>
                            <header class="vertical-activity-card__header">
                              <div class="vertical-activity-card__activity-type-wrapper"><span
                                  data-test-id="activity-category"
                                  class="vertical-activity-card__activity-type c-classifier-badge">
                                  Water activity
                                </span></div>
                              <p data-test-id="activity-card-title" class="vertical-activity-card__title">
                                Cassino: Soft Rafting
                              </p> <!---->
                            </header>
                            <div class="vertical-activity-card__body">
                              <ul class="activity-attributes__container" >
                                <li class="activity-attributes__attribute" >
                                  <span>
                                    <span class="">2 hours</span>
                                  </span>
                              </li>
                              <li class="activity-attributes__attribute" >
                                  <span>
                                    <span class="">2 hours</span>
                                  </span>
                              </li>
                            </ul> <span class="vertical-activity-card__badges"><!----> <!----> <!---->
                            
                            </span>
                          </div>
                        </div>
                        <div class="vertical-activity-card__details">
                          <footer class="vertical-activity-card__footer align-right"><!---->
                            <div class="baseline-pricing" data-v-24caa43d="">
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
                            </div>
                          </footer>
                          <div class="vertical-activity-card__bottom"><!----></div>
                        </div>
                      </a>
                      <div class="vertical-activity-card__wishlist">
                        <div data-test-id="add-to-wishlist" class="wishlist-icon"><span
                            class="wishlist-icon__heart"></span> </div>
                      </div>
                    </div>
                  </article>
                </div>
                </li>
                <li key="0" class="list-element" style="height:inherit;" data-v-359450d4="">
                  <div style="display:contents;" data-v-359450d4="">
                    <article data-test-id="vertical-activity-card" class="vertical-activity-card" data-v-359450d4="">
                      <div class="vertical-activity-card__content-wrapper"><a
                          href="https://www.getyourguide.com/cassino-l87573/cassino-soft-rafting-t449340/"
                          role="contentinfo" data-activity-id="449340" target="_blank"
                          class="vertical-activity-card__container gtm-trigger__card-interaction">
                          <div class="vertical-activity-card__top-wrapper">
                            <div class="vertical-activity-card__top">
                              <div class="vertical-activity-card__photo">
                                <picture>
                                  <source srcset="https://cdn.getyourguide.com/img/tour/6406521dd172e.jpeg/132.webp"
                                    type="image/webp" fetchpriority="auto"> <img
                                    src="https://cdn.getyourguide.com/img/tour/6406521dd172e.jpeg/132.jpg"
                                    alt="Cassino: Soft Rafting" fetchpriority="auto">
                                </picture>
                              </div> <!---->
                            </div>
                            <header class="vertical-activity-card__header">
                              <div class="vertical-activity-card__activity-type-wrapper"><span
                                  data-test-id="activity-category"
                                  class="vertical-activity-card__activity-type c-classifier-badge">
                                  Water activity
                                </span></div>
                              <p data-test-id="activity-card-title" class="vertical-activity-card__title">
                                Cassino: Soft Rafting
                              </p> <!---->
                            </header>
                            <div class="vertical-activity-card__body">
                              <ul class="activity-attributes__container" >
                                <li class="activity-attributes__attribute" >
                                  <span>
                                    <span class="">2 hours</span>
                                  </span>
                              </li>
                              <li class="activity-attributes__attribute" >
                                  <span>
                                    <span class="">2 hours</span>
                                  </span>
                              </li>
                            </ul> <span class="vertical-activity-card__badges"><!----> <!----> <!---->
                            
                            </span>
                          </div>
                        </div>
                        <div class="vertical-activity-card__details">
                          <footer class="vertical-activity-card__footer align-right"><!---->
                            <div class="baseline-pricing" data-v-24caa43d="">
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
                            </div>
                          </footer>
                          <div class="vertical-activity-card__bottom"><!----></div>
                        </div>
                      </a>
                      <div class="vertical-activity-card__wishlist">
                        <div data-test-id="add-to-wishlist" class="wishlist-icon"><span
                            class="wishlist-icon__heart"></span> </div>
                      </div>
                    </div>
                  </article>
                </div>
                </li>
                <li key="0" class="list-element" style="height:inherit;" data-v-359450d4="">
                  <div style="display:contents;" data-v-359450d4="">
                    <article data-test-id="vertical-activity-card" class="vertical-activity-card" data-v-359450d4="">
                      <div class="vertical-activity-card__content-wrapper"><a
                          href="https://www.getyourguide.com/cassino-l87573/cassino-soft-rafting-t449340/"
                          role="contentinfo" data-activity-id="449340" target="_blank"
                          class="vertical-activity-card__container gtm-trigger__card-interaction">
                          <div class="vertical-activity-card__top-wrapper">
                            <div class="vertical-activity-card__top">
                              <div class="vertical-activity-card__photo">
                                <picture>
                                  <source srcset="https://cdn.getyourguide.com/img/tour/6406521dd172e.jpeg/132.webp"
                                    type="image/webp" fetchpriority="auto"> <img
                                    src="https://cdn.getyourguide.com/img/tour/6406521dd172e.jpeg/132.jpg"
                                    alt="Cassino: Soft Rafting" fetchpriority="auto">
                                </picture>
                              </div> <!---->
                            </div>
                            <header class="vertical-activity-card__header">
                              <div class="vertical-activity-card__activity-type-wrapper"><span
                                  data-test-id="activity-category"
                                  class="vertical-activity-card__activity-type c-classifier-badge">
                                  Water activity
                                </span></div>
                              <p data-test-id="activity-card-title" class="vertical-activity-card__title">
                                Cassino: Soft Rafting
                              </p> <!---->
                            </header>
                            <div class="vertical-activity-card__body">
                              <ul class="activity-attributes__container" >
                                <li class="activity-attributes__attribute" >
                                  <span>
                                    <span class="">2 hours</span>
                                  </span>
                              </li>
                              <li class="activity-attributes__attribute" >
                                  <span>
                                    <span class="">2 hours</span>
                                  </span>
                              </li>
                            </ul> <span class="vertical-activity-card__badges"><!----> <!----> <!---->
                            
                            </span>
                          </div>
                        </div>
                        <div class="vertical-activity-card__details">
                          <footer class="vertical-activity-card__footer align-right"><!---->
                            <div class="baseline-pricing" data-v-24caa43d="">
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
                            </div>
                          </footer>
                          <div class="vertical-activity-card__bottom"><!----></div>
                        </div>
                      </a>
                      <div class="vertical-activity-card__wishlist">
                        <div data-test-id="add-to-wishlist" class="wishlist-icon"><span
                            class="wishlist-icon__heart"></span> </div>
                      </div>
                    </div>
                  </article>
                </div>
                </li>
                <li key="0" class="list-element" style="height:inherit;" data-v-359450d4="">
                  <div style="display:contents;" data-v-359450d4="">
                    <article data-test-id="vertical-activity-card" class="vertical-activity-card" data-v-359450d4="">
                      <div class="vertical-activity-card__content-wrapper"><a
                          href="https://www.getyourguide.com/cassino-l87573/cassino-soft-rafting-t449340/"
                          role="contentinfo" data-activity-id="449340" target="_blank"
                          class="vertical-activity-card__container gtm-trigger__card-interaction">
                          <div class="vertical-activity-card__top-wrapper">
                            <div class="vertical-activity-card__top">
                              <div class="vertical-activity-card__photo">
                                <picture>
                                  <source srcset="https://cdn.getyourguide.com/img/tour/6406521dd172e.jpeg/132.webp"
                                    type="image/webp" fetchpriority="auto"> <img
                                    src="https://cdn.getyourguide.com/img/tour/6406521dd172e.jpeg/132.jpg"
                                    alt="Cassino: Soft Rafting" fetchpriority="auto">
                                </picture>
                              </div> <!---->
                            </div>
                            <header class="vertical-activity-card__header">
                              <div class="vertical-activity-card__activity-type-wrapper"><span
                                  data-test-id="activity-category"
                                  class="vertical-activity-card__activity-type c-classifier-badge">
                                  Water activity
                                </span></div>
                              <p data-test-id="activity-card-title" class="vertical-activity-card__title">
                                Cassino: Soft Rafting
                              </p> <!---->
                            </header>
                            <div class="vertical-activity-card__body">
                              <ul class="activity-attributes__container" >
                                <li class="activity-attributes__attribute" >
                                  <span>
                                    <span class="">2 hours</span>
                                  </span>
                              </li>
                              <li class="activity-attributes__attribute" >
                                  <span>
                                    <span class="">2 hours</span>
                                  </span>
                              </li>
                            </ul> <span class="vertical-activity-card__badges"><!----> <!----> <!---->
                            
                            </span>
                          </div>
                        </div>
                        <div class="vertical-activity-card__details">
                          <footer class="vertical-activity-card__footer align-right"><!---->
                            <div class="baseline-pricing" data-v-24caa43d="">
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
                            </div>
                          </footer>
                          <div class="vertical-activity-card__bottom"><!----></div>
                        </div>
                      </a>
                      <div class="vertical-activity-card__wishlist">
                        <div data-test-id="add-to-wishlist" class="wishlist-icon"><span
                            class="wishlist-icon__heart"></span> </div>
                      </div>
                    </div>
                  </article>
                </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</main></template>

<script>
const body = document.getElementsByTagName("body")[0];

export default {
  name: "home-page",
  components: {
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      query: "",
      results: [],
      selectedIndex: -1,
    }
  },
  methods: {
    async handleInput() {
      if (this.query === "") {
        this.results = [];
        this.selectedIndex = -1;
        return;
      }
      try {
        // const response = await fetch(`https://api.example.com/search?q=${this.query}`);
        const response = await fetch(`http://localhost:8080/api/search?query=${this.query}l&city=&province=&interests=ABC&interests=SEA`);
        const results = await response.json();
        this.results = results;
        this.selectedIndex = -1;
      } catch (error) {
        console.log(error);
      }
    },
    handleUpArrow() {
      if (this.selectedIndex > 0) {
        this.selectedIndex--;
      }
    },
    handleDownArrow() {
      if (this.selectedIndex < this.results.length - 1) {
        this.selectedIndex++;
      }
    },
    handleEnter() {
      if (this.selectedIndex === -1) {
        return;
      }
      const result = this.results[this.selectedIndex];
      this.handleResultClick(result);
    },
    handleResultClick(result) {
      this.query = result;
      this.results = [];
      this.selectedIndex = -1;
      // Do something with the selected result
    },
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>

<style>.error {
  color: red;
}

@import '../../src/assets/css/style.css';


.checked {
  color: orange;
}
</style>
