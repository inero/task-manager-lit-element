import { LitElement, html } from 'lit-element';

class TaskForm extends LitElement {

    static get properties() {
        return { 
            name: { type: String }
        }
    }

    constructor(){
        super();
        this.name = '';
    }

    onChange(e) {
        this.name = e.target.value;
    }

    onClick(name) {
        this.addTask(name);
        this.name = '';
    }

    render() {
        return html`
            <input type="text" .value="${this.name}" @input="${(e)=>this.onChange(e)}"/> 
            <button @click="${() => this.onClick(this.name)}">ADD</button>
        `;
    }
}

customElements.define('task-form', TaskForm);