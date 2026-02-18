import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  // State
  const token = ref(localStorage.getItem('token') || null);
  const user = ref(null);

  // Actions
  const setToken = (newToken) => {
    token.value = newToken;
    if (newToken) {
      localStorage.setItem('token', newToken);
    } else {
      localStorage.removeItem('token');
    }
  };

  const setUser = (userData) => {
    user.value = userData;
  };

  const logout = () => {
    token.value = null;
    user.value = null;
    localStorage.removeItem('token');
  };

  const isAuthenticated = () => {
    return !!token.value;
  };

  return {
    token,
    user,
    setToken,
    setUser,
    logout,
    isAuthenticated
  };
});
