import { INotification } from '@/interfaces/INotification';
import IProject from '@/interfaces/IProject';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore } from 'vuex';
import { ADD_PROJECT, ALTER_PROJECT, DELETE_PROJECT, NOTIFY } from './mutations_type';

interface State {
  projects: IProject[],
  notifications: INotification[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: [],
    notifications: []
  },
  mutations: {
    [ADD_PROJECT](state, projectName: string){
      const project = {
        id: new Date().toISOString(),
        name: projectName
      } as IProject;
      state.projects.push(project);
    },
    [ALTER_PROJECT](state, project: IProject) {
      const index = state.projects.findIndex(proj => proj.id === project.id);
      state.projects[index] = project;
    },
    [DELETE_PROJECT](state, id: string) {
      state.projects = state.projects.filter(proj => proj.id !== id);

    },
    [NOTIFY](state, newNotification: INotification) {
      newNotification.id = new Date().getTime();
      state.notifications.push(newNotification);

      setTimeout(() => {
        state.notifications = state.notifications.filter(not => not.id !== newNotification.id);
      }, 3000)
    }
  }
})

export function myUseStore(): Store<State> {
  return useStore(key);
}