import { LitElement, html } from 'lit-element';
import './task-form/TaskForm';
import './task-list/TaskList';


export default class TaskManager extends LitElement {

    static get properties(){
        return { tasks: Array }
    }

    constructor(){
        super();
        this.tasks = [{ name: 'Task 1', id: 1, completed: false }, { name: 'Task 2', id: 2, completed: false }];
        this.addTask = this.addTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

    addTask(name) {
        let newTask = {
            name: name,
            id: this.tasks.length + 1,
            completed: false
        }
        this.tasks = [...this.tasks, newTask];
    }

    completeTask(id) {
        let taskIndex = this.tasks.findIndex(task => task.id===id);
        let newList = [...this.tasks];
        newList[taskIndex].completed = true;
        this.tasks = newList;
    }

    saveTask(id, name) {
        let taskIndex = this.tasks.findIndex(task => task.id===id);
        let newList = [...this.tasks];
        newList[taskIndex].name = name;
        this.tasks = newList;
    }

    render() {
        return html`
            <h2>Task Manager</h2></br>
            <task-form .addTask=${this.addTask}></task-form></br>
            <task-list .tasks=${this.tasks} .completeTask=${this.completeTask} .saveTask=${this.saveTask}></task-list>
        `;
    }
}

customElements.define('task-manager', TaskManager);
