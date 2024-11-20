<script setup lang="ts">
import { Board } from "@/storage/interfaces";
import { TaskStatus } from "@/storage/interfaces";

const props = defineProps<{
  board: Board;
}>();

const columns = [
    {
        num: 1,
        title: "Не выполнено",
        class: 'red',
        step: TaskStatus.NotStarted
    },
    {
        num: 2,
        title: "В процессе",
        class: 'yellow',
        step: TaskStatus.InProgress
    },
    {
        num: 3,
        title: "Завершено",
        class: 'green',
        step: TaskStatus.Completed
    },
]

const emits = defineEmits(["click-task", "click-new-task", "delete-task"]);
</script>

<template>
  <div class="tasks_list">
    <div class="btns">
      <div class="btn" @click="emits('click-new-task')">+</div>
    </div>
    <div class="list">
      <div class="column" v-for="column, index in columns" :key="index" :class="column.class">
        <div class="column_header">
          <div class="num">{{ column.num }}</div>
          <div class="column_title">{{ column.title }}</div>
        </div>
        <div class="tasks">
          <div
            class="task"
            v-for="(task, index) in props.board.tasks"
            :key="index"
            v-show="task.task_step===column.step"
          >
            <div class="text_block">
              <div>{{ task.task_name }}</div>
              <div>{{ task.date_task }}</div>
            </div>
            <div class="column_btns">
              <div class="exit btn">+</div>
              <div class="arrow btn" v-if="task.task_step === TaskStatus.NotStarted">
                <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4H24.5M24.5 4L19 1M24.5 4L19 7" stroke="#BD1212" stroke-opacity="0.47" stroke-width="2"/>
                </svg>

              </div>
              <div class="arrow btn" v-if="task.task_step === TaskStatus.InProgress">
                <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4H24.5M24.5 4L19 1M24.5 4L19 7" stroke="#BA9204" stroke-opacity="0.69" stroke-width="2"/>
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tasks_list {
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
    gap: 15px;
    
    .column{
        width: 30%;
        height: 600px;
        padding: 1em;
        border-radius: 19px;
        .column_header{
            display: flex;
            padding-bottom: 0.5em;
            align-items: center;
            gap: 1em;
            .num{
                font-size: 38px;
                border-radius: 50%;
                width: 74px;
                height: 74px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
            }
            .column_title{
                font-size: 43px;
                font-weight: 600;
                letter-spacing: 0.05em;
            }
        }
        .tasks{
            display: flex;
            flex-direction: column;
            gap: 0.5em;
            align-items: center;
            .task{
                border-radius: 12px;
                font-size: 20px;
                letter-spacing: 0.05em;
                display: flex;
                justify-content: space-between;
                padding: 0.5em;
                width: 94%;
                cursor: pointer;
                .text_block{
                    font-weight: 600;
                }
                .column_btns{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .btn{
                        &:hover{
                            opacity: 100%;
                        }
                    }
                    .exit{
                        font-size: 28px;
                        transform: rotate(45deg);
                    }
                }
            }
        }
    }
    .red{
        background-color: rgba(247, 214, 214, 1);
        color: rgba(184, 0, 0, 0.56);
        .num, .task{
            background-color: rgba(231, 157, 157, 0.35);
        }
        .btn{
            &:hover{
                color: rgba(184, 0, 0);
            }
        }
    }
    .yellow{
        background-color: rgba(255, 248, 151, 0.6);
        color: rgba(163, 128, 3, 0.69);
        .num, .task{
            background-color: rgba(244, 237, 161, 1);
        }
        .btn{
            &:hover{
                color: rgba(163, 128, 3);
            }
        }
    }
    .green{
        background-color: rgba(210, 237, 202, 1);
        color: rgba(102, 153, 86, 1);
        .num, .task{
            background-color: rgba(194, 229, 183, 1);
        }
        .btn{
            &:hover{
                color: rgb(85, 137, 70);
            }
        }
    }
  }
}
</style>
