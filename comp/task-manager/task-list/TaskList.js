import { LitElement, html } from 'lit-element';
import './task-item/TaskItem';

class TaskList extends LitElement {

    static get properties(){
        return { tasks: Array, completeTask: Function, editTask: Function }
    }

    render() {
        return html`
            <ul>
                ${this.tasks.map((task, index) => {
                    if(!task.completed){
                        return html`<task-item .task=${task} .index=${index} .completeTask=${this.completeTask} .saveTask=${this.saveTask}></task-item>`;
                    }
                })}
            </ul>
        `;
    }
}

customElements.define('task-list', TaskList);