<template>
  <div
    class="
      container
      d-flex
      justify-content-center
      align-items-center
      flex-column
    "
  >
    <p class="fs-1 fw-bold">Landing Page</p>
    <b-button variant="primary">
      <nuxt-link to="/dashboard" class="text-white">Dashboard</nuxt-link>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>


<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>