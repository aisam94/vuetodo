import { createApp } from "vue";
import App from "./App.vue";
import { createPinia, defineStore } from "pinia";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

//create store
export const useTodoStore = defineStore("todo", {
  state: () => {
    return {
      todos: [
        //this id default first item on the list
        {
          id: "first-element",
          name: "First Item",
          completed: false,
          location: "home",
        },
      ],
    };
  },

  getters: {
    //GET DATA FROM STORE
    getTodoList(state) {
      //return all todo list items
      return state.todos;
    },
  },

  actions: {
    //LOAD FROM LOCAL STORAGE
    loadStore() {
      if (localStorage.getItem("store")) {
        try {
          //state hydration
          const todoObj = JSON.parse(localStorage.getItem("store"));
          this.todos = todoObj.todos;
        } catch (error) {
          console.log("Cannot initialize store. What can you do?", error);
        }
      }
    },

    //UPDATE TODO ITEM
    updateTodo(todoItem) {
      const id = todoItem.id;
      const completed = todoItem.completed;
      const name = todoItem.name;

      let findItem = this.todos.find((item) => item.id == id);
      if (findItem !== null) {
        if (completed !== undefined) {
          findItem.completed = completed;
        }
        if (name !== undefined) {
          findItem.name = name;
        }
      } else {
        console.log(`Item ${id} cannot be found`);
      }
    },

    //ADD TODO ITEM
    addTodo(todoItem) {
      if (
        todoItem.id !== undefined &&
        typeof todoItem.name == "string" &&
        typeof todoItem.completed == "boolean"
      ) {
        const item = {
          id: todoItem.id,
          name: todoItem.name,
          completed: todoItem.completed,
          location: todoItem.location,
        };
        this.todos.push(item);
      }
    },

    //DELETE TODO ITEM
    deleteTodo(todoItem) {
      const id = todoItem.id;
      const removedItem = this.todos.findIndex((item) => item.id == id);
      if (removedItem !== null) {
        this.todos.splice(removedItem, 1);
      }
    },

    //MOVE TODO ITEM
    moveTodoItem(todoItem) {
      const id = todoItem.id;
      const location = todoItem.location;
      let findItem = this.todos.find((item) => item.id == id);

      //if found update location
      if (findItem !== null) {
        findItem.location = location;
      } else {
        console.log(`Item ${id} cannot be found`);
      }
    },
  },
});

useTodoStore().$subscribe((mutation, state) => {
  //code trigger anytime mutation occurs
  //stringify entire state obj and put it in localStorage so data will persist via page refresh
  localStorage.setItem("store", JSON.stringify(state));
});

app.mount("#app");
