<template>
  <Box>
    <div class="columns">
      <div class="column is-7">
        {{ task.description || 'Tarefa sem descrição' }}
      </div>
      <div class="column">
        <Counter :timeInSeconds="task.durationInSeconds"/>
      </div>
    </div>
  </Box>
</template>

<script lang='ts'>
import ITask from '@/interfaces/ITask';
import { defineComponent, PropType } from 'vue';
import Counter from './Counter.vue';
import Box from './Box.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Task',
  components: {
    Counter,
    Box
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true
    }
  }
})
</script>
