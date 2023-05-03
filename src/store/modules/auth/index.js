import * as types from './types';
import auth from '../../../services/auth';

const initInfo = {
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

const userTmp = [
  { id: 1, name: 'Trần cảnh name', address: '123 Nguyễn Kiên', phone: '034 878 8232', status: true, password: '12345678', email: 'rongconn@gmail.com', interest: 'Du lịch biển' },
  { id: 5, name: 'Lâm Trần Hồ', address: '456 Trần Hưng Đạo', phone: '034 878 1212', status: false},
  { id: 15,name: 'Bob', address: '789 Nguyễn Huệ', phone: '034 822 1922', status: true, password: '12345678', email: 'bmtrong@gmail.com', interest: 'Khám phá' }
]

const userIDTmp = {
  name: 'Bui Minh Trong',
  email: 'rongconn@gmail.com',
  password: '12345678', 
  interest: 'Du lịch biển'
}

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
  users: null,
  allUser: [],
  user: null
}

const getters = {
  users: state => state.users,
  allUser: state => {
    return state.allUser && state.allUser.length > 0 ? getAllUser(state.allUser) : getAllUser(userTmp)
  },
  userID : state => {
    return state.user ? state.user : userIDTmp
  }
}

const actions = {
  async login({ commit }, data) {
    try {
      const response = await auth.login(data);
      commit(types.LOGIN_SUCCESS, {...response});
      return Promise.resolve(response.data);
    } catch (e) {
      commit(types.LOGIN_SUCCESS, {...initInfo})
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
  async uploadAvatar({ commit }, data) {
    try {
      const response = await auth.uploadAvatar(data);
      commit(types.UPLOAD_AVATAR, {...response});
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from uploadAvatar');
      return Promise.reject(e.status);
    }
  },
  async getAllUser({ commit }, data) {
    try {
      const response = await auth.getAllUser(data);
      commit(types.UPDATE_USER, {...response});
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from getAllUser');
      return Promise.reject(e.status);
    }
  },
  async getUserId({ commit }, data) {
    try {
      const response = await auth.getUserId(data);
      commit(types.UPDATE_USERID, response);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from getUserId');
      return Promise.reject(e.status);
    }
  },
  async updateUser({ commit }, data) {
    try {
      const response = await auth.updateUser(data);
      commit(types.UPLOAD_AVATAR);
      return Promise.resolve(response.data);
    } catch (e) {
      console.group('[Vuex][Actions] Error from getUserId');
      return Promise.reject(e.status);
    }
  }
}

const mutations = {
  [types.LOGIN_SUCCESS](state, data){
    state.users = data;
    localStorage.setItem('users', JSON.stringify(initInfo));
    localStorage.setItem('userID', JSON.stringify(initInfo.id))
  },
  [types.REGISTER](){
  },
  [types.LOGIN_FAILED](){
  },
  [types.UPLOAD_AVATAR](){
  },
  [types.UPDATE_USERID](state, data){
    state.user = data;
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
