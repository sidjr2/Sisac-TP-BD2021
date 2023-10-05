<template>
    <div class="suporte">
        <div class="d-flex justify-content-around">
            <div class="d-flex justify-content-center">
                <div class="col-md-6">
                    <router-link to="/historico">Historico</router-link>
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
            <div class="contact-image">
                <img src="@/assets/logo.png" alt="Logo sisac"/>
            </div>
            <br>
            <br>
            <form>
                <h3>Suporte</h3>
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
                            <input type="text" name="txtPhone" class="form-control" placeholder="TELEFONE DE CONTATO" value="" />
                        </div>
                        <br>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="ENVIAR PROBLEMA?" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="COMO PODEMOS TE AJUDAR?" style="width: 100%; height: 200px;"></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
</template>
<script>
export default {
    name: 'Suporte'
}
</script>

<style>
.suporte {
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