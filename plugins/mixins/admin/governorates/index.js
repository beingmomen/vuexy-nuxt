import Vue from 'vue'
const mixins = {
    data() {
        return {}
    },
    computed: {
        getListForAllGovernorates() {
            return this.$store.getters["admin/governorates/getAllData"]
        },
    },

    methods: {},
};

Vue.mixin(mixins); 