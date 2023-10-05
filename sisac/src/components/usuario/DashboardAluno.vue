<template>
  <div class="homealuno">
    <section class="section-profile-cover section-shaped my-0">
    <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span>Seja - Bem vindo ao SISAC</span>
        <br>
        <br>
        <div class="d-flex justify-content-around">
          <div class="card-profile-stats d-flex justify-content-center">
            <div class="col-md-6">
              <router-link to="/historico">Historico</router-link>
            </div>
            <div class="col-md-6">
              <router-link to="/editar">Editar Perfil</router-link>
            </div>
            <div  class="col-md-6">
              <router-link to="/suportealuno">Suporte</router-link>
            </div>
            <div  class="col-md-6">
              <router-link to="/"><i class="bi bi-arrow-bar-right">Sair</i></router-link>
            </div>
            </div>
          </div>
        </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <div shadow class="card-profile mt--300" no-body>
          
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
            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>colocar formacao</div>
            <div><i class="ni education_hat mr-2"></i>colocar empresa que trabalha</div>
            </div>
          </div>
        
      </div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'DashobardAluno', 
    computed: {
      ...mapGetters(['user'])
    }
  }
</script>

<style >

</style>