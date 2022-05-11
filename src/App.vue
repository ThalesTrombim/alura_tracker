<template>
  <main class='columns is-gapless is-multiline' >
    <div class='colomn is-one-quarter' >
      <SideBar />
    </div>
    <div class='column is-three-quarter'>
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
      tasks: [] as ITask[]
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
    }
  }
});
</script>

<style>
  .list {
    padding: 1.25rem
  }
</style>
