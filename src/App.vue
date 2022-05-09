<template>
  <main class='columns is-gapless is-multiline' >
    <div class='colomn is-one-quarter' >
      <SideBar />
    </div>
    <div class='column is-three-quarter'>
      <Form />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from './components/SideBar.vue';
import Form from './components/Form.vue';

export default defineComponent({
  components: { SideBar, Form },
  name: "App",
});
</script>

<style></style>
