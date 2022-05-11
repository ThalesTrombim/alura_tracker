<template>
  <Form @onSaveTask="saveTask" />
  <div class="list">
    <Task v-for="(task, i) in tasks" :key="i" :task="task" />
    <Box v-if="listIsEmpty">
      Você não está muito produtivo hoje :(
    </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from '../components/Form.vue';
import Task from '../components/Task.vue';
import ITask from '@/interfaces/ITask'
import Box from '../components/Box.vue';

export default defineComponent({
  components: { Form, Task, Box },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tasks",
  data() {
    return {
      tasks: [] as ITask[],
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
  }
});
</script>
