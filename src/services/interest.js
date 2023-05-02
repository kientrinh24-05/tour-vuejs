import API from "../service";
import * as types from '../utils/constant';

const interestURL = `${types.URL}/interest`;

export default {
  createInterest(data) {
    return API.post(interestURL, {...data})
  },
  updateInterest(data) {
    return API.put(`${interestURL}/${data.id}`, {...data.data})
  },
  getAllInterest() {
    return API.get(interestURL)
  },
  deleteInterest(id) {
    return API.delete(`${interestURL}/${id}`)
  }
}