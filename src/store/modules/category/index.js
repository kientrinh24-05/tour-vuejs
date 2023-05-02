import * as types from './types';
import category from '../../../services/category';

const initInfo = [
  {
    id: 2,
    key: "TOUR_SEA",
    name: "Bui Minh Trong",
    'image': '@/assets/img/bruce-mars.jpg'
  },
  {
    id: 2,
    key: "TOUR_CUISINE",
    name: "Bui Dinh Tiến",
    image: '/files/category.png'
  }
]

// const optionCategoryTmp = [
//   { id: 1, value: 'TOUR_SEA', text: 'Du lịch biển'},
//   { id: 2, value: 'TOUR_CUISINE', text: 'Du lịch ẩm thực' },
//   { id: 3, value: 'TOUR_EXPLORE', text: 'Khám phá'},
//   { id: 4, value: 'TOUR_ADVENTURE', text: 'Phiêu lưu' },
//   { id: 5, value: 'TOUR_CONVALESCENCE', text: 'Hồi phục sức khỏe' },
//   { id: 6, value: 'TOUR_SIGHTSEEING', text: 'Tham quan' },
//   { id: 7, value: 'TOUR_CAMPING', text: 'Cắm trại' }
// ]

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
