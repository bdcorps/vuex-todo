<template>
  <div class="filter-todos">
    <h3>Filter Todos</h3>
    <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="Filter by title" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  data: () => {
    return { title: "" };
  },methods: {
    ...mapActions(["filterTodos"]),
    onSubmit(e){
      e.preventDefault();
      this.filterTodos(this.title);
    }
  },
};
</script>

<style>
</style>