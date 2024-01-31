<template>
  <form class="note-form">
    <input required v-model="newTaskInput" name="newTaskInput" />
    <button
      class="btn btnPrimary"
      @click="$emit('addTaskInput', newTaskInput), inputTaskClear()"
    >
      Добавить
    </button>
  </form>
  <ul style="margin-top: 40px">
    <li style="margin-top: 20px" v-for="task in tasks" :key="task.id">
      <template v-if="task.task">
        <template v-if="!task.isEdit">
          <div class="navbar-content">
            <div class="taskList">
                <abbr title="Задание выполненно">
              <input
                style="width: 5%; margin-bottom: 0; text-align: center"
                type="checkbox"
                v-model="task.checked"
                :name="task.id"
              />
              </abbr>
              <span :class="{ taskEnd: task.checked }">{{ task.task }}</span>
              <span class="delBtn" @click="$emit('delTask', task.id)"><abbr title="Удалить задание">&#8194;&#10060;</abbr></span>
            </div>
            <button class="btn" @click="editTask(task)">Изменить</button>
          </div>
        </template>
        <template v-else>
          <div class="navbar-content">
            <input class="taskList" style="width: 80%" v-model="newTask" />
            <button
              class="btn"
              @click="$emit('saveTask', task.id, newTask, task)"
            >
              Сохранить
            </button>
          </div>
        </template>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  emits: ['delTask', 'saveTask', 'addTaskInput'],
  props: {
    tasks: Array
  },
  data() {
    return {
      newTask: '',
      newTaskInput: ''
    }
  },
  methods: {
    inputTaskClear() {
      this.newTaskInput = ''
    },
    editTask(task) {
      task.isEdit = true
      this.newTask = task.task
    }
  }
}
</script>

<style>
.taskList {
  width: 100%;
  margin: 0px;
}
.taskEnd {
  text-decoration: line-through;
}
.delBtn {
    color: white; 
    font-size: 14px;
    cursor: pointer; 
}
</style>
