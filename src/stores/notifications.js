import { acceptHMRUpdate, defineStore } from "pinia"
import { ref } from "vue"

export const useNotificationStore = defineStore("notifications", () => {
  const notifications = ref([])

  const remove = (notificationId) => {
    let index = notifications.value.map((n) => n.id).indexOf(notificationId)
    if (index == -1) return
    clearTimeout(notifications.value[index].timeout)
    notifications.value.splice(index, 1)
  }
  const add = (notification) => {
    let id = Date.now()
    let timeout = setTimeout(() => {
      remove(id)
    }, 5000)
    notifications.value.push({
      raw: notification,
      id: id,
      timeout: timeout,
    })
  }

  return {
    notifications,
    add,
    remove,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNotificationStore, import.meta.hot))
}
