import * as types from './types';
import profile from '../../../services/profile';

const userTmp = [
  { id: 1, name: 'Trần cảnh name', address: '123 Nguyễn Kiên', phone: '034 878 8232', status: true },
  { id: 5, name: 'Lâm Trần Hồ', address: '456 Trần Hưng Đạo', phone: '034 878 1212', status: false},
  { id: 15,name: 'Bob', address: '789 Nguyễn Huệ', phone: '034 822 1922', status: true }
]

function getAllUser(data) {
  return data.map(item => {
   return {
    id: item.id,
    name: item.name,
    address: item.address,
    phone: item.phone,
    status: item.status
   }
  })
}

const state = {
  allUser: []
}

const getters = {
  allUser: state => {
    return state.allUser && state.allUser.length > 0 ? getAllUser(state.allUser) : getAllUser(userTmp)
  }
}

const actions = {
  async uploadAvatar({ commit }, data) {
    try {
      const response = await profile.uploadAvatar(data);
      commit(types.UPLOAD_AVATAR, {...response});
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from uploadAvatar');
      return Promise.reject(e.status);
    }
  },
  async getAllUser({ commit }, data) {
    try {
      const response = await profile.getAllUser(data);
      commit(types.UPDATE_USER, {...response});
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from getAllUser');
      return Promise.reject(e.status);
    }
  },
  async getUserId({ commit }, data) {
    try {
      const response = await profile.getUserId(data);
      commit(types.UPLOAD_AVATAR);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from getUserId');
      return Promise.reject(e.status);
    }
  }
}

const mutations = {
  [types.UPLOAD_AVATAR](){
  },
  [types.UPDATE_USER](state, data){
    state.allUser = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
