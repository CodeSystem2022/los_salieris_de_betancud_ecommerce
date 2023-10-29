export const storeData = (key, value) => {
  localStorage.setItem(key, value)
}

export const removeFromStorage = (key) => {
  localStorage.removeItem(key)
}

export const getFromStorage = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}
