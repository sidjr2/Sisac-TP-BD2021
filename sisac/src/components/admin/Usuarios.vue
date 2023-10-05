<template>
  <div class="usuario">
    <div class="d-flex justify-content-around">
      <div class="card-profile-stats d-flex justify-content-center">
        <div class="col-md-6">
          <router-link to="./dashboard">home</router-link>
        </div>
        <div class="col-md-6">
          <router-link to="./solicitacoes">Solicitações</router-link>
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
      <br>
      <div class="tabela">
        <h3 class="p-3 text-center">Usuarios Cadastrados</h3>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>CPF</th>
              <th>TIPO</th>
              <th>Edição</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{user.nome}}</td>
              <td>{{user.email}}</td>
              <td>{{user.cpf}}</td>
              <td>{{user.tipo}}</td>
              <td><router-link to="/cadastro"><i class="bi bi-pencil-square"></i></router-link>  <router-link to="/"> <i class="bi bi-archive"></i></router-link>   <router-link to="/delete"><i class="bi bi-trash"></i></router-link> </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div> 
</template>
<script>
//import TopNavbar from '../../views/TopNavbar.vue'
  const axios = require('axios')

export default {
 // components: { TopNavbar },
    name: 'usuario',
    data() {
        return {
            users: [
                { nome: '', email: '', senha: '', cpf: '', role: '' },
            ]
        };
    },
    created(){
      this.getusers()
    },
    methods: {
      async getusers(){
        axios.get('api/user')
        .then((response) => {
          this.users = response.data.users
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
.usuario {
    width: 80%;
    margin-top: 35%;
    margin-left: 10%;
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