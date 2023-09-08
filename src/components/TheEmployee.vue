<template>
  <div class="employee">
    <button class="btn" @click="onBackClick" v-if="status !== 'nothing'">Сбросить</button>
    <div class="employee__content" v-if="status === 'success' && employee">
      <div class="wrapper">
        <div class="employee__content-image">
          <img src="/images/no-image-big.png" alt="no-image" />
        </div>
        <div class="employee__content-info">
          <h3 class="employee__content-info__title">{{ employee.name }}</h3>
          <p class="employee__content-info__text"><b>email:</b> {{ employee.email }}</p>
          <p class="employee__content-info__text"><b>phone:</b> {{ employee.phone }}</p>
          <h3 class="employee__content-info__title">О себе:</h3>
          <p class="employee__content-info__text">
            Данный сотрудник не предоставил информации о себе
          </p>
        </div>
      </div>
    </div>
    <div class="employee__empty" v-else>
      <p v-if="searchValue && status === 'nothing'">
        Выберите сотрудника, чтобы посмотреть его профиль
      </p>
      <p v-if="!searchValue && status === 'nothing'">
        Для начала, найдите сотрудника, воспользовавшись поиском
      </p>
      <p v-if="status === 'loading'">Загружаем данные о сотруднике...</p>
      <p class="error" v-if="status === 'error' && error">Произошла ошибка: {{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { State } from '@/store'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore<State>()

const employee = computed(() => store.state.employee)
const status = computed(() => store.state.employeeStatus)
const error = computed(() => store.state.employeeError)
const searchValue = computed(() => store.state.searchValue)

const onBackClick = () => {
  store.commit('resetState')
}
</script>

<style lang="scss" scoped>
@import '../assets/index.scss';

p {
  color: #76787d;
  font-size: 14px;
  font-weight: 400;
}

.employee {
  width: 100%;
  height: 100%;
  padding: $container-padding;
  &__content {
    width: 100%;
    height: 100%;

    .wrapper {
      width: inherit;
      height: inherit;
      padding: 20px 30px;
      display: flex;
      gap: 61px;
    }
    &-image {
      width: 424px;
      height: 286px;
      img {
        width: inherit;
        height: inherit;
        object-fit: cover;
      }
    }
    &-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  &__empty {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
