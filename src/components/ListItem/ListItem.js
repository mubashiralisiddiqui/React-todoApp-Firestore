/**
* import modules
*/
import React, { Component, Fragment } from 'react';

/**
 * start of ListITem component
 */
export default class ListItem extends Component {
    render() {
        const { title, handleDelete, id } = this.props
        return (
            <Fragment>
                <li
                    className="list-group-item list-group-item-primary"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    {title}
                    <ion-icon
                        name="trash" style={{ color: 'red' }}
                        onClick={() => handleDelete(id)}
                    >
                    </ion-icon>
                </li>
            </Fragment>
        )
    }
}
// --end-- //