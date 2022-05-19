import { notificationType } from '@/interfaces/INotification'
import { store } from '@/store'
import { NOTIFY } from '@/store/mutations_type'

export const notificationMixin = {
  methods: {
    notify(type: notificationType, title: string, text: string){
      store.commit(NOTIFY, {
        title,
        text,
        type
      })
    }
  }
}