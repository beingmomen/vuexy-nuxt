export const state = () => ({
    data: {
    }
});

export const getters = {
    getData(state) {
        return state.data
    },
};

export const actions = {
    getAllDataFromApi({ commit, state }, payload) {
        let arr = [
            { id: 1, arName: "المسئولين", enName: "admins", value: payload.data.admins, route: "/dashboard/admins" },
            { id: 2, arName: "التجار", enName: "sellers", value: payload.data.sellers, route: "/dashboard/sellers" },
            { id: 3, arName: "المندوبين", enName: "drivers", value: payload.data.drivers, route: "/dashboard/drivers" },
            { id: 4, arName: "المحافظات", enName: "cities", value: payload.data.cities, route: "/dashboard/cities" },
            { id: 5, arName: "المناطق", enName: "areas", value: payload.data.areas, route: "/dashboard/areas" },
            { id: 6, arName: "حالات الاوردر", enName: "order statuses", value: payload.data.order_statuses, route: "/dashboard/order-statuses" },
        ]
        // let i = 1
        // console.warn("paylaod :::", payload.data);
        // for (const [key, value] of Object.entries(payload.data)) {
        //     // console.warn(`${key}: ${value}`);
        //     arr.push({ id: i++, name: key.replace("_", " ").toUpperCase(), value, route: `/${key.replace('_', '-')}` })
        // }
        commit("setData", arr)
    },
    addToDB({ state, dispatch }) {
    },

    refreshData({ commit, dispatch }, payload) {

    },

    showData({ commit }, payload) {

    },

    resetUser({ state, commit }) {

    },

    deleteFromDB({ dispatch }, payload) {

    }


};

export const mutations = {
    setData(state, val) {
        state.data = val
    },
};
