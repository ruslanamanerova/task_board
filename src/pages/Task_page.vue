<script setup lang="ts">
import Header from "@/components/Header.vue";
import Task_list from "@/components/Task_list.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { Board, Task } from "@/storage/interfaces";
import Model_window from "@/components/Model_window.vue";
import Edit_window from "@/components/Edit_window.vue";

const route = useRoute();
const router = useRouter();
const board = ref<Board | null>(null);
const boards = ref<Board[]>([]);
const id = route.query.id;
const addWindowOpened = ref(false)
const editWindowOpened = ref(false)

// обратно на домашнюю страницу
const backHomePage = () => {
  router.push({ path: "/" });
};

// добавление новой задачи
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

// удаление задачи
const deleteTask = (task_id: number) => {
  if (!board.value) return
  boards.value.forEach(i => {
    if (i.id === board.value?.id) {
      i.tasks = i.tasks.filter(k => k.task_id !== task_id)
    }
  })
  localStorage.setItem("boards", JSON.stringify(boards.value))
}

// правки по задачи
const saveEditsTask = (name: string, date: string, description: string) => {
  if (!board.value || !edited_task.value) return;

  const taskIndex = board.value.tasks.findIndex(task => task.task_id === edited_task.value?.task_id)
  if (taskIndex === -1) return;

  board.value.tasks[taskIndex] = {
    ...board.value.tasks[taskIndex],
    task_name: name,
    date_task: date,
    description_task: description,
  }

  const boardIndex = boards.value.findIndex(b => b.id === board.value?.id)
  if (boardIndex !== -1) {
    boards.value[boardIndex] = board.value
  }

  localStorage.setItem("boards", JSON.stringify(boards.value))
  closeWindow()
}
const edited_task = ref<Task>()
const openEditWindow = (task_id: number) => {
  editWindowOpened.value = true
  edited_task.value = board.value?.tasks.find(i => i.task_id === task_id)
}

// открытие и закрытие модального окна
const openAddWindow = () => {
  addWindowOpened.value = true
}
const closeWindow = () => {
  addWindowOpened.value = false
  editWindowOpened.value = false
}

// перевод задачи в другой столбец
const makeNewStep = (task_id: number, step: number) => {
  if (!board.value) return
  const taskIndex = board.value.tasks.findIndex(task => task.task_id === task_id)
  if (taskIndex === -1) return

  board.value.tasks[taskIndex] = {
    ...board.value.tasks[taskIndex],
    task_step: (step+1)
  }
  const boardIndex = boards.value.findIndex(b => b.id === board.value?.id)
  if (boardIndex !== -1) {
    boards.value[boardIndex] = board.value
  }

  localStorage.setItem("boards", JSON.stringify(boards.value))
}

// при загрузке страницы прошгружаем список досок из локального хранилища
onMounted(() => {
  const storedBoards = localStorage.getItem("boards");
  boards.value = storedBoards ? JSON.parse(storedBoards) : [];
  board.value = boards.value.find((b: Board) => b.id === Number(id)) || null;
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
    @edit-task="openEditWindow"
    @make-new-step="makeNewStep"
  />
  <div v-else>Доска не найдена.</div>
  <Model_window title="Добавление задачи" @save-window="addTask" @close-window="closeWindow" v-if="addWindowOpened"/>
  <Edit_window  @save-window="saveEditsTask" @close-window="closeWindow" :edited_task="edited_task" v-if="editWindowOpened && edited_task"/>
</template>

<style scoped lang="scss"></style>
