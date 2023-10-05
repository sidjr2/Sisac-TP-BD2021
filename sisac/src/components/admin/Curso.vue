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
           <router-link to="./materias">Materias</router-link>
        </div>
          <div  class="col-md-6">
            <router-link to="./dashboard">Home</router-link>
          </div>
          <div  class="col-md-6">
              <router-link to="/"><i class="bi bi-arrow-bar-right">SAIR</i></router-link>
            </div>
        </div>
      </div>
      <router-link to="/editarcurso"><i class="bi bi-file-earmark-plus"></i></router-link>
      <div class="tabela">
        <h3 class="p-3 text-center">Curso Cadastrado</h3>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Codigo do Curso</th>
              <th>Nome do Curso</th>
              <th>Cpf do Coordenador</th>
              <th>Tipo</th>
              <th>Edição</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="curso in cursos" :key="curso.codigo">
              <td>{{curso.codigo}}</td>
              <td>{{curso.nome}}</td>
              <td>{{curso.cpf_coordenador}}</td>
              <td>{{curso.tipo}}</td>
              <td><router-link to="/editarcurso"><i class="bi bi-pencil-square"></i></router-link> <router-link to="/"> <i class="bi bi-archive"></i></router-link>   <router-link to="/deletarcurso"><i class="bi bi-trash"></i></router-link> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
const axios = require('axios')
export default {
    name: 'cursos',
    data() {
        return {
            cursos: [
                {codigo: '',nome: '', curso: '', cpf_coordenador: '', tipo: ''},
            ]
        };
    },
    created(){
      this.getcurso()
    },
    methods: {
      async getcurso(){
        axios.get('api/curso')
        .then((response) => {
          this.cursos = response.data.cursos
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
.curso {
    width: 40%;
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