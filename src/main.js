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
    loadStore(state) {
      if (localStorage.getItem("store")) {
        try {
          const todoObj = JSON.parse(localStorage.getItem("store"));
          state.todos = todoObj.todos;
          // this.replaceState(todoObj);
        } catch (error) {
          console.log("Cant initialize store.", error);
        }
      }
    },
    //update todo item
    updateTodo(state, todoItem) {
      const id = todoItem.id;
      const completed = todoItem.completed;
      const name = todoItem.name;

      let findItem = state.todos.find((item) => item.id === id);
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
    addTodo(state, todoItem) {
      if (todoItem.id && todoItem.name) {
        const item = {
          id: todoItem.id,
          name: todoItem.name,
          completed: todoItem.completed,
          location: todoItem.location,
        };
        state.todos.push(item);
      }
    },
    //delete todo item
    deleteTodo(state, todoItem) {
      const id = todoItem.id;
      const removedItem = state.todos.findIndex((item) => item.id === id);
      // const removedItem = state.todos.findIndex((item) => {
      //   return item.id === id;
      // });
      if (removedItem) {
        state.todos.splice(removedItem, 1);
      }
    },
    //move todo item
    moveTodoItem(state, todoItem) {
      const id = todoItem.id;
      const location = todoItem.location;

      let findItem = state.todos.find((item) => item.id === id);

      if (findItem) {
        findItem.location = location;
      } else {
        console.log(`Item ${id} cant be found.`);
      }
    },
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

app.use(router);
app.use(store);
app.mount("#app");
