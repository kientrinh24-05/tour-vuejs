import * as types from './types';
import places from '../../../services/places';

const allPlaces = [
  {
    "id": 1,
    "name": "Du l?ch test",
    "province": "Bình Ð?nh",
    "city": "Quy Nhon",
    "link": "https://www.w3schools.com/tags/att_input_required.asp",
    "image": null
},
{
    "id": 2,
    "name": "Du l?ch test",
    "province": "Bình Ð?nh",
    "city": "Quy Nhon",
    "link": "https://www.w3schools.com/tags/att_input_required.asp",
    "image": null
},
{
    "id": 3,
    "name": "Du l?ch test",
    "province": "Bình Ð?nh",
    "city": "Quy Nhon",
    "link": "https://www.w3schools.com/tags/att_input_required.asp",
    "image": null
}
]

function getAllPlaces(data) {
  return data.map(item => {
   return {
    id: item.id,
    name: item.name,
    province: item.province,
    city: item.city,
    link: item.link,
    image: item.image
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
