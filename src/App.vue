<template>
  <main class='columns is-gapless is-multiline' :class="{'dark-mode' : darkModeActive}">
    <div class='colomn is-one-quarter' >
      <SideBar @onThemeSwitched="switchTheme" />
    </div>
    <div class='column is-three-quarter content'>
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from './components/SideBar.vue';

export default defineComponent({
  components: { SideBar },
  name: "App",
  data() {
    return {
      darkModeActive: false
    }
  },
  methods: {
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
