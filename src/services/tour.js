import API from "../service";

const baseURL =  'http://localhost:8089/api';

const tourUrl = `${baseURL}/tours`;

export default {
  createTour(data) {
    console.log(data, 'create');
    return API.post(tourUrl, {...data}, {isFormData: true})
  },
  updateTour(data) {
    return API.put(`${tourUrl}/${data.id}`, {...data.data})
  },
  getAllTour() {
    return API.get(tourUrl)
  },
  deleteTour(id) {
    return API.delete(`${tourUrl}/${id}`)
  }
}