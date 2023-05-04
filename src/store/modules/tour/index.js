import * as types from './types';
import tour from '../../../services/tour';
import category from '../../../services/category';
import places from '../../../services/places';

const allTourTmp = []

const optionCategoryTmp = [
  { id: 1, value: 'TOUR_SEA', text: 'Du lịch biển'},
  { id: 2, value: 'TOUR_CUISINE', text: 'Du lịch ẩm thực' },
  { id: 3, value: 'TOUR_EXPLORE', text: 'Khám phá'},
  { id: 4, value: 'TOUR_ADVENTURE', text: 'Phiêu lưu' },
  { id: 5, value: 'TOUR_CONVALESCENCE', text: 'Hồi phục sức khỏe' },
  { id: 6, value: 'TOUR_SIGHTSEEING', text: 'Tham quan' },
  { id: 7, value: 'TOUR_CAMPING', text: 'Cắm trại' }
]

function getAllTour(data) {
  return data.map(item => {
   return {
    id: item.id,
    name: item.name,
    duration: item.duration,
    province: item.province,
    city: item.city,
    price: item.price,
    rating: item.rating,
    type: item.type,
    description: item.description,
    image: item.image,
    places: item.places[0],
    categories: item.categories
   }
  })
  
}

const state = {
  allTours: [],
  optionCategory: [],
  optionPlace: []
}

const getters = {
    allTours: state => {
      return state.allTours && state.allTours.length > 0 ? getAllTour(state.allTours) : getAllTour(allTourTmp);
    },
  optionCategory: state => {
    return state.optionCategory && state.optionCategory.length > 0 ? state.optionCategory : optionCategoryTmp;
  },
  optionPlace: state => {
    return state.optionPlace && state.optionPlace.length > 0 ? state.optionPlace : optionCategoryTmp;
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
      return Promise.reject(e);
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
  async getAllCategory({ commit }, data) {
    try {
      const response = await category.getAllCategory(data);
      commit(types.OPTIONS, response.data);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from deleteTour');
      return Promise.reject(e.status);
    }
  },
  async getAllPlaces({ commit }, data) {
    try {
      const response = await places.getAllPlaces(data);
      commit(types.OPTIONS_PLACE, response.data);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from deleteTour');
      return Promise.reject(e.status);
    }
  }
}

const mutations = {
  [types.CREATE](){
  },
  [types.UPDATE](){
  },
  [types.GETALL](state, data){
    state.allTours = data
  },
  [types.OPTIONS](state, data){
    state.optionCategory = data
  },
  [types.OPTIONS_PLACE](state, data){
    state.optionPlace = data
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
