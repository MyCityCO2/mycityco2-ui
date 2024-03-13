export const slug = (name) => {
  name = name.toLowerCase()
  name = name
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
  return name
}

export const isDev = import.meta.env.VITE_APP_ENV === 'development'
