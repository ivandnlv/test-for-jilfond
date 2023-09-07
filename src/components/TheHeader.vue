<template>
  <header class="header">
    <RouterLink to="/">
      <img class="header__logo" src="/icons/logo.svg" alt="logo" />
    </RouterLink>
    <span class="header__username">Пользователь</span>
  </header>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.header {
  padding: 45px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &__logo {
    width: 171px;
    height: 39px;
  }
  &__username {
    color: #333;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
