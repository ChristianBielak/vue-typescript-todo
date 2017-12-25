import Task from "../../models/Task";
import Vue from 'vue';

export default Vue.extend({
    name: 'Home',
    data() {
        return {
            tasks: [] as Task[],
        }
    },
    methods: {
        emptyTrash() {
            this.$store.commit('emptyTrash');
            this.tasks = this.$store.state.deletedTasks;
        }
    },
    mounted() {
        this.tasks = this.$store.state.deletedTasks;
    },
});