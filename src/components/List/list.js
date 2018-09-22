/**
 * import modules
 */
import React, { Component, Fragment } from 'react';
/**
 * import files and components
 */
import ListItem from '../ListItem/ListItem';
/**
 * start of List component
 */
export default class List extends Component {
    render() {
        const { todos,handleDelete } = this.props;
        return (
            <div style={{ width: '50%', justifyContent: 'center',maxHeight:'500px',overflow:'scroll' }}>
                {todos && todos.map((t, i) => { 
                    return (
                        <ul key={i} className="list-group" style={{marginTop:10}} >
                            <ListItem
                                title={t.task}
                                id={t.id}
                                handleDelete={handleDelete}
                            />
                        </ul>
                    )
                })}
            </div>
        )
    }
}