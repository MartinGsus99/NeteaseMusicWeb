import React, { Component } from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
import Slider from './components/Slide/index';
import { Layout, Space } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 120,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 1200,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#fff',
};
class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    navbarItems:[
      {
        key:'1',
        label:'发现音乐',
      },
      {
        key:'2',
        label:'我的音乐',
      },
      {
        key:'3',
        label:'关注',
      },
      {
        key:'4',
        label:'商城',
      }, {
        key:'5',
        label:'音乐人',
      }
      

    ],
  }
  render() {
    return (
      <Layout>
      <Sider style={siderStyle}></Sider>
      <Layout>
        <Header style={headerStyle}>
          <Navbar navbarItems={this.state.navbarItems}></Navbar>
        </Header>
        <Content style={contentStyle}>
          <Body></Body>
        </Content>
        <Footer style={footerStyle}></Footer>
      </Layout>
      <Sider style={siderStyle}></Sider>
    </Layout>
    );
  }
}

export default App;