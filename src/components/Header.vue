<script setup lang="ts">
const props = defineProps<{
  title: string;
  haveArrowBack: boolean
}>();
const emit = defineEmits(['arrow-back-click'])
</script>

<template>
  <div class="header">
    <div class="left_side">
      <div class="arrow_back" v-if="haveArrowBack" @click="emit('arrow-back-click')">
        <svg
          width="74"
          height="17"
          viewBox="0 0 74 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74 8.5L6 8.5M6 8.5L21.2653 15M6 8.5L21.2653 2"
            stroke="#B80000"
            stroke-opacity="0.47"
            stroke-width="4"
          />
        </svg>
      </div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="profil">П</div>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 101px;
  width: 92vw;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    rgba(255, 75, 75, 0.0705) 0%,
    rgba(255, 111, 255, 0.0345) 31%,
    rgba(43, 163, 255, 0.0615) 68.5%,
    rgba(255, 45, 157, 0.066) 100%
  );
  border-radius: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  .left_side{
    display: flex;
    align-items: center;
    gap: 2em;
    .arrow_back{
      cursor: pointer;
    }
  }
  .title {
    color: rgba(184, 0, 0, 0.47);
    font-size: 64px;
  }
  .profil {
    background-color: rgba(231, 157, 157, 0.35);
    color: rgba(184, 0, 0, 0.47);
    width: 73px;
    height: 73px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 27px;
    cursor: pointer;
  }
}
</style>
