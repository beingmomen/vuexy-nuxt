<template>
  <div class="app-content content">
    <b-row class="do">
      <CardsStatsCard
        v-for="x in getListForAllDashboardData"
        :key="x.id"
        :value="x.value"
        :arName="x.arName"
        :enName="x.enName"
        :route="x.route"
      >
        <template v-slot:icon>
          <user-icon
            v-if="x.enName == 'admins'"
            size="1.5x"
            class="custom-class"
          ></user-icon>
          <users-icon
            v-if="x.enName == 'sellers'"
            size="1.5x"
            class="custom-class"
          ></users-icon>
          <truck-icon
            v-if="x.enName == 'drivers'"
            size="1.5x"
            class="custom-class"
          ></truck-icon>
          <flag-icon
            v-if="x.enName == 'cities'"
            size="1.5x"
            class="custom-class"
          ></flag-icon>
          <layers-icon
            v-if="x.enName == 'areas'"
            size="1.5x"
            class="custom-class"
          ></layers-icon>
          <list-icon
            v-if="x.enName == 'order statuses'"
            size="1.5x"
            class="custom-class"
          ></list-icon>
        </template>
      </CardsStatsCard>
    </b-row>
  </div>
</template>

<script>
import {
  XIcon,
  UserIcon,
  UsersIcon,
  TruckIcon,
  FlagIcon,
  LayersIcon,
  ListIcon,
} from "vue-feather-icons";
export default {
  layout: "admin",
  name: "dashboard",
  async asyncData({ $axios, store }) {
    await $axios
      .$get(`/dashboard`)
      .then((res) => {
        store.dispatch("admin/getAllDataFromApi", res);
      })
      .catch((err) => store.dispatch("handleError", err.response.data.errors));
    return {};
  },

  data() {
    return {};
  },
  components: {
    XIcon,
    UserIcon,
    UsersIcon,
    TruckIcon,
    FlagIcon,
    LayersIcon,
    ListIcon,
  },
};
</script>

<style lang="scss" scoped>
</style>
