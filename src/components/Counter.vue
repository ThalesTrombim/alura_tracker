<template>
  <section>
    <strong class='display'>
      {{ currentTime }}
    </strong>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Counter',
  props: {
    timeInSeconds: {
      type: Number,
      default: 0
    }
  },
  computed: {
    currentTime () : string {
      return new Date(this.timeInSeconds * 1000).toISOString().substr(11, 8)
    }
  },
})
</script>

<style>
.display {
  background: var(-bg-primary);
  color: var(--text-primary);
}
</style>
