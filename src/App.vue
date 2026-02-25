<template>
  <q-layout view="lHh Lpr lFf" class="bg-background-dark text-white">
    <!-- Header opcional -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>Numerología</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Contenido principal -->
    <q-page-container>
      <q-page class="flex flex-center relative overflow-hidden">
        <!-- Fondos decorativos -->
        <div class="absolute inset-0 geometric-bg"></div>
        <div class="absolute inset-0 mystic-overlay"></div>

        <!-- Tarjeta de login -->
        <q-card class="q-pa-xl bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl" style="max-width: 400px;">
          <div class="text-center q-mb-lg">
            <q-icon name="auto_awesome" size="40px" color="primary" />
            <h1 class="text-h4 text-white q-mt-md">Numerología</h1>
            <p class="text-mystic-gold">Descubre tu destino en los números</p>
          </div>

          <q-form @submit.prevent="ingresar">
            <q-input v-model="usuario" label="Correo Electrónico" type="text" outlined>
              <template v-slot:prepend>
                <q-icon name="alternate_email" />
              </template>
            </q-input>

            <q-input v-model="pass" label="Contraseña" type="password" outlined class="q-mt-md">
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>

            <q-checkbox v-model="remember" label="Recordarme en este dispositivo" color="primary" class="q-mt-md" />

            <div class="q-mt-lg">
              <q-btn label="Iniciar Sesión" type="submit" color="primary" class="full-width q-mb-sm" icon="login" />
              <q-btn label="Crear Cuenta" flat class="full-width text-white" icon="person_add" />
            </div>
          </q-form>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { postData } from './services/apiClient'
import { useAuthStore } from './store/auth'

let usuario = ref("")
let pass = ref("")
let remember = ref(false)
const useAuth = useAuthStore()

async function ingresar(){
  try {
    let res = await postData("api/auth/login", {
      email: usuario.value,
      password: pass.value
    })
    console.log(res)
    useAuth.token = res.token
  } catch (error) {
    console.log(error.response)
  }
}
</script>

<style scoped>
:root {
  --q-color-primary: #3211d4;
  --q-color-background-light: #f6f6f8;
  --q-color-background-dark: #131022;
  --q-color-mystic-gold: #c5a059;
}

.bg-background-dark {
  background-color: var(--q-color-background-dark);
}

.text-mystic-gold {
  color: var(--q-color-mystic-gold);
}

.mystic-overlay {
  background-image: radial-gradient(circle at center, rgba(50, 17, 212, 0.15) 0%, transparent 70%);
}

.geometric-bg {
  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOaTtP6X4kNAxxOf93XLP4tTo1M0sWGD0bzt427_JsozeIW5rraXBsAB4ZW87xSiM6ptJ0_bMU2CoBKHyZoLyFTycP_A_Q4oo2GzO2D0dQoCt5na1U6nl0sqy0Gzv10jZ3lJGKbjmBRCUpH5EGeWaNV-CLETOC5ABD3fbhdwvWTo_dX9U1p0DBUSrlA9kyt0G0H_igTgO5t09AALjV6dODTUhZ6xu6aAXRN1NT93bcj4X70FmX3GXk6rHXUVKiDdwrIo2CP6LsJ9U');
  background-size: cover;
  background-position: center;
  mix-blend-mode: overlay;
  opacity: 0.3;
}
</style>