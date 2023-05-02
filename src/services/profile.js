import API from "../service"
import * as types from '../utils/constant';

const uploadAvatarUrl = `${types.URL}/user/upload-avatar`;
const userUrl = `${types.URL}/user`;

export default {
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