import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Forgot from '../components/Forgot.vue'
import ResetPassword from '../components/ResetPassword.vue'
import Register from '../components/Register.vue'
//usuarios
import Historico from '../components/usuario/Historico.vue'
import SuporteAluno from '../components/usuario/SuporteAluno.vue'
import EditarProfile from '../components/usuario/EditarProfile.vue'
//admin
import Cursos from '../components/admin/Curso.vue'
import Materias from '../components/admin/Materias.vue'
import Solicitacoes from '../components/admin/Solicitacoes.vue'
import Usuarios from '../components/admin/Usuarios.vue'
import Cadastro from '../components/admin/Cadastro.vue'
import Delete from '../components/admin/Delete.vue'
import EditarCurso from '../components/admin/EditarCurso.vue'
import EditarMateria from '../components/admin/EditarMateria.vue'
import DeletarCurso from '../components/admin/DeletarCurso.vue'
import DeletarMateria from '../components/admin/DeletarMateria.vue'
//coordenador,proreitor de ensino e pesquisa
import Relatorios from '../components/docente/Relatorios.vue'
import SuporteDocente from '../components/docente/SuporteDocente.vue'
import EditarDocente from '../components/docente/EditarDocente.vue'

//views
import RequestAccount from '../views/RequestAccount.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{path: '/editarcurso',nome: 'EditarCurso',component: EditarCurso},{path: '/editarmateria',nome: 'EditarMateria',component: EditarMateria},
  {path: '/deletarcurso',nome: 'DeletarCurso',component: DeletarCurso},{path: '/deletarmateria',nome: 'DeletarMateria',component: DeletarMateria},
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/delete',
    name: 'Delete',
    component: Delete
  },
  {
    path: '/request',
    name: 'RequestAccount',
    component: RequestAccount
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/reset/:token',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/sobre',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/historico',
    name: 'Historico',
    component: Historico
  },
  {
    path: '/editar',
    name: 'EditarProfile',
    component: EditarProfile
  },
  {
    path: '/editardocente',
    name: 'EditarDocente',
    component: EditarDocente
  },
  {
    path: '/suportealuno',
    name: 'SuporteAluno',
    component: SuporteAluno
  },
  {
    path: '/suportedocente',
    name: 'SuporteDocente',
    component: SuporteDocente
  },
  {
  path: '/cursos',
  name: 'Cursos',
  component: Cursos
},
{
  path: '/materias',
  name: 'Materias',
  component: Materias
},
{
  path: '/usuarios',
  name: 'Usuarios',
  component: Usuarios
},
{
  path: '/relatorios',
  name: 'Relatorios',
  component: Relatorios
},
{
  path: '/solicitacoes',
  name: 'Solicitacoes',
  component: Solicitacoes
},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
