import IProject from '@/interfaces/IProject';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore } from 'vuex';

interface State {
  projects: IProject[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: []
  },
  mutations: {
    'ADD_PROJECT'(state, projectName: string){
      const project = {
        id: new Date().toISOString(),
        name: projectName
      } as IProject;
      state.projects.push(project);
    },
    'ALTER_PROJECT'(state, project: IProject) {
      const index = state.projects.findIndex(proj => proj.id === project.id);
      state.projects[index] = project;
    }
  }
})

export function myUseStore(): Store<State> {
  return useStore(key);
}