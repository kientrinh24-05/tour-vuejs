import API from "../service"
import * as types from '../utils/constant';

const loginUrl = `${types.URL}/auth/login`;
const logoutUrl = `${types.URL}/auth/signout`;
const registerUrl = `${types.URL}/auth/register`;
const uploadAvatarUrl = `${types.URL}/user/upload-avatar`;
const userUrl = `${types.URL}/user`;

export default {
  login(data) {
    return API.post(loginUrl, {...data})
  },
  logout() {
    return API.post(logoutUrl)
  },
  register(data) {
    return API.post(registerUrl, {...data})
  },
  uploadAvatar(data) {
    return API.post(`${uploadAvatarUrl}/${data.id}`, data.data, {isFormData: true})
  },
  getAllUser() {
    return API.get(userUrl)
  },
  getUserId(id) {
    return API.get(`${userUrl}/${id}`)
  },
  updateUser(data) {
    return API.get(`${userUrl}/${data.id}`, data.data, {isFormData: true})
  },
}