import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        books: [
            {name: 'Laravel', price: 120},
            {name: 'Devops Book', price: 100},
            {name: 'Js Book', price: 200},
            {name: 'Data Structure & Algorithm', price: 150},
        ]
    }   
  })