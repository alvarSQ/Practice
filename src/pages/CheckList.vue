<template>
  <div class="check-list">
    <div style="width: 85%">
      <CheckListUI
        @saveTask="saveNewTask"
        @addTaskInput="addTask"
        @delTask="taskDel"
        :tasks="tasks"
      />
    </div>
  </div>
</template>

<script>
import CheckListUI from '@/pages/UI/CheckListUI.vue'

export default {
  components: {
    CheckListUI
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          task: '',
          isEdit: false,
          checked: false
        }
      ]
    }
  },
  methods: {
    taskDel(id) {
      this.tasks = this.tasks.filter(task => {
        return task.id !== id
      })
    },
    addTask(task) {
      let id = this.tasks.length + 1
      let isEdit = false

      if (task == '') {
        return
      } else {
        this.tasks.push({
          id,
          task,
          isEdit
        })
      }
    },
    saveNewTask(id, taskNew, task) {
      this.tasks = this.tasks.map(task => {
        if (task.id === id) {
          task.task = taskNew
        }
        task.isEdit = false
        return task
      })
    },
    getTasks() {
      const localTasks = localStorage.getItem('tasks')
      if (localTasks) {
        this.tasks = JSON.parse(localTasks)
      }
    }
  },
  mounted() {
    this.getTasks()
  },
  watch: {
    tasks: {
      handler(updateList) {
        localStorage.setItem('tasks', JSON.stringify(updateList))
      },
      deep: true
    }
  }
}
</script>

<style>
.check-list {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
