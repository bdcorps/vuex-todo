<template>
  <div class="todos">
    <div>Todos</div>
    <FilterTodos />
    <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">
      {{ todo.title }}
      <button @click="onDelete(todo.id)">Delete</button>
    </div>
    <AddTodo />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FilterTodos from "./FilterTodos";
import AddTodo from "./AddTodo";

export default {
  name: "Todos",
  components: { FilterTodos, AddTodo },
  methods: {
    ...mapActions(["fetchTodos", "delTodo"]),
    onDelete(id) {
      this.delTodo(id);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>