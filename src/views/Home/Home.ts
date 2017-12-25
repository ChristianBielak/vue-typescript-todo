import Task from "../../models/Task";
import Vue from 'vue';

export default Vue.extend({
    name: 'Home',
    data() {
        return {
            tasks: [] as Task[],
            deletedTasks: [] as Task[],
            completedTasks: [] as Task[]
        }
    },
    methods: {
        setTaskComplete(task: Task): void {
            this.$store.commit('completeTask', task);
        },
        clearList(): void {
        },
        deleteTask(task: Task) {
            this.$store.commit('deleteTask', task);
        }
    },
    mounted() {
        this.tasks = this.$store.state.tasks;
    },
});