<script setup lang="ts">
import useTodos from 'src/store/useTodos'
import { TodoStatus } from 'src/types/types'


import Draggable from 'vuedraggable'

import KanbanCreate from './KanbanCreate.vue'

interface Props {
  status: TodoStatus
}

const props = defineProps<Props>()

const { getTodoByStatus, deleteTodo, updateTodo } = useTodos()

const todoList = getTodoByStatus(props.status)

const groupLabel = {
  [TodoStatus.Pendente]: 'Pendente',
  [TodoStatus.EmProgresso]: 'EmProgresso',
  [TodoStatus.Completo]: 'Completado',
}

const onDraggableChange = (payload: any) => {
  if (payload?.added?.element) {
    // update todo status
    updateTodo(payload?.added?.element, props.status)
  }
}
</script>
<template>
  <div class="group-wrapper">
    <h3>{{ groupLabel[props.status] }}</h3>

    <Draggable
      class="draggable"
      :list="todoList"
      group="todos"
      itemkey="id"
      @change="onDraggableChange"
    >
      <template #item="{ element: todo }">
        <li>
          {{ todo.title }}
          {{ todo.status }}
          <span class="delete-icon" @click="deleteTodo(todo)">x</span>
          <div>
            <span class="todo-description">{{ todo.description }}</span>
          </div>
        </li>
      </template>
    </Draggable>

    <KanbanCreate :status="props.status" />
  </div>
</template>
<style scoped>
.group-wrapper {
  flex: 1;
  padding: 20px;
  background-color: rgb(56, 80, 103);
  width: 300px;
}

.group-wrapper li {
  list-style-type: none;
  background-color: aliceblue;
  color: rgb(56, 80, 103);
  padding: 2px 5px;
  cursor: grab;
  margin-bottom: 10px;
}

.draggable {
  min-height: 200px;
}

.delete-icon {
  float: right;
  cursor: pointer;
}

.todo-description {
  font-size: 12px;
}
</style>
