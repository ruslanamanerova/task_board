<script setup lang="ts">
import Header from "@/components/Header.vue";
import Task_list from "@/components/Task_list.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { Board } from "@/storage/interfaces";
import Model_window from "@/components/Model_window.vue";

const route = useRoute();
const router = useRouter();
const board = ref<Board | null>(null);
const boards = ref<Board[]>([]);
const id = route.query.id;
const addWindowOpened = ref(false)
const editWindowOpened = ref(false)

const backHomePage = () => {
  router.push({ path: "/" });
};

const addTask = (name: string, date: string, description: string) => {
  if (!board.value) return
  boards.value.forEach(i => {
    if (i.id === board.value?.id) {
      const newTaskId = i.tasks.length > 0 ? i.tasks[i.tasks.length - 1].task_id + 1 : 0;
      i.tasks.push({
        task_id: newTaskId,
        date_task: date,
        description_task: description,
        task_name: name,
        task_step: 0,
      })
    }
  })
  localStorage.setItem("boards", JSON.stringify(boards.value))
  closeWindow()
}

const deleteTask = (task_id: number) => {
  if (!board.value) return
  boards.value.forEach(i => {
    if (i.id === board.value?.id) {
      i.tasks = i.tasks.filter(k => k.task_id !== task_id)
    }
  })
  localStorage.setItem("boards", JSON.stringify(boards.value))
  console.log(board.value?.tasks, task_id);
}

const editTask = (task_id: number) => {
  editWindowOpened.value = true
};

const openAddWindow = () => {
  addWindowOpened.value = true
}
const openEditWindow = () => {
  
}

const closeWindow = () => {
  addWindowOpened.value = false
  editWindowOpened.value = false
}

onMounted(() => {
  const storedBoards = localStorage.getItem("boards");
  boards.value = storedBoards ? JSON.parse(storedBoards) : [];
  console.log("Loaded boards:", boards.value); // Логирование загруженных досок
  board.value = boards.value.find((b: Board) => b.id === Number(id)) || null;
  console.log("Selected board:", board.value); // Логирование выбранной доски
});
</script>

<template>
  <Header
    :haveArrowBack="true"
    :title="board ? board.board_name : 'Название доски'"
    @arrow-back-click="backHomePage()"
  />
  <Task_list
    v-if="board"
    :board="board"
    @add-new-task="openAddWindow"
    @delete-task="deleteTask"
    @edit-task="editTask"
  />
  <div v-else>Доска не найдена.</div>
  <Model_window title="Добавление задачи" @save-window="addTask" @close-window="closeWindow" v-if="addWindowOpened"/>
  <Model_window title="Изменение задачи" @save-window="" @close-window="closeWindow" v-if="editWindowOpened"/>
</template>

<style scoped lang="scss"></style>
