<template>
  <div class="results">
    <div v-if="status === 'success' && results?.length" class="results__content">
      <ResultsItem
        v-for="result in results"
        :key="result.id"
        :email="result.email"
        :name="result.name"
        :id="result.id"
      />
    </div>
    <div v-else-if="status === 'success' && !results?.length" class="results__empty">
      <p>Ничего не найдено</p>
    </div>
    <div v-else-if="status === 'nothing'" class="results__empty">
      <p>Для начала, воспользуйтесь поиском</p>
    </div>
    <div v-if="status === 'error'" class="results__error">
      <p>{{ error }}</p>
    </div>
    <div v-if="status === 'loading'">
      <p>Загрузка...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { State } from '@/store'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import ResultsItem from './ResultsItem.vue'

const store = useStore<State>()

const results = computed(() => store.state.results)
const status = computed(() => store.state.resultsStatus)
const error = computed(() => store.state.resultsError)

watch(results, () => console.log(results))
</script>

<style lang="scss" scoped>
p {
  color: #76787d;
  font-size: 14px;
  font-weight: 400;
}
.results {
  width: 100%;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  &__error {
    background: red;
    padding: 10px;
    border-radius: 5px;
    p {
      color: #fff;
    }
  }
}
</style>
