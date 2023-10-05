<template>
<div class="historico">
    <div class="conteiner d-flex justify-content-around">
        <div class="d-flex justify-content-center">
            <div class="col-md-6">
                <router-link to="./suportealuno">Suporte</router-link>
            </div>
            <div class="col-md-6">
                <router-link to="./editar">Editar Perfil</router-link>
            </div>
            <div  class="col-md-6">
                <router-link to="./dashboard">Meu Perfil</router-link>
            </div>
            <div  class="col-md-6">
              <router-link to="/"><i class="bi bi-arrow-bar-right">SAIR</i></router-link>
            </div>
            </div>
        </div>
        <br>
        <h3>HISTORICO ACADEMICO</h3>
        <br>
        <div class="tabela">
        <h3 class="p-3 text-center">Materias Cursadas</h3>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Codigo da Materia</th>
              <th>Name da Materia</th>
              <th>Curso</th>
              <th>NOTAS</th>
              <th>CONCEITO</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="materia in materias" :key="materia.codigo">
              <td>{{materia.codigo}}</td>
              <td>{{materia.nome}}</td>
              <td>{{materia.nome_curso}}</td>
              <td>{{materias.notas}}</td>
              <td>{{materias.conceito}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
export default {
    name: 'Historico'
}
</script>

<style>
.historico{
    max-width: 50%;
    margin-top: 20%;
    margin-left: 25%;
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
.conteiner{
    margin-top: 1%;
}
</style>