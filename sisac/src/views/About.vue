<template>
  <div class="about">
     <div class="justify-content-around">
          <div class="card-profile-stats d-flex justify-content-center">
            <div class="col-md-6">
              <router-link to="./login">Entrar</router-link>
            </div>
            <br> <br>
            <div class="col-md-6">
              <router-link to="/"><i class="bi bi-arrow-bar-right">SAIR</i></router-link>
            </div>
          </div>
      </div>
      <br>
    <h1>Um pouco sobre nós</h1>
    <p>Este trabalho tem por objetivo exercitar conceitos relacionados a modelagem de dados (entidade relacionamento), bem como todo processo de criação de um banco e de aplicações simples
    utilizando banco de dados.</p>

    <p>Nossa empresa foi contratada para construir um novo sistema que auxiliará a Universidade Federal de São João Del Rei -UFSJ a acompanhar a
    vida profissional de seus alunos egressos. </p>
    
    <p>Nosso sistema armazena os dados dos alunos egressos, como em que curso eles se formaram, informações sobre
    quais atividades eles participaram dentro (projetos de iniciação, monitoria, extensão, etc.) e fora da UFSJ (estágio).</p>
    
    <p>É importante resaltar também que o histórico escolar do aluno terá agora um local de armazenamento, com a ajuda das informações contindas no CONTAC/UFSJ.</p>
    
    <p>Além disso, os alunos poderão também armazenar seu histórico de empregos desde o dia em que se formara até o presente momento.</p>
    
    <p>O nosso sistema possui cinco tipos de usuários principais:</p>

    <h2>Administradores</h2>
    
    <p>Somente os administradores da instituição tem poderes de executar o nosso crawler e inspencionar todo o banco de dados, desta forma asseguramos que os dados de nossos usuários
    estejam seguro.
    </p>

    <h2>Coordenadores dos Cursos</h2>
    
    <p>
      Os Cordenadores de cada curso que terão à sua disposição uma infinidade de relatórios sobre os ex-alunos de seu curso, podendo desta formar fazer projeções,
      visando a melhoria o aprendizado dos seus futuros alunos.
    </p>

    <h2>Pró-reitores de Ensino</h2>
    
    <p>
      Os Pró-reitores de Ensino terão à sua disposiçao diversos relatórios para poder realizar o acompanhamento por do andamento de cada curso, por aluno ou por área específica, 
      podendo assim ter uma melhor gestão para cursos e alunos de graduação
    </p>
    
    <h2>Pró-reitores de Pesquisa</h2>
    
    <p>
      Os Pró-reitores de Pesquisa terão à sua disposição diversos relatórios realizar o acompanhamento por cada curso, por aluno ou por área específica,
      podendo assim ter uma melhor gestão para cursos e alunos de pós-graduação.
    </p>

    <h2>Os Alunos</h2>
    <p>
      Cada ex-aluno pode solicitar acesso ao sistema, informando seu antigo número de matrícula para que uma senha seja criada por nosso Administradores.
      Com esse acesso, o aluno poderá realizar atualizações e ate possiveis correções constantes em seu cadastro.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style>
  .about {
    width: 80%;
    margin: auto;
    background: #ffffff;
    margin-top: 15%;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
    text-align: justify;
  }
</style>
