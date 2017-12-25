import Vuex from 'vuex';
import Vue from 'vue';
import Task from '../models/Task';
import * as _ from 'lodash';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tasks: [
            {name: 'drink some beer', created_at: new Date(), updated_at: new Date(), completed: false}
        ] as Task[],
        deletedTasks: []  as Task[]
    },
    mutations: {
        setTask: (state, task) => state.tasks.push(task),
        deleteTask(state, task) {
            var taskIndex = _.findIndex(state.tasks, task);
            state.deletedTasks.push(state.tasks[taskIndex]);
            state.tasks.splice(taskIndex, ++taskIndex);
        },
        completeTask(state, task) {
            var taskIndex = _.findIndex(state.tasks, task);
            state.tasks[taskIndex].completed = true;
        },
        emptyTrash:(state) => state.deletedTasks = [] as Task[]

    }
});

export default store;


