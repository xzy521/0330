import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login'

Vue.use(Router)

 const routes = [
{
    path:'/',
    name:'login',
    component:Login,
}
]
var router =  new Router({
    mode: 'history',
    routes
    
})
export default router;