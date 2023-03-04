import React, { Component } from 'react';
import { Col, Divider, Row } from 'antd';
import NavbarItem from './NavbarItem';
import Filter from './Filter/index';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const { navbarItems } = this.props;

        return (
            <div>
                <Row justify="" align="middle">
                    {
                        navbarItems.map((item) => {
                            return (
                                <NavbarItem itemInfor={item}></NavbarItem>
                            )
                        })
                    }
                    <Filter></Filter>
                </Row>
            </div>
        );
    }
}

export default Navbar;