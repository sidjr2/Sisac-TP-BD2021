<template>
  <div class="dashboard">
    <DashboardAdmin v-if="user.tipo === 'admin'"/>
    <DashboardAluno v-else-if="user.tipo === 'aluno'"/>
    <DashboardAnalitic v-else-if="DashboardAnalitic"/>
    
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import DashboardAluno from '../components/usuario/DashboardAluno.vue'
  import DashboardAdmin from '../components/admin/DashboardAdmin.vue'
  import DashboardAnalitic from '../components/docente/DashboardAnalitic.vue'

  export default {
    name: 'Dashbord',
    components: {
      DashboardAluno,
      DashboardAdmin,
      DashboardAnalitic
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(['user']),
      DashboardAnalitic(){
        return this.user.tipo === 'coord' || this.user.tipo === 'pre' || this.user.tipo === 'prp'
      }
    }
  }
</script>

<style>
  .dashboard {
    width: 65%;
    margin-top: 50%;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }
</style>