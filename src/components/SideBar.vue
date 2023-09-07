<template>
  <aside class="aside">
    <h2 class="aside__title">Поиск сотрудников</h2>
    <TheSearch />
  </aside>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import TheSearch from './TheSearch.vue'
import { computed, ref, watch } from 'vue'
import { type State } from '@/store/'

const store = useStore<State>()

const searchValue = computed(() => store.state.searchValue)

watch(searchValue, () => {
  console.log(store.state.searchValue)
})
</script>

<style lang="scss" scoped></style>
