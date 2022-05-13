<template>
  <section>
  <form @submit.prevent='save'>
    <div class="field">
      <label for="projectName" class="label">
        Nome do projeto
      </label>
      <input 
        type="text" 
        class="input" 
        v-model="projectName" 
        id="projectName"
      />
    </div>
    <div class="field">
      <button class="button" type="submit">
        Salvar
      </button>
    </div>
  </form>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { myUseStore } from '@/store';
import { ADD_PROJECT, ALTER_PROJECT, NOTIFY } from '@/store/mutations_type';
import { notificationType } from '@/interfaces/INotification';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Form',
  props: {
    id: {
      type: String
    }
  },
  mounted() {
    if(this.id){
      const project = this.store.state.projects.find(project => project.id === this.id)
      this.projectName = project?.name || '';
    }
  },
  data() {
    return {
      projectName: '',
    }
  },
  methods: {
    save() {
      if(this.id){
        this.store.commit(ALTER_PROJECT, {
          id: this.id,
          name: this.projectName
        });
      } else {
        this.store.commit(ADD_PROJECT, this.projectName);
      }
      this.projectName = '';
      this.store.commit(NOTIFY, {
        title: 'Novo projeto adicionado',
        text: 'Só dale',
        type: notificationType.SUCCESS
      })
      this.$router.push('/projetos')
    }
  },
  setup() {
    const store = myUseStore();
    return {
      store
    }
  }
})
</script>
