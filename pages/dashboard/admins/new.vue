<template>
  <div class="app-content content">
    <b-card no-body class="card-statistics">
      <b-card-body class="statistics-body">
        <validation-observer ref="form">
          <b-row class="justify-content-between">
            <FormInput
              :label="$t('inputs.name')"
              storeKey="Name"
              :module="module"
              lg="6"
            />
            <FormInput
              :label="$t('inputs.phone')"
              storeKey="Phone"
              type="number"
              :module="module"
              lg="6"
            />
            <FormInput
              :label="$t('inputs.email')"
              storeKey="Email"
              type="email"
              :module="module"
              lg="6"
            />
            <FormInput
              :label="$t('inputs.password')"
              storeKey="Password"
              type="password"
              :module="module"
              lg="6"
            />
            <FormSelect
              :title="$t('inputs.city')"
              label="name"
              storeKey="City"
              :module="module"
              :clearable="true"
              :placeHolder="$t('inputs.all')"
              :allData="getListForAllGovernorates"
              lg="6"
            />
            <FormSelect
              :title="$t('inputs.area')"
              label="name"
              storeKey="Area"
              :module="module"
              :clearable="true"
              :placeHolder="$t('inputs.all')"
              :allData="getListForAllAreas"
              lg="6"
            />
            <FormInput
              :label="$t('inputs.address')"
              storeKey="Address"
              :module="module"
              lg="6"
            />
            <div class="col-12 text-end">
              <b-button @click="addData" variant="primary" class="add">
                {{ $t("buttons.add") }}
              </b-button>
            </div>
          </b-row>
        </validation-observer>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  layout: "admin",
  name: "admins-new",
  async asyncData({ $axios, store }) {
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
      module: "admin/admins/new",
    };
  },
  methods: {
    addData() {
      this.$refs.form.validate().then((res) => {
        if (res) {
          this.$store.dispatch("admin/admins/new/addToDB").then(() => {
            setTimeout(() => {
              this.$store.dispatch("admin/admins/new/resetData");
            }, 2000);
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>