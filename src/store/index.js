import {
  createStore
} from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    img: '',
    openedSignIn: true,
    openedAutStepOne: false,
    openedAutStepTwo: false,
    goTimer: true,
    dataStepOne: {},
    products: [],
  },
  getters: {},
  mutations: {
    ADD_IMG(state, img) {
      state.img = img
    },
    ADD_DATA_STEP_ONE(state, data) {
      state.dataStepOne = data
      console.log(state.dataStepOne)
    },
    OPEN_AUT_STEP_ONE(state) {
      state.openedAutStepOne = true
  //    console.log(state.openedAutStepOne)
    },
    ADD_PRODUCTS(state, data) {
      state.products = data
    },
    OPEN_AUT_STEP_TWO(state) {
      state.openedAutStepOne = false
      state.openedAutStepTwo = true
      state.goTimer = false
    },
    CLOSE_POPAPS(state) {
      state.openedAutStepOne = false
      state.openedAutStepTwo = false
      state.goTimer = true
    },
    OPEN_PRODUCTS(state) {
      state.openedSignIn = false
    }
  },
  actions: {
    addImg({
      commit
    }) {
      axios.get('https://api.sushisell.ru/v2/auth/captcha')
        .then(response => response.data)
        .then(img => {
          console.log(img.data.image);
          commit('ADD_IMG', img.data.image)
        })
    },
    getProducts({commit}) {
      axios.get('https://api.sushisell.ru/v2/menu/10/products/11')
        .then(response => response.data)
        .then(data => {
          console.log(data.data.products);
          commit('ADD_PRODUCTS', data.data.products)
        })
    },
    submitDataStepTwo({commit, dispatch}, data) {
      axios.post('https://api.sushisell.ru/v2/confirm', data)
        .then(response => response.data)
        .then(data => {
          console.log(data.data.status)
          if(data.data.status) {
            dispatch('getProducts')
            commit('CLOSE_POPAPS')
            commit('OPEN_PRODUCTS')
          } else {
            alert('Последние цифры не совпадают, вернитесь на шаг назад и введите капчу.')}
        })
    },
    submitCapcha({commit, dispatch}, data) {
      axios.post('https://api.sushisell.ru/v2/auth', data)
        .then(response => response.data)
        .then(data => {
          console.log(data.data.status)
          if(data.data.status) {
            commit('OPEN_AUT_STEP_TWO')
          } else {
            dispatch('addImg')
            alert('Введите капчу заново.')}
        })
    },
  },
  modules: {}
})