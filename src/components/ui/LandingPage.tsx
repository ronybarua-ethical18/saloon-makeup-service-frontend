'use client'

import { Col, Row } from 'antd'
import React from 'react'

export default function LandingPage() {
  return (
    <div style={{ height: '100vh', padding: '0px 100px' }}>
      
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{border:'1px solid gray', height:'100%'}}>
        <Col span={24}>
        <div
        className="navbar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div className="logo">
          {/* Place your logo here */}
          <h2>Salon Logo</h2>
        </div>
        <div className="menu">
          {/* Place your menu items here */}
          <ul
            style={{
              listStyleType: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
            }}
          >
            <li style={{ marginRight: '10px' }}>Menu 1</li>
            <li style={{ marginRight: '10px' }}>Menu 2</li>
            <li style={{ marginRight: '10px' }}>Menu 3</li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      </div>
        </Col>
        <Col span={12}>
          <h1>Salon Makeup Service</h1>
        </Col>
        <Col span={12}>2</Col>
      </Row>
    </div>
  )
}
