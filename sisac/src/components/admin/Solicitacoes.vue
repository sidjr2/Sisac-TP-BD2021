<template>
<div class="solicitacoes">
    <div class="d-flex justify-content-around">
        <div class="card-profile-stats d-flex justify-content-center">
            <div class="col-md-6">
              <router-link to="./usuarios">Usuarios</router-link>
            </div>
            <div class="col-md-6">
              <router-link to="./dashboard">Home</router-link>
            </div>
            <div  class="col-md-6">
              <router-link to="./materias">Materias</router-link>
            </div>
            <div  class="col-md-6">
             <router-link to="./cursos">Curso</router-link>
            </div>
            <div  class="col-md-6">
              <router-link to="/"><i class="bi bi-arrow-bar-right">SAIR</i></router-link>
            </div>
          </div>
        </div>
        <div class="tabela">
        <h3 class="p-3 text-center">Solicitacoes de Cadastrados</h3>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Numero da Matricula</th>
              <th>Tipo de Solicitação</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in requests" :key="request.id">
              <td>{{request.matricula_aluno}}</td>
              <td>{{request.tipo}}</td>
              <td><router-link to="/cadastro"><i class="bi bi-pencil-square"></i></router-link>  <router-link to="/"> <i class="bi bi-archive"></i></router-link>   <router-link to="/delete"><i class="bi bi-trash"></i></router-link> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
const axios = require('axios')

export default {
    name: 'solicitacoes',
    data() {
        return {
            requests: [
                {matricula_aluno: '',tipo: ''},
            ]
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
      }
    }
}
</script>

<style>
.solicitacoes {
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