<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input
          type="text" 
          class="input" 
          placeholder="Qual tarefa você deseja iniciar"
          v-model="description"
        >
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Selecione o projeto</option>
            <option 
              :value="project.id"
              v-for="project in projects"
              :key='project.id'
              >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Timer @onTimerFinish="finishTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { key } from '@/store';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import Timer from './Timer.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Form',
  components: {
    Timer
  },
  data () {
    return {
      description: '',
      idProject: ''
    }
  },
  emits: ['onSaveTask'],
  methods: {
    finishTask (time: number) : void {
      this.$emit('onSaveTask', {
        durationInSeconds: time,
        description: this.description,
        project: this.projects.find(project => project.id === this.idProject)
      })
      this.description = '';
    }
  },
  setup() {
    const store = useStore(key);
    return {
      projects: computed(() => store.state.projects)
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