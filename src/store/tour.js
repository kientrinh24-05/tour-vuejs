import axios from 'axios';

const state = {
  products: [],
};

const getters = {
  allProducts: (state) => state.products,
  getProductById: (state) => (id) => state.products.find((product) => product.id === id)
};

const actions = {
  async fetchProducts({ commit }) {
    const response = await axios.get('https://6193cbfb221e680017450c11.mockapi.io/api/v2/product');
    commit('setProducts', response.data);
  },

  async addProduct({ commit }, product) {
    const response = await axios.post('https://6193cbfb221e680017450c11.mockapi.io/api/v2/product', product);
    commit('newProduct', response.data);
  },

  async updateProduct({ commit }, product) {
    const response = await axios.put(`https://6193cbfb221e680017450c11.mockapi.io/api/v2/product/${product.id}`, product);
    commit('updateProduct', response.data);
  },

  async deleteProduct({ commit }, id) {
    await axios.delete(`https://6193cbfb221e680017450c11.mockapi.io/api/v2/product/${id}`);
    commit('removeProduct', id);
  },
};

const mutations = {
  setProducts: (state, products) => {
    state.products = products;
  },

  newProduct: (state, product) => {
    state.products.push(product);
  },

  updateProduct: (state, product) => {
    const index = state.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      state.products.splice(index, 1, product);
    }
  },

  removeProduct: (state, id) => {
    state.products = state.products.filter((product) => product.id !== id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};