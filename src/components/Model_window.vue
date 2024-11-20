<script setup lang="ts">
import { ref } from "vue";
import moment from "moment";

const props = withDefaults(
  defineProps<{
    isAddBoardWindow?: boolean;
    title: string;
  }>(),
  {
    isAddBoardWindow: false,
  }
);

const name = ref();
const today_date = ref(moment().format('YYYY-MM-DD'));
const date = ref()
const description = ref();

const saveWindow = () => {
    if(props.isAddBoardWindow){
        console.log(name.value);
        emits('save-window', name.value, today_date.value)
    } else{
        emits('save-window', name.value, date.value, description.value)
    }
}

const emits = defineEmits(['save-window', 'close-window'])
</script>

<template>
  <div class="model_window">
    <div class="window_body">
      <div class="window_header">
        <div class="title">{{ props.title }}</div>
        <div class="btns">
          <div class="save" @click="saveWindow">
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12.8475L10.6275 22L22 2"
                stroke="#B80000"
                stroke-opacity="0.56"
                stroke-width="5"
              />
            </svg>
          </div>
          <div class="exit" @click="emits('close-window')">+</div>
        </div>
      </div>
      <div class="top_inputs">
        <input type="text" placeholder="Название доски" v-model="name" />
        <input
          type="date"
          v-if="isAddBoardWindow"
          v-model="today_date"
          :disabled="true"
        />
        <input
          type="date"
          v-if="!isAddBoardWindow"
          v-model="date"
        />
      </div>
      <textarea
        class="description"
        v-if="!isAddBoardWindow"
        placeholder="Описание"
        v-model="description"
      />
    </div>
  </div>
</template>

<style lang="scss">
.model_window {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(148, 148, 148, 0.68);
  top: 0;
  left: 0;
  .window_body {
    background-color: rgba(255, 251, 246, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 70vw;
    height: 80vh;
    min-height: fit-content;
    min-height: fit-content;
    border-radius: 30px;
    padding: 30px;
    .window_header {
      color: rgba(184, 0, 0, 0.56);
      font-size: 48px;
      display: flex;
      justify-content: space-between;
      padding-bottom: 1em;
      .exit {
        transform: rotate(45deg);
        width: min-content;
        font-weight: 600;
        cursor: pointer;
      }
      .save{
        padding-bottom: 0.3em;
        cursor: pointer;
      }
      .btns {
        display: flex;
        gap: 0.6em;
      }
    }
    .top_inputs {
      display: flex;
      gap: 0.2em;
      justify-content: space-between;
      margin-bottom: 1em;
      width: 100%;
      input {
        width: 47%;
      }
    }
    input,
    textarea {
      background-color: rgba(115, 12, 12, 0.227);
      border: 0;
      color: rgba(67, 9, 9, 0.836) !important;
      border-radius: 12px;
      height: 55px;
      font-size: 28px;
      padding: 0 0.5em;
      &::placeholder {
        color: rgba(67, 9, 9, 0.818);
      }
    }
    .description {
      min-height: 50%;
      width: calc(100% - 29px);
      resize: none;
      font-size: 30px;
      padding: 0.4em 0.5em;
    }
  }
}
</style>
