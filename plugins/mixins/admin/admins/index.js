import Vue from 'vue'
const mixins = {
    data() {
        return {}
    },
    computed: {
        getListForAllAdmins() {
            return this.$store.getters["admin/admins/getAllData"]
        },
    },

    methods: {},
};

Vue.mixin(mixins); 