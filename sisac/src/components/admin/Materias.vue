<template>
<div class="materias">
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
      <router-link to="/editarmateria"><i class="bi bi-file-earmark-plus"></i></router-link>
      <div class="tabela">
        <h3 class="p-3 text-center">Materias Cadastrados</h3>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Codigo da Materia</th>
              <th>Name da Materia</th>
              <th>Curso</th>
              <th>Edição</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="materia in materias" :key="materia.codigo">
              <td>{{materia.codigo}}</td>
              <td>{{materia.nome}}</td>
              <td>{{materia.nome_curso}}</td>
              <td><router-link to="/editarmateria"><i class="bi bi-pencil-square"></i></router-link> <router-link to="/"> <i class="bi bi-archive"></i></router-link>   <router-link to="/deletarmateria"><i class="bi bi-trash"></i></router-link> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
const axios = require('axios')
export default {
    name: 'materias',
    data() {
        return {
            materias: [
                {codigo: '',nome: '', curso: ''},
            ]
        };
    },
    created(){
      this.getmaterias()
    },
    methods: {
      async getmaterias(){
        axios.get('api/materia')
        .then((response) => {
          this.materias = response.data.materias
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
.materias {
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