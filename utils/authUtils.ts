// utils/authUtils.js
export const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('accessToken')
  }
  return null
}

export const setAccessToken = (accessToken: any) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('accessToken', accessToken)
  }
}

export const removeAccessToken = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('accessToken')
  }
}

export const isLoggedIn = () => {
  if (typeof window !== 'undefined') {
    const accessToken = window.localStorage.getItem('accessToken')
    return !!accessToken // Returns true if accessToken is present, false otherwise
  }
  return false // Return false on the server-side
}

export const logout = () => {
  removeAccessToken()
  // Optional: Perform additional cleanup tasks like clearing user data, redirecting to login page, etc.
}
