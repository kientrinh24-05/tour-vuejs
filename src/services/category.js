import API from "../service";
import * as types from '../utils/constant';

const categoriesURL = `${types.URL}/category`;

export default {
  createCategory(data) {
    return API.post(categoriesURL, {...data})
  },
  updateCategory(data) {
    return API.put(`${categoriesURL}/${data.id}`, {...data.data})
  },
  getAllCategory() {
    return API.get(categoriesURL)
  },
  deleteCategory(id) {
    return API.delete(`${categoriesURL}/${id}`)
  }
}