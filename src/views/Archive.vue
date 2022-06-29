<script>
import TodoList from "../components/TodoList.vue";

export default {
  name: "Archive",
  setup() {},
  components: { TodoList },
};
</script>

<template>
  <h1>Archive</h1>
  <TodoList location="archive" />
</template>
