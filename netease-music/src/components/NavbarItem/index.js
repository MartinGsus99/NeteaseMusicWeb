import React, { Component } from 'react';
import './index.css';

class NavbarItem extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const itemInfor=this.props;
        return (
            <div class="card">
                <div class="card-details">
                    <p class="text-title">{itemInfor.label}</p>
                </div>
            </div>
        );
    }
}

export default NavbarItem;