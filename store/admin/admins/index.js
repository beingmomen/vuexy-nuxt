export const state = () => ({
    allData: [],
    totalItems: null,
    city: 0,
    area: 0,
});

export const getters = {
    getAllData(state) {
        return state.allData
    },
    getTotalItems(state) {
        return state.totalItems
    },
    getCity(state) {
        return state.city
    },
    getArea(state) {
        return state.area
    },
};

export const actions = {
    getAllDataFromApi({ commit }, payload) {
        commit("setAllData", payload.data.data)
        commit("setTotalItems", payload.data.total)
    },

    refreshData({ dispatch }, payload) {
        this.$axios
            .$get(`/admins`, {
                params: {
                    page: payload.page
                }
            })
            .then((res) => {
                dispatch("getAllDataFromApi", res)
            })
            .catch((err) => dispatch("handleError", err.response.data.errors, { root: true }));
    },

    deleteFromDB({ dispatch }, payload) {
        this.$axios.$delete(`/admins/delete/${payload.id}`).then((res) => {
            if (res.success) {
                dispatch("showSuccessMsg", this.app.i18n.t("msg.delete"), { root: true })

                dispatch("refreshData", { page: payload.page })
            }
        }).catch((err) => dispatch("handleError", err.response.data.errors, { root: true }));
    }


};

export const mutations = {
    setAllData(state, val) {
        state.allData = val
    },
    setTotalItems(state, val) {
        state.totalItems = val
    },
    setCity(state, val) {
        state.city = val
    },
    setArea(state, val) {
        state.area = val
    },
};
