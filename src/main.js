import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import router from "./router";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      todos: [],
    };
  },
  getters: {
    //get data from store
    getTodoList(state) {
      return state.todos;
    },
  },
  mutations: {
    //Load store
    loadStore() {
      if (localStorage.getItem("store")) {
        try {
          const todoObj = JSON.parse(localStorage.getItem("store"));
          this.todos = todoObj.todos;
        } catch (error) {
          console.log("Cant initialize store.", error);
        }
      }
    },
    //update todo item
    updateTodo(todoItem) {
      const id = todoItem.id;
      const completed = todoItem.completed;
      const name = todoItem.name;

      let findItem = this.todos.find((item) => item.id === id);
      if (findItem) {
        if (completed) {
          findItem.completed = completed;
        }
        if (name) {
          findItem.name = name;
        }
      } else {
        console.log(`Item ${id} cannot be found.`);
      }
    },
    //add todo item
    addTodo(todoItem) {
      if (todoItem.id && todoItem.name && todoItem.completed) {
        const item = {
          id: todoItem.id,
          name: todoItem.name,
          completed: todoItem.completed,
        };
      }
    },
  },
  actions: {
    //
  },
});
