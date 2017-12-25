import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home/Home.vue";
import DeletedTasks from "@/views/DeletedTasks/DeletedTasks.vue";


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/deleted_tasks', name: 'DeletedTasks', component: DeletedTasks},
    ]
})
