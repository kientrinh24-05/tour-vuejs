import * as types from './types';
import tour from '../../../services/tour';

const allTour = [
  {
    "id": 1,
    "name": "Du l?ch test",
    "duration": "Trong ngày",
    "province": "Bình Ð?nh",
    "city": "Quy Nhon",
    "price": 250000.0,
    "rating": 3,
    "type": "SEA",
    "description": "Du l?ch di cu",
    "image": "/files/category.png",
    "places": [],
    "categories": []
},
{
    "id": 2,
    "name": "Du l?ch test",
    "duration": "Trong ngày",
    "province": "Bình Ð?nh",
    "city": "Quy Nhon",
    "price": 250000.0,
    "rating": 3,
    "type": "SEA",
    "description": "Du l?ch di cu",
    "image": "/files/category.png",
    "places": [],
    "categories": []
},
{
    "id": 3,
    "name": "Du l?ch test",
    "duration": "Trong ngày",
    "province": "Bình Ð?nh",
    "city": "Quy Nhon",
    "price": 250000.0,
    "rating": 3,
    "type": "SEA",
    "description": "Du l?ch di cu",
    "image": "/files/category.png",
    "places": [],
    "categories": []
}
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
    places: item.places,
    categories: item.categories
   }
  })
  
}

const state = {
  allTours: [],
  tour: null
}

const getters = {
  allTours: state => {
    return state.allTour ? getAllTour(allTour) : getAllTour(allTour);
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
    state.allTours = data
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
