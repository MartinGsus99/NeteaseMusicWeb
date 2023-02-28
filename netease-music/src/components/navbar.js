import React, { Component } from 'react';
import { Col, Divider, Row } from 'antd';
import NavbarItem from './NavbarItem';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const { navbarItems } = this.props;

        return (
            <div>
                <Row justify="space-around" align="middle">
                    {
                        navbarItems.map((item) => {
                            return (
                                <Col span={4}>
                                    <NavbarItem itemInfor={item}></NavbarItem>
                                </Col>

                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default Navbar;