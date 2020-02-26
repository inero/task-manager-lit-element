import { LitElement, html } from 'lit-element';

class TaskItem extends LitElement {

    static get properties(){
        return { taskName: String, edit: false, task: Object, completeTask: Function }
    }

    handleChange(e){
        this.taskName = e.target.value;
    }

    onEditClick(){
        this.taskName = this.task.name;
        this.edit = !this.edit;
    }

    onSaveClick(id, name){
        this.edit = !this.edit;
        this.saveTask(id, name);
    }

    viewMode(){
        return html`
            ${this.task.name} 
            <button type="button" @click=${()=>this.onEditClick()}>Edit</button>
            <button type="button" @click=${()=>this.completeTask(this.task.id)}>Done</button>
        `
    }

    editMode(){
        return html`
            <input type="text" .value=${this.task.name} @input=${(e)=>this.handleChange(e)}/>
            <button type="button" @click=${()=>this.onSaveClick(this.task.id, this.taskName)}>Save</button>
        `
    }

    render() {
        return html`
            <li>
                ${!this.edit ? this.viewMode() : this.editMode()}
            </li>
        `;
    }
}

customElements.define('task-item', TaskItem);