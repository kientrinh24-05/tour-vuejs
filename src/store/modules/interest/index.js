import * as types from './types';
import interest from '../../../services/interest';

const initInfo = [
  {
    id: 1,
    key: "TOUR_SEA",
    name: "Du lịch biển",
  },
  {
    id: 2,
    key: "TOUR_CUISINE",
    name: "Du lịch ẩm thực",
  }
]

function getAllInterest(data) {
  return data.map(item => {
   return {
    id: item.id,
    key: item.key,
    name: item.name
   }
  })
}


const state = {
  interestAll: []
}

const getters = {
  interestAll: state => {
    return state.interestAll && state.interestAll.length > 0 ? getAllInterest(state.interestAll) : getAllInterest(initInfo);
  }
}

const actions = {
  async createInterest({ commit }, data) {
    try {
      const response = await interest.createInterest(data);
      commit(types.CREATE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from createInterest');
      return Promise.reject(e.status);
    }
  },
  async updateInterest({ commit }, data) {
    try {
      const response = await interest.updateInterest(data);
      commit(types.UPDATE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from updateInterest');
      return Promise.reject(e.status);
    }
  },
  async getAllInterest({ commit }) {
    try {
      const response = await interest.getAllInterest();
      commit(types.GETALL, response.data);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from getAllInterest');
      console.log(e,'eee');
      return Promise.reject(e.status);
    }
  },
  async deleteInterest({ commit }, data) {
    try {
      const response = await interest.deleteInterest(data);
      commit(types.DELETE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from deleteInterest');
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
    state.interestAll = data
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
