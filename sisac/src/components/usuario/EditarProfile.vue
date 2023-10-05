<template>
   <div class="editarprofile">
    <div class="conteiner d-flex justify-content-around">
        <div class="d-flex justify-content-center">
            <div class="col-md-6">
                <router-link to="/historico">Historico</router-link>
            </div>
            <div class="col-md-6">
                <router-link to="/suportealuno">Suporte</router-link>
            </div>
            <div  class="col-md-6">
                <router-link to="/dashboard">Meu Perfil</router-link>
            </div>
            <div  class="col-md-6">
              <router-link to="/"><i class="bi bi-arrow-bar-right">SAIR</i></router-link>
            </div>
        </div>
    </div>
        <br>
        <h3>ATUALIZAÇÃO DE CADASTRO</h3>
        <br>
        <form >
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text" name="txtName" class="form-control" placeholder="NOME COMPLETO" value="" />
                    </div>
                    <br>
                    <div class="form-group">
                        <input type="text" name="txtEmail" class="form-control" placeholder="SUA MATRICULA" value="" />
                    </div>
                    <br>
                    <div class="form-group">
                        <input type="text" name="txtPhone" class="form-control" placeholder="CPF" value="" />
                    </div>
                    <br>
                    <div class="form-group">
                        <input type="text" name="txtPhone" class="form-control" placeholder="ONDE TRABALHA?" value="" />
                    </div>
                    <br>
                    <div class="form-group">
                        <input type="text" name="txtPhone" class="form-control" placeholder="E-MAIL" value="" />
                    </div>
                    <br>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="UMA BREVE DESCRIÇÃO" style="width: 200px; height: 100px;"></textarea>
                        </div>
                        <br>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="ATUALIZAR" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
   </div>

</template>
<script>
export default {
    name: 'EditarProfile'
}
</script>

<style>
.editarprofile {
    max-width: 80%;
    margin-top: 5%;
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
.conteiner{
    margin-top: 1%;
}

</style>