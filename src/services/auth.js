import API from "../service"

const baseURL =  'http://localhost:8080/api'
const loginUrl = `${baseURL}/auth/login`;
const logoutUrl = `${baseURL}/auth/signout`;
const registerUrl = `${baseURL}/auth/register`;

export default {
  login(data) {
    return API.post(loginUrl, {...data})
  },
  logout() {
    return API.post(logoutUrl)
  },
  register(data) {
    console.log(data,'data');
    return API.post(registerUrl, {...data})
  }
}