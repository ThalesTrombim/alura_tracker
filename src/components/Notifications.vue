<template>
  <div class="notifications">
    <article 
      class="message" 
      :class='context[notification.type]'
      v-for="notification in notifications" 
      :key='notification.id'
    >
      <div class="message-header">
        {{ notification.title }}
      </div>
      <div class="message-body">
        {{ notification.text }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { notificationType } from '@/interfaces/INotification';
import { myUseStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Notifications',
  data() {
    return {
      context: {
        [notificationType.SUCCESS]: 'is-success',
        [notificationType.FAIL]: 'is-warning',
        [notificationType.WARNING]: 'is-danger'
      }
    }
  },
  setup() {
    const store = myUseStore();
    return {
      notifications: computed(() => store.state.notifications)
    }
  }
})
</script>

<style scoped>
  .notifications {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 1;
  }
</style>
