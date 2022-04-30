export const state = () => ({
    layoutCollapsed: true,
    sidebar: false,
    mode: true
});

export const getters = {
    getLayoutCollapsed(state) {
        return state.layoutCollapsed
    },
    getSidebar(state) {
        return state.sidebar
    },
    getMode(state) {
        return state.mode
    }
};

export const actions = {
    toggleLayoutCollapsed({ dispatch, commit, state }, payload) {
        if (payload > 1200) {
            commit("setLayoutCollapsed", state.layoutCollapsed ? false : true)
        } else {
            dispatch("hideSidebar")
        }
    },
    hideSidebar({ commit, state }) {
        commit("setSidebar", state.sidebar ? false : true)
    },
    layoutMode({ commit }, payload) {
        commit("setMode", payload == 'light' ? true : false)
    },
};

export const mutations = {
    setLayoutCollapsed(state, val) {
        state.layoutCollapsed = val
    },
    setSidebar(state, val) {
        state.sidebar = val
    },
    setMode(state, val) {
        state.mode = val
    }
};