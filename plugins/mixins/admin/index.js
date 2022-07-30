import Vue from 'vue'
const mixins = {
    data() {
        return {}
    },
    computed: {
        getListForAllDashboardData() {
            return this.$store.getters["admin/getData"]
        },
    },

    methods: {},
};

Vue.mixin(mixins); 