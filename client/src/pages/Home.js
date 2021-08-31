import React, { PureComponent } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import NavFooter from '../components/shared/footer';
import ContentHome from './Home/ContentHome.js';


class Home extends PureComponent {
  render(){
    return (
    <>
        <Layout>
            <Navbar isLogged={false}/>
            <ContentHome />
            <NavFooter />
        </Layout>
    </>
    );
  }
}

export default Home;
