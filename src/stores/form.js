import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useFormStore = defineStore('form', {
  state: () => ({
    questions: []
  }),

  actions: {
    addQuestion(item) {
      let newItem = {
        type: item.type,
        id: uuidv4()
      }

      this.questions.push(newItem)
      console.log('addQuestion', this.questions)
    },

    moveQuestion() {
      // TODO: Implement
      console.log('moveQuestion')
    },

    updateQuestion(id, attributes) {
      let index = this.questions.findIndex((item) => item.id === id)
      this.questions[index] = {
        ...this.questions[index],
        ...attributes
      }
      console.log('updateQuestion', this.questions)
    }
  }
})
