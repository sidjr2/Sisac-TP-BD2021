<template>
  <div class="forgot">
    <div class="justify-content-around">
          <div class="card-profile-stats d-flex justify-content-center">
            <div class="col-md-6">
              <router-link to="./login">Entrar</router-link>
            </div>
            <br> <br>
            <div class="col-md-6">
              <router-link to="/"><i class="bi bi-arrow-bar-right">SAIR</i></router-link>
            </div>
          </div>
      </div>
      <br>
    <form @submit.prevent="handleSubmit">
      <div v-if="message" class="alert alert-sucess" role="alert">
        {{message}}
      </div>

      <error v-if="error" :error="error"></error>

      <h3>Esqueci Minha Senha</h3>

      <div class="form-group">
        <label>E-mail</label>
        <input type="email" class="form-control" v-model="email" placeholder="E-mail"/>
      </div>
      <br>
      <br>
      <div class="lower-button">
        <button class="btn btn-primary btn-block">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
  const axios = require('axios')

  export default {
    name: 'Forgot',
    components: {
      Error
    },
    data(){
      return{
        email: '',
        message: '',
        error: ''
      }
    },
    methods:{
      async handleSubmit(){
        try{
          await axios.post('forgot',{
          email: this.email
          });

          this.message = 'Um e-mail de restauração foi enviado com sucesso!'
          this.error = ''
        }catch(e){
          this.error = 'Ocorreu um erro, entre em contato com o Suporte'
          this.message = ''
        }
      }
    }
  }
</script>

<style>
  .forgot {
    width: 80%;
    margin: auto;
    background: #ffffff;
    margin-top: 15%;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
    text-align: justify;
  }
  .lower-button {
    align-content: right;
    align-items: right;
    text-align: right;
  }
</style>
