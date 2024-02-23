'use client'

import { Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import HeaderImage from "@/assets/2.png"

export default function LandingPage() {
  return (
    <div className="h-screen flex justify-center items-center px-8 md:px-32">
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
       className='h-full flex items-center'
      >
        <Col span={24}>
          <div className="navbar flex justify-between items-center">
            <div className="logo">
              {/* Place your logo here */}
              <h1>
                <strong className="text-customPrimary-800 text-3xl font-semibold">
                  Style
                </strong>
                <span className="text-customPrimary-800 text-3xl font-thin">
                  Vibe
                </span>
              </h1>
            </div>
            <div className="menu">
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
          <h1 className="text-customPrimary-800 text-5xl">Salon Makeup</h1>
          <h1 className="text-customPrimary-800 text-5xl">Service</h1>
          <p className='text-base text-gray-700 font-extralight'>
            Indulge in a transformative experience with our salon makeup
            service, where beauty meets expertise. Our skilled makeup artists
            are dedicated to enhancing your natural features while bringing your
            vision to life. Whether it is for a special occasion, a glamorous
            night out, or simply to treat yourself, our salon offers a
            personalized approach to makeup application. Using high-quality
            products and techniques tailored to your unique style, we create
            stunning looks that leave you feeling confident and radiant. Elevate
            your beauty routine with our salon makeup service and step into a
            world of glamour and allure.
          </p>
        </Col>
        <Col span={12}>
          <Image src={HeaderImage} width='100%' height='100%' />
        </Col>
      </Row>
    </div>
  )
}
