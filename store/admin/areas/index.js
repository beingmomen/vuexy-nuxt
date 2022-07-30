export const state = () => ({
    allData: [],
    data: {
    }
});

export const getters = {
    getAllData(state) {
        return state.allData
    },
};

export const actions = {
    getAllDataFromApi({ commit, state }, payload) {
        commit("setAllData", payload.data)
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
    setAllData(state, val) {
        state.allData = val
    },
};
