<template>
  <footer class="footer footer-light footer-static">
    <p class="clearfix mb-0">
      <span class="float-md-left d-block d-md-inline-block mt-25">
        COPYRIGHT © 2022
        <nuxt-link to="" rel="noopener" target="_blank" class="ml-25">
          Pixinvent
        </nuxt-link>
        <span class="d-none d-sm-inline-block">, All rights Reserved</span>
      </span>
      <span class="float-md-right d-none d-md-block">
        Hand-crafted &amp; Made with
        <heart-icon size="1.5x" class="custom-class"></heart-icon>
      </span>
    </p>
  </footer>
</template>

<script>
import { HeartIcon } from "vue-feather-icons";

export default {
  components: {
    HeartIcon,
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1199.98px) {
  .footer {
    margin-left: 0 !important;
  }
}
</style>
