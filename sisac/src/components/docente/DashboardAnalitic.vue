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
              <router-link to="./relatorios">Relatórios</router-link>
            </div>
            <div class="col-md-6">
              <router-link to="./editardocente">Perfil</router-link>
            </div>
            <div  class="col-md-6">
              <router-link to="./suportedocente">Suporte</router-link>
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
                <div shadow class="card-profile mt--300" no-body>
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
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2">{{getReadabletipo}}</i></div>
                            <div><i class="ni education_hat mr-2"></i>Universidade Federal de São João Del Rei</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
  import {mapGetters} from 'vuex'
 
  export default {
    name: 'DashobardAnalitic',
     computed: {
      ...mapGetters(['user']),
      getReadabletipo() {
        if(this.user.tipo === 'coor'){
          return 'Coordenador'
        }
        if(this.user.tipo === 'prp'){
          return 'Pró - Reitor de Pesquisa'
        }
        return 'Pró - Reitor de Ensino'
      }
    }
  }
</script>