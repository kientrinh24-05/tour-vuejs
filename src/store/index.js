import { createStore } from "vuex";
import axios from 'axios';
import { apiBase } from "../service";
import tour from "./modules/tour";
import auth from './modules/auth';
import category from './modules/category';
import interest from './modules/interest';
import places from './modules/places';
import profile from './modules/profile';

export default createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    isLoggedIn: false,
    error: '',
    products: [],
    categorys: [
      {
        id: 1,
        key: "example-key-1",
        name: "Example Tour 1",
        image: "https://cdn.pixabay.com/photo/2016/10/22/20/34/desert-1768752_1280.jpg",
        tours: [
          { id: 1, name: "Tour A", duration: "3 days", price: 1000 },
          { id: 2, name: "Tour B", duration: "5 days", price: 1500 }
        ]
      },
      {
        id: 2,
        key: "example-key-2",
        name: "Example Tour 2",
        image: "https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_1280.jpg",
        tours: [
          { id: 3, name: "Tour C", duration: "7 days", price: 2000 },
          { id: 4, name: "Tour D", duration: "10 days", price: 3000 }
        ]
      }
    ],
    places: [],
    interests: [
      {
        id:1,
        key: "Tour Sea",
        name: "Du lịch biển",
      },
      {
        id:2,
        key: "Tour khám phá",
        name: "Khám phá",
      },
    ],
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    setLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
    },
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");

      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    // Product
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
    // Category

    setCategory: (state, categorys) => {
      state.categorys = categorys;
    },
  
    newCategory: (state, category) => {
      state.categorys.push(category);
    },
  
    updateCategory: (state, category) => {
      const index = state.categorys.findIndex((p) => p.id === category.id);
      if (index !== -1) {
        state.categorys.splice(index, 1, category);
      }
    },
  
    removeCategoryt: (state, id) => {
      state.categorys = state.categorys.filter((category) => category.id !== id);
    },

    // Interest

    setInterest: (state, interest) => {
      state.interests = interest;
    },
  
    newInterest: (state, interest) => {
      state.interests.push(interest);
    },
  
    updateInterest: (state, interest) => {
      const index = state.interests.findIndex((p) => p.id === interest.id);
      if (index !== -1) {
        state.interests.splice(index, 1, interest);
      }
    },
  
    removeInterest: (state, id) => {
      state.interests = state.interests.filter((interest) => interest.id !== id);
    },

  },
  actions: {
    login({ commit }, credentials) {
      if (credentials.email === 'admin@gmail.com' && credentials.password === '123456') {
        commit('setLoggedIn', true);
        credentials.router.push('/dashboard-default');
      } else {
        commit('setError', 'Sai tên đăng nhập hoặc mật khẩu')
        credentials.router.push('/signin');
      }
    },
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    // Product 
    async fetchProducts({ commit }) {
      const response = await apiBase({url: `/api/tours`, method: "GET"});
      commit('setProducts', response.data);
    },
  
    async addProduct({ commit }, product) {
      const response = await axios.post('https://6193cbfb221e680017450c11.mockapi.io/api/v2/product', product);
      commit('newProduct', response.data);
    },
  
    async updateProduct({ commit },{ id, product}) {
      const response = await axios.put(`https://6193cbfb221e680017450c11.mockapi.io/api/v2/product/${id}`, product);
      commit('updateProduct', response.data);
    },
  
    async deleteProduct({ commit }, id) {
      await axios.delete(`https://6193cbfb221e680017450c11.mockapi.io/api/v2/product/${id}`);
      commit('removeProduct', id);
    },

    // Category 
    async fetchCategorys({ commit }) {
      const response = await axios.get('https://6193cbfb221e680017450c11.mockapi.io/api/v2/contact');
      commit('setCategorys', response.data);
    },
  
    async addCategory({ commit }, category) {
      const response = await axios.post('https://6193cbfb221e680017450c11.mockapi.io/api/v2/contact', category);
      commit('newCategory', response.data);
    },
  
    async updateCategory({ commit },{ id, category}) {
      const response = await axios.put(`https://6193cbfb221e680017450c11.mockapi.io/api/v2/contact/${id}`, category);
      commit('updateCategory', response.data);
    },
  
    async deleteCategory({ commit }, id) {
      await axios.delete(`https://6193cbfb221e680017450c11.mockapi.io/api/v2/contact/${id}`);
      commit('removeCategory', id);
    },

    //Place
    async fetchPlaces({ commit }) {
      const response = await axios.get('https://6193cbfb221e680017450c11.mockapi.io/api/v2/product');
      commit('setPlaces', response.data);
    },
  
    async addPlace({ commit }, place) {
      const response = await axios.post('https://6193cbfb221e680017450c11.mockapi.io/api/v2/product', place);
      commit('newPlace', response.data);
    },
  
    async updatePlace({ commit },{ id, place}) {
      const response = await axios.put(`https://6193cbfb221e680017450c11.mockapi.io/api/v2/product/${id}`, place);
      commit('updatePlace', response.data);
    },
  
    async deletePlace({ commit }, id) {
      await axios.delete(`https://6193cbfb221e680017450c11.mockapi.io/api/v2/product/${id}`);
      commit('removePlace', id);
    },

    // Interest
    async fetchInterests({ commit }) {
      const response = await axios.get('https://6193cbfb221e680017450c11.mockapi.io/api/v2/intern');
      commit('setInterest', response.data);
    },
  
    async addInterest({ commit }, interest) {
      const response = await axios.post('https://6193cbfb221e680017450c11.mockapi.io/api/v2/intern', interest);
      commit('newInterest', response.data);
    },
  
    async updateInterest({ commit },{ id, interest}) {
      const response = await axios.put(`https://6193cbfb221e680017450c11.mockapi.io/api/v2/intern/${id}`, interest);
      commit('updateInterest', response.data);
    },
  
    async deleteInterest({ commit }, id) {
      await axios.delete(`https://6193cbfb221e680017450c11.mockapi.io/api/v2/intern/${id}`);
      commit('removeInterest', id);
    },
  },
  getters: {
    allProducts: (state) => state.products,
    allCategorys: (state) => state.categorys,
    allPlaces: (state) => state.places,
    allInterests: (state) => state.interests,
    getProductById: (state) => (id) => state.products.find((product) => product.id === id)
  },
  modules: {
    auth,
    tour,
    category,
    interest,
    places,
    profile
  },
});
