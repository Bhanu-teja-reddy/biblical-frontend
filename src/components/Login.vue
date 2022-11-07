<template>
  <div><img src = "../assets/i1.png"></div>
    <div class="container">
      <form @submit.prevent="login">
        <h2 class="mb-3">Login</h2>
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
          You don't have an account? <span @click="moveToRegister"><router-link to="/Signup">Signup</router-link></span>
        </div>
        <button type="submit" class="mt-4 btn-pers" id="login_button">
          Login
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
  img{
    margin: 20px auto;
  }
  
  </style>