import Vue from 'vue'
const mixins = {
    data() {
        return {}
    },
    computed: {
        getListForAllAreas() {
            return this.$store.getters["admin/areas/getAllData"]
        },
    },

    methods: {},
};

Vue.mixin(mixins); 