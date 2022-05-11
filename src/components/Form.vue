<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input 
          type="text" 
          class="input" 
          placeholder="Qual tarefa você deseja iniciar"
          v-model="description"
        >
      </div>
      <div class="column">
        <Timer @onTimerFinish="finishTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Timer from './Timer.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Form',
  components: {
    Timer
  },
  data () {
    return {
      description: ''
    }
  },
  emits: ['onSaveTask'],
  methods: {
    finishTask (time: number) : void {
      this.$emit('onSaveTask', {
        durationInSeconds: time,
        description: this.description
      })
      this.description = '';
    }
  }
})
</script>

<style>
.form {
  background: var(--bg-primary);
  color: var(--text-primary);
}
</style>