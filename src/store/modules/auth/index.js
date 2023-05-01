import * as types from './types';
import auth from '../../../services/auth';

const state = {
  user: null
}

const getters = {
  user: state => state.user
}

const actions = {
  async login({ commit }, data) {
    try {
      const response = await auth.login(data);
      commit(types.LOGIN_SUCCESS, {...response});
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from login');
      return Promise.reject(e.status);
    }
  },
  async logout() {
    try {
      const response = await auth.logout();
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from logout');
      return Promise.reject(e.status);
    }
  },
  async register({ commit }, data) {
    try {
      const response = await auth.register(data);
      commit(types.REGISTER);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from register');
      return Promise.reject(e.status);
    }
  },
}

const mutations = {
  [types.LOGIN_SUCCESS](state, data){
    state.user = data
  },
  [types.REGISTER](){
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
