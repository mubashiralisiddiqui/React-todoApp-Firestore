
/**
 * import modules
 */
import React, { Component } from 'react';
import db from '../../createStore';
/**
 * import filesand components
 */
import { List, } from '../../components'
import './style.css'

const scriptRef = db.collection('todo');
export default class Todo extends Component {
    /**
     * initializing States
     */
    state = {
        todos: [],
        text: ''
    }

    componentWillMount() {
        scriptRef.onSnapshot((d) => {
            let array = [];
            d.forEach(doc => { 
                console.log(doc.id)
                array.push(doc.data())
             })
            this.setState({ todos: array })
        })
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    addTodo = (e) => {
        e.preventDefault()
        const ref = scriptRef.doc()
        ref.set({
            task: this.state.text,
            id:ref.id

        })
            .then(function (docRef) {
                console.log(docRef)
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }
    handleDelete = (id) => {
        const ref = scriptRef.doc(id);
        ref.delete()
        .then((d) => {
            console.log(d)
        })
            .catch((e) => {
                console.log(e)
            })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={(e) => this.addTodo(e)} className="form-inline">
                    <div className="form-group">
                        <input placeholder="Add todo"
                            className="form-control input-lg"
                            type="text"
                            onChange={this.handleChange} />
                        <button className="btn btn-primary" onClick={this.addTodo}>ADD</button>
                    </div>
                </form>
                <List 
                todos={this.state.todos} 
                handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}