<template>
  <div class="home">
    <div class= "card-profile-stats d-flex justify-content-center">
      <div class="col-md-6">
        <button type="button" class="btn btn-secondary" @click="handleClick3">Sobre nos</button>
      </div>  
      <div class="col-md-6">
      <button type="button" class="btn btn-secondary" @click="handleClick2">Requisitar Cadastro</button>
      </div>
                    
    </div>
    
    <img alt="sisac logo" src="../assets/logo.png" width="300" height="300">
    <h3>Sistema de Acompanhamento de Alunos Egressos da UFSJ - SISAC</h3>
    <div  class="col-md-6">
      <div  class="lower-button">
      
        <button  type="button" class="btn btn-primary" @click="handleClick">Entrar</button>
        <br>
        <br>
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    handleClick() {
      this.$router.push('/login');
    },
     handleClick2() {
      this.$router.push('/request');
    },
    handleClick3() {
      this.$router.push('/sobre');
    }
  }
}
</script>

<style>
  .home{
    width: 65%;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }
</style>