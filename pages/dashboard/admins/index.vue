<template>
  <div class="app-content content">
    <TablesNormal
      :headers="tableHeader"
      :items="getListForAllAdmins"
      :module="module"
      @changePage="changePage"
      @deleteItem="deleteItem"
    >
      <template v-slot:filters>
        <b-col md="3" class="my-1">
          <FormSelect
            :title="$t('inputs.city')"
            label="name"
            storeKey="City"
            :clearable="true"
            :module="module"
            :placeHolder="$t('inputs.all')"
            :allData="getListForAllGovernorates"
            lg="12"
            md="12"
          />
        </b-col>
        <b-col md="3" class="my-1">
          <FormSelect
            :title="$t('inputs.area')"
            label="name"
            storeKey="Area"
            :clearable="true"
            :module="module"
            :placeHolder="$t('inputs.all')"
            :allData="getListForAllAreas"
            lg="12"
            md="12"
          />
        </b-col>
        <b-col md="6" class="my-1">
          <FormSearch
            :title="$t('inputs.search')"
            storeKey="Search"
            :module="module"
            lg="12"
            md="12"
          />
        </b-col>
      </template>
    </TablesNormal>
  </div>
</template>

<script>
export default {
  layout: "admin",
  name: "admins",
  async asyncData({ $axios, store }) {
    await $axios
      .$get(`/admins`)
      .then((res) => {
        store.dispatch("admin/admins/getAllDataFromApi", res);
      })
      .catch((err) => store.dispatch("handleError", err.response.data.errors));

    await $axios
      .$get(`/cities/list`)
      .then((res) => {
        store.dispatch("admin/governorates/getAllDataFromApi", res);
      })
      .catch((err) => store.dispatch("handleError", err.response.data.errors));

    await $axios
      .$get(`/areas/list`)
      .then((res) => {
        store.dispatch("admin/areas/getAllDataFromApi", res);
      })
      .catch((err) => store.dispatch("handleError", err.response.data.errors));
    return {};
  },
  data() {
    return {
      module: "admin/admins",
      tableHeader: [
        {
          key: "name",
          label: this.$t("tables.name"),
          sortable: false,
        },
        {
          key: "phone",
          label: this.$t("tables.phone"),
          sortable: false,
        },
        {
          key: "city.name",
          label: this.$t("tables.city"),
          sortable: false,
        },
        {
          key: "address",
          label: this.$t("tables.address"),
          sortable: false,
        },
        {
          key: "email",
          label: this.$t("tables.email"),
          sortable: false,
        },
        {
          key: "actions",
          label: this.$t("tables.actions"),
          sortable: false,
        },
      ],
    };
  },
  methods: {
    changePage(page) {
      this.$store.dispatch(`${this.module}/refreshData`, page);
    },
    deleteItem(id) {
      this.$store.dispatch(`${this.module}/deleteFromDB`, id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>