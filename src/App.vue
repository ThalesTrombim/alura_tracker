<template>
  <main class='columns is-gapless is-multiline' :class="{'dark-mode' : darkModeActive}">
    <div class='colomn is-one-quarter' >
      <SideBar @onThemeSwitched="switchTheme" />
    </div>
    <div class='column is-three-quarter content'>
      <Form @onSaveTask="saveTask" />
      <div class="list">
        <Task v-for="(task, i) in tasks" :key="i" :task="task" />
        <Box v-if="listIsEmpty">
          Você não está muito produtivo hoje :(
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from './components/SideBar.vue';
import Form from './components/Form.vue';
import Task from './components/Task.vue';
import ITask from '@/interfaces/ITask'
import Box from './components/Box.vue';

export default defineComponent({
  components: { SideBar, Form, Task, Box },
  name: "App",
  data() {
    return {
      tasks: [] as ITask[],
      darkModeActive: false
    }
  },
  computed: {
    listIsEmpty() :boolean {
      return this.tasks.length === 0;
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task)
    },
    switchTheme(mode: boolean) {
      this.darkModeActive = mode;
    }
  }
});
</script>

<style>
  .list {
    padding: 1.25rem
  }
  main {
    --bg-primary: #FFF;
    --text-primary: #000;
  }
  main.dark-mode {
    --bg-primary: #2B2D42;
    --text-primary: #DDD;
  }

  .content {
    background: var(--bg-primary)
  }
</style>
