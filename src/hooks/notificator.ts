import { notificationType } from '@/interfaces/INotification'
import { store } from '@/store';
import { NOTIFY } from '@/store/mutations_type';

type Notificator = {
  notify: (type: notificationType, title: string, text: string) => void;
}

export default () : Notificator => {
  const notify = (type: notificationType, title: string, text: string) : void => {
    store.commit(NOTIFY, {
      title,
      text,
      type
    })
  }
  
  return {
    notify
  }
}