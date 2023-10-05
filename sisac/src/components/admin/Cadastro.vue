<template>
    <div class="cadastro">
          <div class="d-flex justify-content-around">
            <div class="card-profile-stats d-flex justify-content-center">
                <div class="col-md-6">
                    <router-link to="./usuarios">Usuarios</router-link>
                </div>
                <div class="col-md-6">
                    <router-link to="./solicitacoes">Solicitações</router-link>
                </div>
                <div  class="col-md-6">
                    <router-link to="./dashboard">Home</router-link>
                </div>
                <div  class="col-md-6">
                    <router-link to="./cursos">Curso</router-link>
                </div>
                <div  class="col-md-6">
                    <router-link to="/"><i class="bi bi-arrow-bar-right">SAIR</i></router-link>
                </div>
            </div>
        </div>
        <br>
        <form @submit.prevent="handleSubmit">
        <error v-if="error" :error="error"></error>
        <alert v-if="showAlert" :message="message"></alert>
        <h3>Cadastro da matricula:</h3>
        <div class="form-group">
            <label>Nome Completo</label>
            <input type="text" class="form-control" v-model="nome" placeholder="Primeiro Nome">
        </div>
        <div class="form-group">
            <label>CPF</label>
            <input type="text" class="form-control"  v-model="cpf" placeholder="cpf">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control"  v-model="email" placeholder="Email">
        </div>
        <div class="form-group">
            <label>Senha</label>
            <input type="password" class="form-control" v-model="senha" placeholder="Senha">
        </div>
        <div class="form-group">
            <label>Tipo</label>
            <input type="text" class="form-control"  v-model="tipo" placeholder="Tipo">
        </div>
        <br>
        <button class="btn btn-primary btn-block" type="submit">CADASTRAR</button>
    </form>
    </div>
</template>

<script>
import Error from '@/components/Error.vue'
import Alert from '@/components/Alert.vue'
const axios = require('axios')
export default {
    name:'Cadastro',
    components: {
      Error,
      Alert
    },
    data() {
        return {
            requests: [
                {matricula_aluno: ''}
            ],
            error: null,
            showAlert: false,
            message: ''
        };
    },
    created(){
      this.getrequests()
    },
    methods: {
      async getrequests(){
        axios.get('api/request')
        .then((response) => {
          console.log(response)
          this.requests = response.data.requests
        })
        .catch((error) => {
          console.log(error)
          if (error.response) this.error = error.response.data.message
        })
      },
      async handleSubmit(){
        axios.post('api/user', { user: { nome: this.nome, cpf: this.cpf, email: this.email, senha: this.senha, tipo: this.tipo }})
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
.cadastro {
    width: 80%;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
    text-align: left;
  }
  .contact-image{
    text-align: center;
}
.contact-image img{
    width: 70%;
    margin-top: -3%;
   
}
</style>