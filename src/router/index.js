import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
  {
    path: '/cadastroCliente',
    name: 'cadastroCliente',
    component: () => import('../components/cadastroCliente.vue')
  },
  {
    path: '/atualizarCliente/:id',
    name: 'atualizarCliente',
    component: () => import('../components/cadastroCliente.vue')
  },
  {
    path: '/login',
    name: 'loginForm',
    component: () => import('../components/login.vue')
  },
  {
    path: '/listaCliente',
    name: 'listaCliente',
    component: () => import('../components/listarClientes.vue')
  },
  {
    path: '/mostrarVeiculos',
    name: 'MostrarVeiculo',
    component: () => import('../components/mostrarVeiculos.vue')
  },
  {
    path: '/cadastroCarro',
    name: 'cadastroCarro',
    component: () => import('../components/cadastroCarro.vue')
  },
  {
    path: '/atualizarCarro/:id',
    name: 'atualizarCarro',
    component: () => import('../components/cadastroCarro.vue')
  },
  {
    path: '/telaPrincipal',
    name: 'telaPrincipal',
    component: () => import('../components/telaPrincipal.vue')
  },
  {
    path: '/cadastroUsuario',
    name: 'cadastroUsuario',
    component: () => import('../components/cadastroUsuario.vue')
  },
  {
    path: '/cadastroLocacao',
    name: 'cadastroLocacao',
    component: () => import('../components/cadastroLocacao.vue')
  },
  {
    path: '/atualizarLocacao/:id',
    name: 'atualizarLocacao',
    component: () => import('../components/cadastroLocacao.vue')
  },
  {
    path: '/listarLocacoes',
    name: 'listarLocacoes',
    component: () => import('../components/listarLocacoes.vue')
  },
] 

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
