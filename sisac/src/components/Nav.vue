<template>
  <nav class="navbar navbar-expand navbar-light fixed-light">
    <div class="container">
      <router-link to="/"><img src="../assets/logo.png" width="80" height="80" alt="logosisac">SISAC</router-link>
      <router-link to="/sobre">Sobre Nós</router-link>
    </div>
    <div class="container">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto" v-if="!user">
          
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/login">Entrar</router-link>
            </a>
          </li>

          <li  class="nav-item">
            <a class="nav-link">
              <router-link to="/request">Requisitar Cadastro</router-link>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="user">
          
          <li class="nav-item">
            <a class="nav-link">
              <a href="javascript:void(0)" @click="handleClick">Logout</a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Nav',
  methods: {
    handleClick() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$router.push('/');
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
