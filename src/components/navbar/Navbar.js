import React, { Component } from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './navbar.scss';
export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <List>
                    <ListItem>Logo</ListItem>
                    <ListItem>List Item 1</ListItem>
                    <ListItem>List Item 2</ListItem>
                    <ListItem>List Item 3</ListItem>
                    <ListItem>List Item 4</ListItem>
                    <ListItem>List Item 5</ListItem>
                </List>
            </div>
        )
    }
}
