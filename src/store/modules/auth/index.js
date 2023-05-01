import * as types from './types';
import auth from '../../../services/auth';
import adminStorage from '../../../storage';

const initInfo = adminStorage.getStore() || {
  id: 2,
    username: "kien",
    email: "kien.trinh@gmail.com",
    roles: [
        "ROLE_USER",
        "ROLE_ADMIN"
    ],
    interests: [
        "Sea"
    ]
}

const state = {
  user: initInfo
}

const getters = {
  user: state => state.user
}

const actions = {
  async login({ commit }, data) {
    try {
      const response = await auth.login(data);
      commit(types.LOGIN_SUCCESS, {...response});

      console.log({...response});
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from login');
      return Promise.reject(e.status);
    }
  },
  async logout({ commit }) {
    try {
      const response = await auth.logout();
      commit(types.LOGIN_FAILED);
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
      return Promise.reject(e.status);
    }
  },
}

const mutations = {
  [types.LOGIN_SUCCESS](state, data){
    state.user = data.data;
    adminStorage.setStore(JSON.stringify(data || initInfo));
  },
  [types.REGISTER](){
  },
  [types.LOGIN_FAILED](){
    adminStorage.removeStore()
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
