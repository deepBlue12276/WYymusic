export default  [
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/login/chooseLogin.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: ()=>import('@/views/home/home.vue')
  }
]