<template>
  <div class="wrapper">
    <aside class="aside">
      <h2 class="aside__title">Поиск сотрудников</h2>
      <TheSearch />
      <h2 class="aside__title">Результаты</h2>
      <ResultsList />
    </aside>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import TheSearch from './TheSearch.vue'
import { computed, watch } from 'vue'
import { type State } from '@/store/'
import ResultsList from './ResultsList.vue'

const store = useStore<State>()

const searchValue = computed(() => store.state.searchValue)

watch(searchValue, () => {
  store.dispatch('fetchUsersForResults')
})
</script>

<style lang="scss" scoped>
@import '../assets/index.scss';

h2 {
  color: #333;
  font-size: 16px;
  font-weight: 600;
}

.wrapper {
  width: 100%;
  border-right: 1px solid #dededd;
}
.aside {
  padding: $container-padding;
  width: 290px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}
</style>
