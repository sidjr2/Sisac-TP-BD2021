<template>
  <div>
    <div class="request-account">
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
        <error v-if="error" :error="error"></error>
        <alert v-if="showAlert" :message="message"></alert>
        <h3>Requisitar Cadastro</h3>

        <div class="form-group bottom-margin">
          <label>Digite seu antigo número de matrícula</label>
          <input type="text" class="form-control" v-model="matricula" placeholder="Número de matrícula">
        </div>

        <div class="lower-button">
          <button class="btn btn-primary btn-block bottom-margin-smaller" type="submit">Requisitar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Error from '../components/Error.vue'
  import Alert from '../components/Alert.vue'
  const axios = require('axios')

  export default {
    name: 'RequestAccount',
    components: {
      Error,
      Alert
    },
    data() {
      return {
        matricula: '',
        error: null,
        showAlert: false,
        message: ''
      }
    },
    methods: {
      async handleSubmit(){
        axios.post('api/request', { request: { matricula_aluno: this.matricula, tipo: 'criar_conta' }})
        .then(() => {
          this.showAlert = true;
          this.error = null;
          this.message = 'Requisição enviada com sucesso!'
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
  .request-account {
    width: 40%;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
    text-align: left;
  }
</style>