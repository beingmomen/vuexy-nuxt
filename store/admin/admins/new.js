const resetData = () => ({
    name: null,
    phone: null,
    email: null,
    password: null,
    city_id: null,
    area_id: null,
    address: null,
})

export const state = () => ({
    data: {
        name: null,
        phone: null,
        email: null,
        password: null,
        city_id: null,
        area_id: null,
        address: null,
    },
});

export const getters = {
    getName(state) {
        return state.data.name
    },
    getPhone(state) {
        return state.data.phone
    },
    getEmail(state) {
        return state.data.email
    },
    getPassword(state) {
        return state.data.password
    },
    getCity(state) {
        return state.data.city_id
    },
    getArea(state) {
        return state.data.area_id
    },
    getAddress(state) {
        return state.data.address
    },
};

export const actions = {
    addToDB({ state, dispatch }) {
        return this.$axios.$post('/admins/store', state.data).then(res => {
            if (res.success) {
                this.$router.push(this.localePath("/dashboard/admins"));
                dispatch("showSuccessMsg", this.app.i18n.t("msg.add"), { root: true })
            }
        })
            .catch(err => dispatch("handleError", err.response.data.errors, { root: true }))
    },
    resetData({ commit }) {
        commit(`resetData`, resetData())
    },
};

export const mutations = {
    resetData(state, val) {
        state.data = val
    },
    setName(state, val) {
        state.data.name = val
    },
    setPhone(state, val) {
        state.data.phone = val
    },
    setEmail(state, val) {
        state.data.email = val
    },
    setPassword(state, val) {
        state.data.password = val
    },
    setCity(state, val) {
        state.data.city_id = val
    },
    setArea(state, val) {
        state.data.area_id = val
    },
    setAddress(state, val) {
        state.data.address = val
    },
};
