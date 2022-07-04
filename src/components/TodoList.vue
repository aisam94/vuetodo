<template>
  <div id="todo-list">
    <!-- New todo list input -->
    <div id="new-todo-list-item">
      <input
        type="text"
        placeholder="Add a new item.."
        id="new-todo-list-item-input"
        @keyup="updateItemText"
        :value="newTodoItem"
      />
      <input
        type="submit"
        id="new-todo-list-item-submit"
        @click="newItem"
        value="Add Todo Item"
      />
    </div>

    <!-- Item itself -->
    <div class="list-item" v-for="item in store.todos" :key="item.id">
      <div
        class="list-item-holder"
        v-if="item.location == location"
        :data-status="item.completed"
      >
        <div class="checkbox-items" :data-status="item.completed">
          <input
            type="checkbox"
            :data-id="item.id"
            :id="item.id"
            @click="updateTodo"
            :checked="item.completed"
          />
          <label :data-id="item.id" :for="item.id">{{ item.name }}</label>
        </div>
        <div class="item-options">
          <div class="delete-item" @click="deleteItem" :data-id="item.id">
            Delete
          </div>
          <div
            class="archive-item"
            v-if="item.location !== 'archive'"
            @click="archiveItem"
            :data-id="item.id"
          >
            Archive
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { useTodoStore } from "../main";

export default {
  name: "TodoList",
  setup() {
    const store = useTodoStore();
    return { store };
  },
  data() {
    return {
      //used for todo input
      newTodoItem: "",
    };
  },
  props: {
    location: String,
  },
  methods: {
    //UPDATE TODO ITEM
    updateTodo: function (e) {
      const newStatus =
        e.currentTarget.parentElement.getAttribute("data-status") == "true"
          ? false
          : true;

      const updatedItem = {
        id: e.currentTarget.getAttribute("data-id"),
        completed: newStatus,
      };

      //update item at store
      this.store.updateTodo(updatedItem);
    },

    //UPDATE ITEM TEXT
    updateItemText: function (e) {
      this.newTodoItem = e.currentTarget.value;
      if (e.keyCode === 13) {
        //when pressing Enter key
        this.newItem();
      }
      return false;
    },

    //RESET ITEM TEXT
    resetItemText: function () {
      this.newTodoItem = "";
      return false;
    },

    //DELETE ITEM
    deleteItem: function (e) {
      const deletedItem = { id: e.currentTarget.getAttribute("data-id") };
      this.store.deleteTodo(deletedItem);
    },

    //ADD NEW ITEM
    newItem: function () {
      //create new todo item using addTodo mutation if this.newTodoItem has been typed into
      if (this.newTodoItem !== "") {
        const newItem = {
          id: uuidv4(),
          name: this.newTodoItem,
          completed: false,
          location: this.location,
        };
        this.store.addTodo(newItem);
        this.resetItemText();
      }
    },

    //ARCHIVE ITEM
    archiveItem: function (e) {
      //move item to archive section
      const archiveItem = {
        id: e.currentTarget.getAttribute("data-id"),
        location: "archive",
      };
      this.store.moveTodoItem(archiveItem);
    },
  },
};
</script>

<style scoped>
#todo-list {
  border-radius: 14px;
  max-width: 400px;
  border: 2px solid #ddd;
}
.list-item-holder {
  display: flex;
  padding: 1rem 1rem;
  justify-content: space-between;
  border-top: 1px solid #ddd;
}
.item-options,
.item-checkbox {
  display: flex;
}
#new-todo-list-item {
  padding: 1rem;
}
#new-todo-list-item input[type="text"] {
  margin: 0 0 1rem 0;
}
.delete-item,
.archive-item {
  font-size: 0.875rem;
  background: #eee;
  margin: 0 0 0 0.5rem;
  height: 1rem;
  border-radius: 100px;
  transition: all 0.1s ease-out;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  padding: 0.25rem 0.75rem;
}
.checkbox-items {
  display: flex;
  align-items: center;
}
.delete-item:hover,
.archive-item:hover {
  background: #ddd;
  color: black;
}
[data-status="false"] label {
  color: #0428ff;
  font-weight: 600;
}
[data-status="true"] label {
  text-decoration: line-through;
}
</style>
