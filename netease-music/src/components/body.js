import React, { Component } from 'react'
import Card from './Card/index';
import { Col, Divider, Row } from 'antd';
import './body.css';

class Body extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div class='body-wrapper'>
                <Row gutter={16}>
                    <Col span={4}>
                        <Card></Card>
                    </Col>
                    <Col span={4}>
                        <Card></Card>
                    </Col>
             
                    <Col span={4}>
                        <Card></Card>
                    </Col>
             
                    <Col span={4}>
                        <Card></Card>
                    </Col>
             
                    <Col span={4}>
                        <Card></Card>
                    </Col>
             
            
                </Row>
            
               
            </div>
         );
    }
}
 
export default Body;