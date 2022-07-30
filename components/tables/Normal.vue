<template>
  <b-card no-body class="card-statistics">
    <b-card-body class="statistics-body">
      <b-row class="justify-content-between">
        <b-col cols="12" class="my-1 text-end">
          <b-button variant="primary" class="add p-0 text-white">
            <nuxt-link
              class="
                text-white
                w-100
                h-100
                d-flex
                justify-content-center
                align-items-center
              "
              :to="`${$route.path}/new`"
            >
              {{ $t("buttons.add") }}
            </nuxt-link>
          </b-button>
        </b-col>
      </b-row>
      <b-row class="justify-content-between">
        <slot name="filters"></slot>
        <b-col cols="12">
          <b-table
            striped
            hover
            responsive
            :per-page="perPage"
            :items="items"
            :fields="headers"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            :filter="filter"
            :filter-included-fields="filterOn"
            @filtered="onFiltered"
          >
            <template #cell(avatar)="data">
              <b-avatar :src="data.value" />
            </template>

            <template #cell(status)="data">
              <b-badge :variant="status[1][data.value]">
                {{ status[0][data.value] }}
              </b-badge>
            </template>

            <template #cell(actions)="data">
              <nuxt-link :to="$route.path + '/' + data.item.id">
                <edit-icon
                  size="1.5x"
                  class="custom-class text-primary"
                ></edit-icon>
              </nuxt-link>
              <trash-icon
                @click="showMsgBoxTwo(data)"
                size="1.5x"
                class="custom-clas mr-50 text-danger"
              ></trash-icon>
            </template>
          </b-table>
        </b-col>

        <b-col cols="12">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalItems"
            :per-page="perPage"
            align="center"
            size="sm"
            class="my-0"
          />
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import { MoreVerticalIcon, EditIcon, TrashIcon } from "vue-feather-icons";
export default {
  props: ["headers", "items", "module"],
  data() {
    return {
      perPage: 10,
      pageOptions: [5, 10, 25, 50],
      currentPage: 1,
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },

      status: [
        {
          1: "Current",
          2: "Professional",
          3: "Rejected",
          4: "Resigned",
          5: "Applied",
        },
        {
          1: "light-primary",
          2: "light-success",
          3: "light-danger",
          4: "light-warning",
          5: "light-info",
        },
      ],
    };
  },
  components: {
    MoreVerticalIcon,
    EditIcon,
    TrashIcon,
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => ({ text: f.label, value: f.key }));
    },
    totalItems() {
      return this.$store.getters[`${this.module}/getTotalItems`];
    },
  },
  methods: {
    showMsgBoxTwo(data) {
      console.warn("data :::", data.item.id);
      this.$bvModal
        .msgBoxConfirm(`${this.$t("modals.delete_msg")}( ${data.item.name} )`, {
          title: this.$t("modals.delete_confirm"),
          size: "sm",
          okVariant: "primary",
          okTitle: this.$t("buttons.yes"),
          cancelTitle: this.$t("buttons.no"),
          cancelVariant: "outline-secondary",
          hideHeaderClose: false,
          centered: false,
        })
        .then((value) => {
          value
            ? this.$emit("deleteItem", {
                id: data.item.id,
                page: this.currentPage,
              })
            : "";
        });
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  watch: {
    currentPage(newValue, oldValue) {
      this.$emit("changePage", {
        page: newValue,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  width: 70px;
  height: 38px;
}
</style>