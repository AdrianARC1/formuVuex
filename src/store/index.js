import { createStore } from 'vuex'

export default createStore({
  state: {
    nombre: "",
    edad: "",
    datos_login:[]
  },
  getters: {
  },
  mutations: {
    addPersonVuex(state){
      state.datos_login.push({nombre: state.nombre, edad: state.edad})

      state.nombre=''
      state.edad=''
      console.log(state.datos_login)
    }
  },
  actions: {
    accionAddPerson(context){
      context.commit('addPersonVuex')
    }
  },
  modules: {
  }
})
