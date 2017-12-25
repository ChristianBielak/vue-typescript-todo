import Task from "../../models/Task";
import Vue from 'vue';

export default Vue.extend({
    name: 'Home',
    data() {
        return {
            taskName: '',
        }
    },
    methods: {
        createTask(): void {
            if (this.taskName !== '') {
                let newTask = new Task(this.taskName);
                this.$store.commit('setTask', newTask);
                this.taskName = '';
            }

        },
    },
    mounted() {
    },
});