import * as types from './types';
import places from '../../../services/places';

const allPlaces = [
  {
    "id": 1,
    "name": "Du l?ch test",
    "duration": "Trong ngày",
    "province": "Bình Ð?nh",
    "city": "Quy Nhon",
    "price": 250000.0,
    "rating": 3,
    "type": "TOUR_SEA",
    "description": "Du l?ch di cu",
    "image": "/files/category.png",
    "places": "TOUR_SEA",
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
    "type": "TOUR_SEA",
    "description": "Du l?ch di cu",
    "image": "/files/category.png",
    "places": 'TOUR_SEA',
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
    "type": "TOUR_SEA",
    "description": "Du l?ch di cu",
    "image": "/files/category.png",
    "places": "TOUR_SEA",
    "categories": []
}
]

function getAllPlaces(data) {
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
  allPlaces: [],
  tour: null
}

const getters = {
  allPlaces: state => {
    return state.allPlaces ? getAllPlaces(allPlaces) : getAllPlaces(allPlaces);
  }
}

const actions = {
  async createPlaces({ commit }, data) {
    try {
      const response = await places.createPlaces(data);
      commit(types.CREATE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from createPlaces');
      return Promise.reject(e.status);
    }
  },
  async updatePlaces({ commit }, data) {
    try {
      const response = await places.updatePlaces(data);
      commit(types.UPDATE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from updatePlaces');
      return Promise.reject(e.status);
    }
  },
  async getAllPlaces({ commit }) {
    try {
      const response = await places.getAllPlaces();
      commit(types.GETALL, response.data);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from getAllPlaces');
      console.log(e,'eee');
      return Promise.reject(e.status);
    }
  },
  async deletePlaces({ commit }, data) {
    try {
      const response = await places.deletePlaces(data);
      commit(types.DELETE);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from deletePlaces');
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
    state.allPlaces = data
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
