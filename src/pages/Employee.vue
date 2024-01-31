<template>
  <EmployeeUI
    @delUser="handDelUser"
    @saveUser="changeUser"
    @addInput="add"
    :users="users"
  />
</template>

<script>
import EmployeeUI from '@/pages/UI/EmployeeUI.vue'

export default {
  components: {
    EmployeeUI
  },
  data() {
    return {
      name: ' ',
      surn: 'smit',
      age: 0,
      users: [
        {
          id: 1,
          name: 'name1',
          salary: 100,
          age: 30,
          isEdit: false
        },
        {
          id: 2,
          name: 'name2',
          salary: 200,
          age: 40,
          isEdit: false
        },
        {
          id: 3,
          name: 'name3',
          salary: 300,
          age: 50,
          isEdit: false
        }
      ]
    }
  },
  methods: {
    unShow() {
      this.name = !this.name
    },
    handDelUser(id) {
      this.users = this.users.filter(user => {
        return user.id !== id
      })
    },
    changeUser(id, name, salary, user) {
      this.users = this.users.map(user => {
        if (user.id === id) {
          user.name = name
          user.salary = salary
        }
        user.isEdit = false
        return user
      })
    },
    add(name, salary) {
      let id = this.users.length + 1
      let isEdit = false
      if (name == '' || salary == '') {
        return
      } else {
        this.users.push({
          id,
          name,
          salary,
          isEdit
        })
      }
    }
  }
}
</script>
