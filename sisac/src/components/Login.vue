<template>
  <div class="login">
    <router-link to="/"><i class="bi bi-arrow-bar-right">SAIR</i></router-link>
    <form @submit.prevent="handleSubmit">
      <error v-if="error" :error="error"></error>
      <h3>Entrar</h3>

      <div class="form-group bottom-margin">
        <label>E-mail</label>
        <input type="email" class="form-control" v-model="email" placeholder="E-mail">
      </div>

      <div class="form-group bottom-margin">
        <label>Senha</label>
        <input type="password" class="form-control" v-model="senha" placeholder="Senha">
      </div>

      <div class="lower-button">
        <button class="btn btn-primary btn-block bottom-margin-smaller" type="submit">Entrar</button>
        <br>
        <router-link to="forgot">Esqueceu a senha?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import Error from './Error.vue'
  const axios = require('axios')

  export default {
    name: 'Login',
    components: {
      Error
    },
    data() {
      return {
        email:'',
        senha: '',
        error: null
      }
    },
    methods: {
      async handleSubmit(){
        axios.put('api/login', { email: this.email, password: this.senha })
        .then((response) => {
          localStorage.setItem('token',response.data.token);
          this.$store.dispatch('user', response.data.user);
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          console.log(error)
          if (error.response) this.error = error.response.data.message
        })
      }
    }
  }
</script>

<style>
  .login {
    width: 40%;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
    text-align: left;
  }

  .bottom-margin {
    margin-bottom: 5%;
  }

  .bottom-margin-smaller {
    margin-bottom: 2%;
  }

  .lower-button {
    align-content: right;
    align-items: right;
    text-align: right;
  }
</style>