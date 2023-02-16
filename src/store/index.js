import { createStore } from "vuex";

export default createStore({
  state: {
    name: "",
    price: "",
    discrption: "",
    options: "",
    date: new Date().toLocaleString(),
    imgSrc:'images/products/8.jpeg',
    // products:JSON.parse(localStorage.products),
    products:JSON.parse(localStorage.products),
    detailItem:0,
    search:'',
  },
  
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
