<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo do Alura tracker, básicamente uma letra V estilazada" />
    </h1>
    <button class="button" @click='switchTheme'>
      {{ textButton }}
    </button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/"  class="link">
            <i class="fas fa-tasks"></i>
            Tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
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
  .panel li {
    margin: 8px 0;
  }
  .link {
    color: #FFF;
  }
  .link:hover {
    color: #FAF0CA;
  }
  .link.router-link-active {
    color: #FAF0CA;
  }

  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
</style>