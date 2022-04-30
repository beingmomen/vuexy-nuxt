import Vue from 'vue'

const mixins = {
    data() {
        return {}
    },
    computed: {
        makeLayoutCollapsed() {
            return this.$store.getters["getLayoutCollapsed"]
        },
        toggleSidebar() {
            return this.$store.getters["getSidebar"]
        },
        dashboardMode() {
            return this.$store.getters["getMode"]
        }
    },

    methods: {},
};

Vue.mixin(mixins);