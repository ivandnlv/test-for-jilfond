<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
import TheEmployee from '@/components/TheEmployee.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="container">
    <TheHeader />
    <main class="main">
      <SideBar />
      <TheEmployee />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1266px;
  margin: 0 auto 46px auto;
  @media (max-width: 1300px) {
    max-width: 1100px;
  }
}

.main {
  min-height: 575px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 291px 1fr;
}
</style>
