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
  const info = (notification) => {
    add({ ...notification, type: "info" })
  }
  const success = (notification) => {
    add({ ...notification, type: "success" })
  }
  const warn = (notification) => {
    add({ ...notification, type: "warn" })
  }
  const error = (notification) => {
    add({ ...notification, type: "error" })
  }

  return {
    notifications,
    add,
    remove,
    info,
    error,
    warn,
    success,
  }
})
