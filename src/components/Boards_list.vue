<script setup lang="ts">
import moment from 'moment'

const boards_list = [
  {
    board_name: 'Name1',
    date_of_board: moment('2023-10-01'),
    tasks: [
      {
        task_name: 'Task1',
        date_task: moment('2023-10-02'),
        description_task: 'descriptiondescriptiondescriptiondescription1',
        task_step: 0
      },
      {
        task_name: 'Task2',
        date_task: moment('2023-10-03'),
        description_task: 'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription2',
        task_step: 1
      },
      {
        task_name: 'Task3',
        date_task: moment('2023-10-04'),
        description_task: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription3',
        task_step: 3
      },
    ]
  },
  
  {
    board_name: 'Name2',
    date_of_board: moment('2023-10-08'),
    tasks: [
      {
        task_name: 'Task1',
        date_task: moment('2023-10-05'),
        description_task: 'fj vnw;rnvj[worinv[wrbx wjpri n[wrigmbvingil g]]]',
        task_step: 0
      }
    ]
  },
  {
    board_name: 'Name3',
    date_of_board: moment('2023-10-03'),
    tasks: [
      {
        task_name: 'Name_task',
        date_task: moment('2023-10-06'),
        description_task: 'elmvpoenbpvof,vhjb v rkhv urbieybckusdbl',
        task_step: 0
      }
    ]
  },
  // {
  //   board_name: '',
  //   date_of_board: '',
  //   tasks: [
  //     {
  //       task_name: '',
  //       date_task: '',
  //       description_task: '',
  //       task_step: 0
  //     }
  //   ]
  // }
]
</script>

<template>
  <div class="boards_list">
    <div class="btns">
      <div class="btn">+</div>
      <div class="btn">
        <svg
          width="36"
          height="34"
          viewBox="0 0 36 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.09424 23.4464H7.63054V26.6309H11.6089V29.4174"
            stroke="#B80000"
          />
          <path
            d="M4.53628 31.4077L2.32609 29.4174L1.44202 32.6019L4.53628 31.4077Z"
            fill="#B80000"
            stroke="#B80000"
          />
          <path d="M22.6598 6.72765L29.2904 13.0967" stroke="#B80000" />
          <path
            d="M24.428 4.73732L31.0586 11.1064M1 33L4.09426 23.0483L27.9643 1.15472C29.7324 -0.0394747 36.805 6.01113 35.0369 7.92184L11.6089 29.8155L1 33Z"
            stroke="#B80000"
          />
        </svg>
      </div>
    </div>
    <div class="list">
      <div class="board" v-for="(board, index) in boards_list" :key="index">
        <div class="board_name">{{ board.board_name }}</div>
        <div class="board_date">{{ board.date_of_board.format('DD.MM.YY')}} г.</div>
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
    .btn{
      cursor: pointer;
    }
  }
  .list{
    display: flex;
    flex-direction: column;
    gap: 15px;
    .board{
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
      &:hover{
        background-color: rgba(202, 172, 172, 0.522);
        transition: background-color 0.5s;
      }
    }
  }
}
</style>
