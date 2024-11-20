<script setup lang="ts">
import Header from "@/components/Header.vue";
import Task_list from "@/components/Task_list.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { Board } from "@/storage/interfaces";

const route = useRoute()
const router = useRouter()
const board = ref<Board | null>(null)
const id = route.query.id

const backHomePage = () => {
  router.push({ path: "/"})
}

onMounted(() => {
  const boards = JSON.parse(localStorage.getItem("boards") || "[]")
  board.value = boards.find((b: Board) => b.id === Number(id))
});
</script>

<template>
  <Header :haveArrowBack="true" :title="board?.board_name ? board?.board_name : 'Название доски'" @arrow-back-click="backHomePage()" />
  <Task_list v-if="board" :board="board" />
  <div v-else>Доска не найдена.</div>
</template>

<style scoped lang="scss"></style>
