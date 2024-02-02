import { Avatar } from 'antd';
import { UserOutlined, BellOutlined  } from '@ant-design/icons';
import React from 'react';

export default function SVTopbar() {
  return (
    <div
      style={{
        background: 'white',
        width: '100%',
        padding: '25px',
        position: 'fixed',
        textAlign: 'right',
        display:'flex',
        justifyContent:'flex-end',
        top: 0,
        left: 0,
        zIndex:998
      }}
    >
      <div style={{display:'flex', alignItems:'center'}}>
      <BellOutlined style={{fontSize:'25px'}} />
        <Avatar
          style={{ backgroundColor: '#87d068', margin: '0px 10px' }}
          icon={<UserOutlined />}
        />
        <div>
          <h5 style={{ margin: 0, fontSize:'14px' }}>John Smith</h5>
          <h6 style={{ margin: 0, fontWeight:400, fontSize:'12px', textAlign:'left' }}>Seller</h6>
        </div>
      </div>
    </div>
  );
}
