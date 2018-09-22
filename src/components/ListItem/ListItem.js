    /**
 * import modules
 */
import React, { Component, Fragment } from 'react';

/**
 * start of ListITem component
 */
export default class ListItem extends Component {
    render() {
        const{title}=this.props
        return (
            <Fragment>
                <li className="list-group-item list-group-item-primary"  >
                    {title}
                </li>
            </Fragment>
        )
    }
}
// --end-- //