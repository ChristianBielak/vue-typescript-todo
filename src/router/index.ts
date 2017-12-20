import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "@/components/hello-world/HelloWorld.vue";
import SubPage from "@/components/sub-page/SubPage.vue";


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'HelloWorld', component: HelloWorld},
        { path: '/page2', name: 'SubPage', component: SubPage}
    ]
})
