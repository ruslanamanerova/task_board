<script setup lang="ts">
import { Board } from "@/storage/interfaces";

const props = defineProps<{
  boards_list: Board[]
}>()
const emits = defineEmits(["click-board", "click-new-board", 'delete-board']);
</script>

<template>
  <div class="boards_list">
    <div class="btns">
      <div class="btn" @click="emits('click-new-board')">+</div>
    </div>
    <div class="list">
      <div
        class="board"
        v-for="(board, index) in props.boards_list"
        :key="index"
        @dblclick="emits('click-board', board.id)"
      >
        <div class="board_name">{{ board.board_name }}</div>
        <div class="right">
          <div class="board_date">
            {{ board.date_of_board }}
          </div>
          <div class="delete_board" @click="emits('delete-board', board.id)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.boards_list {
  min-height: calc(90vh - 116px);
  width: 92vw;
  margin-inline: auto;
  margin-top: 15px;
  background: linear-gradient(
    90deg,
    rgba(255, 75, 75, 0.0705) 0%,
    rgba(255, 111, 255, 0.0345) 31%,
    rgba(43, 163, 255, 0.0615) 68.5%,
    rgba(255, 45, 157, 0.066) 100%
  );
  border-radius: 9px;
  padding: 1em 2em;

  .btns {
    color: rgba(184, 0, 0, 0.47);
    font-size: 64px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    .btn {
      cursor: pointer;
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .board {
      background-color: rgba(202, 172, 172, 0.26);
      border-radius: 15px;
      height: 73px;
      color: rgba(184, 0, 0, 0.47);
      font-size: 25px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      cursor: pointer;
      &:hover {
        background-color: rgba(202, 172, 172, 0.522);
        transition: background-color 0.5s;
      }
      .right{
        display: flex;
        align-items: center;
        gap: 1.5em;
        .delete_board{
          font-size: 35px;
          width: min-content;
          transform: rotate(45deg);
          z-index: 3;
          &:hover{
            color: rgb(255, 0, 0);
            transition: all 0.5s;
          }
        }
      }
    }
  }
}
</style>
