<template>
  <div class="fixed-plugin">
    <a
      class="px-3 py-2 fixed-plugin-button text-dark position-fixed"
      @click="toggle"
    >
      <i class="py-2 fa fa-cog"></i>
    </a>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { activateDarkMode, deactivateDarkMode } from "@/assets/js/dark-mode";
export default {
  name: "configurator",
  props: ["toggle"],
  methods: {
    ...mapMutations(["navbarMinimize", "sidebarType", "navbarFixed"]),
    sidebarColor(color = "success") {
      document.querySelector("#sidenav-main").setAttribute("data-color", color);
      this.$store.state.mcolor = `card-background-mask-${color}`;
    },
    sidebarType(type) {
      this.$store.state.sidebarType = type;
    },
    setNavbarFixed() {
      if (
        this.$route.name !== "Profile" ||
        this.$route.name !== "All Projects"
      ) {
        this.$store.state.isNavFixed = !this.$store.state.isNavFixed;
      }
    },
    setDarkMode() {
      if (this.$store.state.darkMode) {
        this.$store.state.darkMode = false;
        this.$store.state.sidebarType = "bg-white";
        deactivateDarkMode();
        return;
      } else {
        this.$store.state.darkMode = true;
        this.$store.state.sidebarType = "bg-default";
        activateDarkMode();
      }
    },
    sidenavTypeOnResize() {
      let white = document.querySelector("#btn-white");
      if (window.innerWidth < 1200) {
        white.classList.add("disabled");
      } else {
        white.classList.remove("disabled");
      }
    }
  },
  computed: {
    sidenavResponsive() {
      return this.sidenavTypeOnResize;
    }
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
    window.addEventListener("resize", this.sidenavTypeOnResize);
    window.addEventListener("load", this.sidenavTypeOnResize);
  }
};
</script>
