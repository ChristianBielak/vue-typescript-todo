import {BaseModel} from './BaseModel';
import Task from "./Task";

export class Category extends BaseModel {

    name: string;
    tasks: Task[];
    color: string;

    constructor(name: string, color: string){
        super();
        this.name = name;
        this.tasks = [];
        this.color = color;
    }
}

export default Category;