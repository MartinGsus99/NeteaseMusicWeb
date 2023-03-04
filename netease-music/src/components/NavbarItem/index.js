import React, { Component } from 'react';
import './index.css';

class NavbarItem extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const itemInfor = this.props;
        console.log(itemInfor);
        return (
            <div class='navbar-item-wrapper'>
                <div class='button-wrapper'>
                    <button>{itemInfor.itemInfor.label}</button>
                </div>
            </div>
        );
    }
}

export default NavbarItem;