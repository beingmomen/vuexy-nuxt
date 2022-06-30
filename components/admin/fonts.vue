<template>
  <div>
    <template v-if="dashDirection == 'rtl'">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
        rel="stylesheet"
      />
    </template>

    <style v-if="dashDirection == 'rtl'">
      html,
      body,
      .text-truncate {
        font-family: "Almarai", sans-serif !important;
      }
    </style>
    <style v-if="dashDirection == 'ltr'">
      html,
      body,
      .text-truncate {
        font-family: "Roboto", sans-serif !important;
      }
    </style>
  </div>
</template>

<script>
export default {
  name: "adminfonts",
};
</script>

<style lang="scss">
</style>