<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="title">Мои доски</div>
    <div class="profil">П</div>
  </div>
</template>

<style scoped lang="scss">
.header{
    height: 101px;
    width: 92vw;
    margin: 0 auto;
    background: linear-gradient(90deg, rgba(255, 75, 75, 0.0705) 0%, rgba(255, 111, 255, 0.0345) 31%, rgba(43, 163, 255, 0.0615) 68.5%, rgba(255, 45, 157, 0.066) 100%);
    border-radius: 9px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;

  .title{
    color: rgba(184, 0, 0, 0.47);
    font-size: 64px;
  }
  .profil{
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
  }
}
</style>