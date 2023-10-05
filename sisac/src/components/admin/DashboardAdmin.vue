<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
    <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span>Seja - Bem vindo ao SISAC</span>
        <br>
        <br>
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
              <router-link to="./cursos">Curso</router-link>
            </div>
            <div  class="col-md-6">
              <router-link to="/"><i class="bi bi-arrow-bar-right">SAIR</i></router-link>
            </div>
            </div>
          </div>
        </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row d-flex justify-content-around">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image ">
                                    <div class="mb-2">
                                      <b-avatar variant="dark" size="200px"></b-avatar>
                                      <h3> {{user.nome}} </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            
                           
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>{{user.tipo}}</div>
                            <div><i class="ni education_hat mr-2"></i>Universidade Federal de São João Del Rei</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">                                          
                                  <router-link to="/suporte">Entre em contato com o Suporte.</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>


<script>
  import {mapGetters} from 'vuex'

 
  export default {
    name: 'DashobardAdmin',
     computed: {
      ...mapGetters(['user'])
    }
  }
</script>
<style>

</style>