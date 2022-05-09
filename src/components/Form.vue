<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar">
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>{{ currentTime }}</strong>
          </section>
          <button class="button" @click="counterInit">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <div>play</div>
          </button>
          <button class="button" @click="counterStop">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <div>stop</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Form',
  data () {
    return {
      timeInSeconds: 0,
      counter: 0
    }
  },
  computed: {
    currentTime () : string {
      return new Date(this.timeInSeconds * 1000).toISOString().substr(11, 8)
    }
  },
  methods: {
    counterInit () {
      this.counter = setInterval(() => {
        this.timeInSeconds++
      }, 1000)
    },

    counterStop () {
      clearInterval(this.counter)
    }
  }
})
</script>