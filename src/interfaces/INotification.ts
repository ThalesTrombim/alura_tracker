export enum notificationType {
  SUCCESS,
  FAIL,
  WARNING
}

export interface INotification {
  title: string
  text: string
  type: notificationType
  id: number
}