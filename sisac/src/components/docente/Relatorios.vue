<template>
<div class="relatorios">
  <section class="section-profile-cover section-shaped my-0">
    <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
      <div class="d-flex justify-content-around">
        <div class="card-profile-stats d-flex justify-content-center">
          <div class="col-md-6">
            <router-link to="./dashboard">Home</router-link>
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
  <br>
  <div class="container">
  <div class="row">
    <br>
    <div class="w-100"></div>
    <div class="col">
      <h3>ALUNOS FORMADOS POR ANO</h3>
      <v-chart class="chart" :option="option" />
    </div>
    
    <br>
    <div class="col">
      <h3>ALUNOS COM PROJETOS COMPLEMENTARES</h3>
      <v-chart class="chart" :option="option2" />
    </div>
    <br>
    <div class="w-100"></div>
    <div class="col">
      <h3>ALUNOS EMPREGADOS COM PROJETOS COMPLEMENTARES</h3>
      <v-chart class="chart" :option="option3" />
    </div>
    
    <br>
    <div class="col">
      <h3>ALUNOS EMPREGADOS POR CURSO</h3>
        <v-chart class="chart" :option="option4" />
    </div>
    <br>
    <div class="w-100" width="300" height="300"></div>
    <div class="col">
      <h3>QUAIS EMPRESAS ESTÃO CONTRATANDO?</h3>
        <v-chart class="chart" :option="option5" />
    </div>
  </div>
</div>
</div>
</template>
<script>
  import "echarts";
  import VChart, { THEME_KEY } from "vue-echarts";
  const axios = require('axios')

  export default {
    name: 'relatorios',
    components: {
      VChart
    },  
    provide: {
      [THEME_KEY]: "light"
    },
    mounted() {
      this.getEntradaSaida();
      this.getAlunosAtivistas();
      this.getAlunosTrabAtivistas();
      this.getEmpregadosPorCurso();
      this.getEmpresasContratando();
    },
    computed: {
      option() {
        return {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Entrada', 'Saida']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.anos_entrada
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Entrada',
              type: 'line',
              stack: 'Total',
              data: this.count_entrada
            },
            {
              name: 'Saida',
              type: 'line',
              stack: 'Total',
              data: this.count_saida
            }
          ]
        }
      },
      option2() {
        return {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Cursos', 'Cursos']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            data: this.cursos_ativistas
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Cursos',
              type: 'bar',
              data: this.alunos_ativistas
            },
          ]
        }
      },
      option3() {
        return {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            data: this.cursos_ativistas
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Cursos',
              type: 'bar',
              data: this.alunos_trabativistas
            },
          ]
        }
      },
      option4() {
        return {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            data: this.cursos_empregados
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Cursos',
              type: 'bar',
              data: this.count_empregados
            },
          ]
        }
      },
      option5() {
        return{
        tooltip: {
           trigger: 'item'
         },
         legend: {
           top: '5%',
           left: 'center'
         },
         series: [
           {
             name: 'Access From',
             type: 'pie',
             radius: ['40%', '70%'],
             avoidLabelOverlap: false,
             itemStyle: {
               borderRadius: 10,
               borderColor: '#fff',
               borderWidth: 2
             },
             label: {
               show: false,
               position: 'center'
             },
             emphasis: {
               label: {
                 show: true,
                 fontSize: '40',
                 fontWeight: 'bold'
               }
             },
             labelLine: {
               show: false
             },
             data: this.empresas
           }
         ]
        }
      },
      option6(){
        return {
          legend: {
            top: 'bottom'
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [50, 250],
              center: ['50%', '50%'],
              maxwidth: ['30%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: [
                { value: 40, name: 'Zootecnia' },
                { value: 38, name: 'computação' },
              ]
            }
          ]
        }
      }
    },
    data() {
      return {
        anos_entrada: [],
        anos_saida: [],
        count_entrada: [],
        count_saida: [],
        cursos_ativistas: [],
        alunos_ativistas: [],
        alunos_trabativistas: [],
        cursos_empregados: [],
        count_empregados: [],
        empresas: []
      }
    },
    methods: {
      async getEntradaSaida(){
        axios.get('api/analytic/taxa')
          .then((response) => {
            this.anos_entrada = response.data.anos_entrada;
            this.anos_saida = response.data.anos_saida;
            this.count_entrada = response.data.count_entrada;
            this.count_saida = response.data.count_saida;
          })
          .catch((error) => {
            console.log(error)
            if (error.response) this.error = error.response.data.message
          })
      },

      async getAlunosAtivistas(){
        axios.get('api/analytic/ativistas')
          .then((response) => {
            let cursos_a = response.data.cursos;
            for (let i in cursos_a){
              this.cursos_ativistas.push(cursos_a[i]['nome'])
              this.alunos_ativistas.push(cursos_a[i]['count'])
            }
          })
          .catch((error) => {
            console.log(error)
            if (error.response) this.error = error.response.data.message
          })
      },

    async getAlunosTrabAtivistas(){
      axios.get('api/analytic/trabativistas')
        .then((response) => {
          let cursos_a = response.data.cursos;
          for (let i in cursos_a){
            this.alunos_trabativistas.push(cursos_a[i]['count'])
          }
            console.log(this.cursos_trabativistas)
        })
        .catch((error) => {
          console.log(error)
          if (error.response) this.error = error.response.data.message
        })
    },
    async getEmpregadosPorCurso(){
      axios.get('api/analytic/empregados')
        .then((response) => {
          this.cursos_empregados = response.data.cursos;
          this.count_empregados = response.data.count;
        })
        .catch((error) => {
          console.log(error)
          if (error.response) this.error = error.response.data.message
        })
    },

    async getEmpresasContratando(){
      axios.get('api/analytic/empresas')
        .then((response) => {
          let data = response.data.data;
          console.log(data['empresas']);
          this.empresas = data['empresas']
          /*console.log(this.empresas);*/
        })
        .catch((error) => {
          console.log(error)
          if (error.response) this.error = error.response.data.message
        })
    }
  }
}
</script>

<style>
.relatorios {
    width: 80%;
    margin-top: 40%;
    margin-left: 10%;
    margin-bottom: 50px;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 0px 45px 0px;
    border-radius: 15px;
    transition: all .3s;
    text-align: left;
  }
.chart {
  height: 400px;
}
</style>


