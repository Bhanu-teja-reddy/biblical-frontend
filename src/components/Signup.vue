<template>
    <div class="container">
      <form @submit.prevent="register">
        <h2 class="mb-3">Register</h2>
        <div class="input">
          <label for="email">Email address</label>
          <input
            class="form-control"
            type="text"
            name="email"
          />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
            class="form-control"
            type="password"
            name="password"
          />
        </div>
  
        <div class="alternative-option mt-4">
          Already have an account? <span @click="moveToLogin"><router-link to="/">Login</router-link> </span>
        </div>
  
        <button type="submit" id="register_button" class="mt-4 btn-pers">
          Register
        </button>
      </form>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
           
  };
  </script>
  
  <style scoped>
  form{
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  }
  
  </style>