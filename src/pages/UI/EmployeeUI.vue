<template>
  <form>
  <input required v-model="newNameInput" />
  <input required v-model="newSalaryInput" />

  <button @click="$emit('addInput', newNameInput, newSalaryInput), inputClear()">Сохранить</button>
  </form>
  <ul style="margin-top: 20px">
    <li v-for="user in users" :key="user.id">
      <template v-if="!user.isEdit">
        {{ user.name }}
        {{ user.salary }}
        <button @click="edit(user)">Edit</button>
        <button @click="$emit('delUser', user.id)">Remove</button>
      </template>
      <template v-else>
        <input v-model="newName" />
        <input v-model="newSalary" />
        <button @click="$emit('saveUser', user.id, newName, newSalary, user)">
          Save
        </button>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    users: Array
  },
  emit: {

  },
  data() {
    return {
      // isEdit: false,
      newNameInput: '',
      newSalaryInput: '',
      newName: '',
      newSalary: ''
    }
  },
  methods: {
    edit(user) {
      user.isEdit = true
      this.newName = user.name
      this.newSalary = user.salary
    },
    inputClear() {
      this.newNameInput = ''
      this.newSalaryInput = ''
    }
  }
}
</script>
