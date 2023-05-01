import * as types from './types';
import tour from '../../../services/tour';

const state = {
  allTour: [],
  tour: null
}

const getters = {
  allTour: state => {
    return state.allTour ? state.allTour : [];
  }
}

const actions = {
  async createTour({ commit }, data) {
    try {
      const response = await tour.createTour(data);
      commit(types.CREATE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from createTour');
      return Promise.reject(e.status);
    }
  },
  async updateTour({ commit }, data) {
    try {
      const response = await tour.updateTour(data);
      commit(types.UPDATE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from updateTour');
      return Promise.reject(e.status);
    }
  },
  async getAllTour({ commit }) {
    try {
      const response = await tour.getAllTour();
      commit(types.GETALL, response.data);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from getAllTour');
      console.log(e,'eee');
      return Promise.reject(e.status);
    }
  },
  async deleteTour({ commit }, data) {
    try {
      const response = await tour.deleteTour(data);
      commit(types.DELETE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from deleteTour');
      return Promise.reject(e.status);
    }
  },
  
}

const mutations = {
  [types.CREATE](){
  },
  [types.UPDATE](){
  },
  [types.GETALL](state, data){
    state.allTour = data
  },
  [types.DELETE](){
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
