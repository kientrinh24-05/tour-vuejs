import * as types from './types';
import category from '../../../services/category';

const initInfo = [
  {
    id: 2,
    key: "TOUR_SEA",
    name: "kien.trinh@gmail.com",
    image:  null
  }
]

function getAllCategory(data) {
  return data.map(item => {
   return {
    id: item.id,
    key: item.key,
    name: item.name,
    image: item.image
   }
  })
}


const state = {
  categoryAll: []
}

const getters = {
  categoryAll: state => {
    return state.categoryAll && state.categoryAll.length > 0 ? getAllCategory(state.categoryAll) : getAllCategory(initInfo);
  }
}

const actions = {
  async createCategory({ commit }, data) {
    try {
      const response = await category.createCategory(data);
      commit(types.CREATE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from createCategory');
      return Promise.reject(e.status);
    }
  },
  async updateCategory({ commit }, data) {
    try {
      const response = await category.updateCategory(data);
      commit(types.UPDATE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from updateCategory');
      return Promise.reject(e.status);
    }
  },
  async getAllCategory({ commit }) {
    try {
      const response = await category.getAllCategory();
      commit(types.GETALL, response.data);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from getAllCategory');
      console.log(e,'eee');
      return Promise.reject(e.status);
    }
  },
  async deleteCategory({ commit }, data) {
    try {
      const response = await category.deleteCategory(data);
      commit(types.DELETE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from deleteCategory');
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
    state.categoryAll = data
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
