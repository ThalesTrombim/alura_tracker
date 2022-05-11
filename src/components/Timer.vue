<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Counter :timeInSeconds="timeInSeconds"/>
    <Button @clicked='counterInit' icon="fas fa-play"  text='play' :disable='timerWorking' />
    <Button @clicked='counterStop' icon="fas fa-stop"  text='stop' :disable='!timerWorking' />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Counter from './Counter.vue';
import Button from './Button.vue';
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Timer',
  emits: ['onTimerFinish'],
  components: {
    Counter,
    Button
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
