import API from "../service";
import * as types from '../utils/constant';

const placesURL = `${types.URL}/places`;

export default {
  createPlaces(data) {
    return API.post(placesURL, {...data})
  },
  updatePlaces(data) {
    return API.put(`${placesURL}/${data.id}`, {...data.data})
  },
  getAllPlaces() {
    return API.get(placesURL)
  },
  deletePlaces(id) {
    return API.delete(`${placesURL}/${id}`)
  }
}