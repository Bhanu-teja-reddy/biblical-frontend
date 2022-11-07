<template>
  <router-view />
</template>

<script>
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

export default {
  name: 'App',
  components: { Login },
}
</script>


