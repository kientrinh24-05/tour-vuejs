import API from "../service"
import * as types from '../utils/constant';

const loginUrl = `${types.URL}/auth/login`;
const logoutUrl = `${types.URL}/auth/signout`;
const registerUrl = `${types.URL}/auth/register`;

export default {
  login(data) {
    return API.post(loginUrl, {...data})
  },
  logout() {
    return API.post(logoutUrl)
  },
  register(data) {
    return API.post(registerUrl, {...data})
  }
}