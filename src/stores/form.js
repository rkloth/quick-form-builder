import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useFormStore = defineStore('form', {
  state: () => ({
    form: []
  }),

  actions: {
    addQuestion(item) {
      let newItem = {
        type: item.type,
        id: uuidv4()
      }

      this.form.push(newItem)
      console.log('addQuestion', this.form)
    },

    moveQuestion() {
      // TODO: Implement
      console.log('moveQuestion')
    }
  }
})
