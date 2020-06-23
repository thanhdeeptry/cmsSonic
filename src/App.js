import React from 'react';
import './App.less';
import {Layout} from 'antd'



import Headerbar from './layout/Headerbar'

import Sidebar from './layout/Sidebar'
import Product from  './pages/Productpage/Product'
const {Content, Footer}=Layout;






function App() {

  return (
  
     
        <Layout >
          <Headerbar></Headerbar>
          
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar></Sidebar>
          <Content>{<Product></Product>}</Content>
          </Layout>
         <Layout>
         <div style={{backgroundColor:'#2dfa2d' }}><Footer  style={{ textAlign: 'center' }}>Powered by Nguyen Hop Thanh</Footer></div>
         </Layout>
      </Layout>
     
  );
}
export default App;
