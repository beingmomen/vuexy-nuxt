<template>
  <Nuxt />
</template>

<script>
export default {
  middleware: ["login", "mode", "lang"],
};
</script>
