<script setup lang="ts">
import { TodoStatus } from 'src/types/types'
import KanbanGroup from './KanbanGroup.vue'
</script>

<template>
  <div class="q-pa-lg  ">
    <q-card class="my-card">
      <q-card-section>
        <div class="groups-wrapper">
          <KanbanGroup :status="TodoStatus.Pendente" />
          <KanbanGroup :status="TodoStatus.EmProgresso" />
          <KanbanGroup :status="TodoStatus.Completo" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style scoped>
.groups-wrapper {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}
</style>
