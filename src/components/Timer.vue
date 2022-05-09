<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Counter :timeInSeconds="timeInSeconds"/>
    <button class="button" @click="counterInit" :disabled='timerWorking'>
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <div>play</div>
    </button>
    <button class="button" @click="counterStop" :disabled='!timerWorking'>
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <div>stop</div>
    </button>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Counter from './Counter.vue';
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Timer',
  emits: ['onTimerFinish'],
  components: {
    Counter
  },
  data () {
    return {
      timeInSeconds: 0,
      counter: 0,
      timerWorking: false
    }
  },
  
  methods: {
    counterInit () {
      this.timerWorking = true;
      this.counter = setInterval(() => {
        this.timeInSeconds++
      }, 1000)
    },

    counterStop () {
      this.timerWorking = false;
      clearInterval(this.counter);
      this.$emit('onTimerFinish', this.timeInSeconds);
      this.timeInSeconds = 0;
    }
  }
})
</script>