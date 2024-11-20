<script setup lang="ts">
import Header from "@/components/Header.vue";
import Boards_list from "@/components/Boards_list.vue";
import Model_window from "@/components/Model_window.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { Board } from "@/storage/interfaces";
import moment from "moment";

const router = useRouter();
const openBoard = (id: number) => {
  router.push({ path: "/task", query: { id } });
};
const boards_list = ref<Board[]>([]);

// plus click
const addBoardWindowOpened = ref(false);
const clickAddBoard = () => {
  addBoardWindowOpened.value = !addBoardWindowOpened.value;
};

// создание новой доски
const setNewBoard = (name: string, date: string) => {
  clickAddBoard();

  const newBoard: Board = {
    id: boards_list.value.length,
    board_name: name,
    date_of_board: date,
    tasks: [
      {
        task_id: 0,
        task_name: 'zero',
        date_task: moment().format('YY-MM-DD'),
        description_task: 'fivnifnvneivoe',
        task_step: 0
      },
      {
        task_id: 1,
        task_name: 'one',
        date_task: moment().format('YY-MM-DD'),
        description_task: 'fivnifnvneivoe',
        task_step: 0
      },
      {
        task_id: 2,
        task_name: 'two',
        date_task: moment().format('YY-MM-DD'),
        description_task: 'fivnifnvneivoe',
        task_step: 1
      },
      {
        task_id: 3,
        task_name: 'three',
        date_task: moment().format('YY-MM-DD'),
        description_task: 'fivnifnvneivoe',
        task_step: 2
      },

    ],
  };

  boards_list.value.push(newBoard);
  localStorage.setItem("boards", JSON.stringify(boards_list.value));
};

//удаляем доску по id
const deleteBoard = (id: number) => {
  boards_list.value = boards_list.value.filter(board => board.id !== id);
  localStorage.setItem("boards", JSON.stringify(boards_list.value));
}

//подгружаем доски
const loadBoards = () => {
  const storedBoards = localStorage.getItem("boards");
  if (storedBoards) {
    boards_list.value = JSON.parse(storedBoards);
  }
};
loadBoards();
</script>

<template>
  <Header :haveArrowBack="false" title="Мои доски"/>
  <Boards_list
    :boards_list="boards_list"
    @click-board="openBoard"
    @click-new-board="clickAddBoard()"
    @delete-board="deleteBoard"
  />
  <Model_window
    v-if="addBoardWindowOpened"
    :is-add-board-window="true"
    title="Создание новой доски"
    @save-window="setNewBoard"
    @close-window="clickAddBoard()"
  />
</template>

<style lang="scss"></style>
