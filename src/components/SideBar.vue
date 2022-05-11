<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo do Alura tracker, básicamente uma letra V estilazada" />
    </h1>
    <button class="button" @click='switchTheme'>
      {{ textButton }}
    </button>
  </header>
</template>

<script lang='ts' >
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SideBar',
    emits: ['onThemeSwitched'],
    data(){
      return {
        darkModeActive: false
      }
    },
    computed: {
      textButton() {
        return !this.darkModeActive ? 'Ativar modo escuro' : 'Desativar modo escuro'
      }
    },
    methods: {
      switchTheme() {
        this.darkModeActive = !this.darkModeActive;
        this.$emit('onThemeSwitched', this.darkModeActive)
      }
    }
  })
</script>

<style scoped>
  header {
    background: #0D3B66;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
</style>