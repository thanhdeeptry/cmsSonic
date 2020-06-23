import React from 'react';
import './App.less';
import {List, Card, Layout,Button, BackTop} from 'antd'
import {Input} from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const data=[
    {
      title: 'Iphone 6s',
      price: 3000000,
    },
    {
      title: 'Iphone 6s plus',
      price: 3000000
    },
    {
      title: 'Iphone 7s',
      price: 3000000
    },
    {
      title: 'Iphone 7s plus',
      price: 3000000
    },
    {
      title: 'Iphone 8s',
      price: 3000000
    },
    {
      title: 'Iphone 8s plus',
      price: 3000000
    },
    {
      title: 'Iphone x',
      price: 3000000
    },
    {
      title: 'Iphone 6s',
      price: 3000000,
    },
    {
      title: 'Iphone 6s plus',
      price: 3000000
    },
    {
      title: 'Iphone 7s',
      price: 3000000
    },
    {
      title: 'Iphone 7s plus',
      price: 3000000
    },
    {
      title: 'Iphone 8s',
      price: 3000000
    },
    {
      title: 'Iphone 8s plus',
      price: 3000000
    },
    {
      title: 'Iphone x',
      price: 3000000
    },
    {
      title: 'Iphone 6s',
      price: 3000000,
    },
    {
      title: 'Iphone 6s plus',
      price: 3000000
    },
    {
      title: 'Iphone 7s',
      price: 3000000
    },
    {
      title: 'Iphone 7s plus',
      price: 3000000
    },
    {
      title: 'Iphone 8s',
      price: 3000000
    },
    {
      title: 'Iphone 8s plus',
      price: 3000000
    },
    
  
  
  ]
const Product=()=>{
    return (
        
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div style={{margin: 20,}}>
              <Button type="primary" shape="round"  >
                 Thêm sản phẩm
               </Button>
              
               <Search size="large"   style={{marginLeft: 138,width: 600}} placeholder="input search text" enterButton />
               
              </div>
              <List grid={{gutter: 16, column: 4}}
                dataSource={data}
                renderItem={(item, index) =>{
                  return (
                    
                    <List.Item>
                     <Card title="Tên sản phẩm">{item.title}</Card>
                    <Card title="Giá">{item.price}</Card>
                    <Button type="primary" style={{margin: 10, width: 120, borderRadius:25}}>Sửa</Button>
                    <Button danger style={{margin: 10, width: 120, borderRadius:25}} >Xoá</Button>
                  </List.Item>
                  
                  )
                }}/>

             <BackTop>
           <div style={{height: 40,
                width: 100,
                lineHeight: '40px',
                borderRadius: 4,
                backgroundColor: '#1088e9',
                color: '#fff',
                textAlign: 'center',
                fontSize: 14,}}>Back to top</div>
          </BackTop>
            </div>
         
    )
}
export default Product