<template>
  <div>
    <div
      v-show="loading"
      class="
        vertical-layout
        h-100
        vertical-menu-modern
        navbar-floating
        footer-static
      "
      :class="{
        'menu-expanded': makeLayoutCollapsed,
        'menu-collapsed': !makeLayoutCollapsed,
        'menu-hide': window.width <= 1200,
        'menu-open': toggleSidebar,
      }"
    >
      <DashboardNavbar :width="window.width" />
      <DashboardSidebar :width="window.width" />
      <div class="sidenav-overlay"></div>
      <Nuxt />
      <DashboardFooter />
    </div>
    <div v-show="!loading" class="flower-spinner">
      <div class="dots-container">
        <div class="bigger-dot">
          <div class="smaller-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { FlowerSpinner } from "epic-spinners";
export default {
  middleware: "mode",
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();

    setTimeout(() => {
      this.loading = true;
    }, 2000);
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      loading: false,
    };
  },
  computed: {},
  components: {
    // FlowerSpinner,
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style lang="scss">
@import "/assets/scss/spinner";
@import "/@core/scss/base/core/menu/menu-types/vertical-menu.scss";
// @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
// body {
//   font-family: "Roboto", sans-serif;
// }
.invalid {
  input {
    border-color: #f00;
  }
  .err-msg {
    color: #f00;
  }
}
</style>
