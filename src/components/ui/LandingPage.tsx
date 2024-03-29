/* eslint-disable jsx-a11y/alt-text */
'use client'

import { Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import HeaderImage from '@/assets/2.png'
import SVButton from '../SVButton'
import SVServiceCard from './SVServiceCard'
import SVTypesOfServices from './SVTypesOfServices'
import SVHowItWorks from './SVHowItWorks'
import SVTotalClients from './SVTotalClients'
import SVClientReview from './SVClientReview'
import SVLatestBlogs from './SVLatestBlogs'
import SVFAQ from './SVFAQ'
import SVNewsLetter from './SVNewsLetter'
import SVFooter from './SVFooter'
import SVNavMenus from './SVNavMenus'

export default function LandingPage() {
  return (
    <>
      <div className="h-screen flex justify-center items-center w-3/4 m-auto">
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          className="h-full flex items-center"
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
              <SVNavMenus />
            </div>
          </Col>
          <Col span={12}>
            <h1 className="text-customPrimary-800 text-6xl">Salon Makeup</h1>
            <h1 className="text-customPrimary-800 text-6xl">Service</h1>
            <p className="text-lg text-gray-700 font-extralight my-5">
              Indulge in a transformative experience with our salon makeup
              service, where beauty meets expertise. Our skilled makeup artists
              are dedicated to enhancing your natural features while bringing
              your vision to life. Whether it is for a special occasion, a
              glamorous night out, or simply to treat yourself, our salon offers
              a personalized approach to makeup application. Using high-quality
              products and techniques tailored to your unique style, we create
              stunning looks that leave you feeling confident and radiant.
              Elevate your beauty routine with our salon makeup service and step
              into a world of glamour and allure.
            </p>
            <SVButton
              title="GET STARTED"
              type="primary"
              className="mt-5 border border-r-4"
            />
          </Col>
          <Col span={12}>
            <Image
              src={HeaderImage}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              alt=""
            />
          </Col>
        </Row>
      </div>
      <SVServiceCard />
      <SVHowItWorks />
      <SVTypesOfServices />
      <SVTotalClients />
      <SVClientReview />
      <SVLatestBlogs />
      <SVFAQ />
      <SVNewsLetter />
      <SVFooter />
    </>
  )
}
