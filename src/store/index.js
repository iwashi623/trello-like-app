import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const savedLists = localStorage.getItem("trello-lists");

const store = new Vuex.Store({
  actions: {
    addlist(context, payload) {
      context.commit("addlist", payload);
    },
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: [] });
    },
  },
  state: {
    lists: savedLists
      ? JSON.parse(savedLists)
      : [
          {
            title: "Backlog",
            cards: [{ body: "English" }, { body: "Mathematics" }],
          },
          {
            title: "Todo",
            cards: [{ body: "Science" }],
          },
          {
            title: "Doing",
            cards: [],
          },
        ],
  },
  getters: {},
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem("trello-lists", JSON.stringify(state.lists));
});

export default store;
