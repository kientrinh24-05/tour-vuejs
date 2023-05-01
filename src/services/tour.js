import API from "../service";
import * as types from '../utils/constant';

const tourUrl = `${types.URL}/tours`;

export default {
  createTour(data) {
    return API.post(tourUrl, data, {isFormData: true})
  },
  updateTour(data) {
    return API.put(`${tourUrl}/${data.id}`, data.data, {isFormData: true})
  },
  getAllTour() {
    return API.get(tourUrl)
  },
  deleteTour(id) {
    return API.delete(`${tourUrl}/${id}`)
  }
}