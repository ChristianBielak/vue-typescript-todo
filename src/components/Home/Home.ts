import Task from "../../models/Task";
import Vue from 'vue';

export default Vue.extend({
    name: 'Home',
    data(){
        return {
            taskName: '',
            tasks:[] as Task[]
        }
    },
    methods:{
        createTask(): void{
            let newTask = new Task(this.taskName);
            this.tasks.push(newTask);
            this.taskName = '';

        },
        setTaskComplete(task: Task): void{
            task.completed = true;
        },
        clearList(): void{
            this.tasks;
        }
    }
});