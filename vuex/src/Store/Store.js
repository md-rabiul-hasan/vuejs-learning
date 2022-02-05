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
    },
    getters: {
        saleBooks: (state) => {
          let salebook =  state.books.map( (book) => {
              return {
                  name: `## ${book.name} ##`,
                  price: ` ${book.price / 2}`
              }
          })
          return salebook;
        }
    },
    mutations: {
        reducePrice:(state) => {
            state.books.forEach( (book) => {
                book.price -= 1;
            } )
        }
      }
  })