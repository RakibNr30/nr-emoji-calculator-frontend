<script>
import axios from 'axios'

export default {
  data() {
    return {
      result: 0,
      errors: [],
      formData: {
        operand_1: 0,
        operand_2: 0,
        operator: '+',
      },
      options: [
        {text: '👽', value: '+'},
        {text: '💀', value: '-'},
        {text: '👻', value: '*'},
        {text: '😱', value: '/'}
      ]
    }
  },

  methods: {
    submit(e) {
      axios.post('http://127.0.0.1:8000/api/calculation', this.formData)
      .then((res) => {
        this.result = res.data.result
        this.errors = []
      })
      .catch((error) => {
        this.errors = error.response.data.errors
        this.result = undefined
      })
      e.preventDefault()
    }
  }
}
</script>

<template>
  <main>
    <form class="form" @submit="submit" method="post">
      <div class="form-control">
        <input type="text" v-model="formData.operand_1" placeholder="Enter 1st operand" class="input" />
      </div>
      <div class="form-control">
        <select v-model="formData.operator">
          <option v-for="option in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-control">
        <input type="text" v-model="formData.operand_2" placeholder="Enter 2nd operand" class="input" />
      </div>
      <div class="form-control">
        <input type="submit" value="Calculate" class="btn btn-block" />
      </div>

      <div class="form-control" v-if="result !== undefined">
        <p>Result: {{ result }}</p>
      </div>

      <ul class="error">
        <li v-for="error in errors">{{ error.message }}</li>
      </ul>

    </form>
  </main>
</template>
