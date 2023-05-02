import API from "../service";
import * as types from '../utils/constant';

const placesURL = `${types.URL}/places`;

export default {
  createPlaces(data) {
    return API.post(placesURL, data, {isFormData: true});
  },
  updatePlaces(data) {
    return API.put(`${placesURL}/${data.id}`, data.data, {isFormData: true})
  },
  getAllPlaces() {
    return API.get(placesURL)
  },
  deletePlaces(id) {
    return API.delete(`${placesURL}/${id}`)
  }
}