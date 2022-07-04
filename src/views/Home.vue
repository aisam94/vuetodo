<template>
  <h1>Todo Lists:</h1>
  <TodoList location="home" />
</template>

<script>
import TodoList from "../components/TodoList.vue";

export default {
  name: "HomePage",
  setup() {},
  components: { TodoList },
};
</script>
