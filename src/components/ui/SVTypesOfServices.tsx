/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import SVSectionTitle from '../SVSectionTitle'
import SVCard from './SVCard'
import { Col, Row } from 'antd'
import { dummyServices, serviceCategories } from '@/utils/dummyServices'
import Image from 'next/image'
import HairImage from '@/assets/hair1.png'
import Makeup from '@/assets/makeup1.png'
import Skin from '@/assets/skin1.png'

export default function SVTypesOfServices() {
  const [active, setActive] = useState(2)
  return (
    <div className="px-8 md:px-32 mt-20">
      <SVSectionTitle title1="CATEGORIES OF" title2="SERVICES" />
      <div className="w-3/4 m-auto flex justify-center my-10">
        {serviceCategories.map(
          (category: { id: number; name: string; img: any }) => {
            return (
              <div
                onClick={e => setActive(category.id)}
                className={`flex items-center cursor-pointer py-10 px-6 shadow-simple-shadow w-2/4  ${
                  category.id === active ? 'bg-customPrimary-800' : ''
                } mb-16 ${
                  category.id !== active
                    ? 'hover:bg-gray-200 transition-all duration-500'
                    : ''
                }`}
                key={category.id}
              >
                <div className="mr-5">
                  <Image
                    src={
                      category.id === active
                        ? active === 1
                          ? HairImage
                          : active === 2
                            ? Makeup
                            : active === 3
                              ? Skin
                              : category.img
                        : category.img
                    }
                    objectFit="contain"
                    objectPosition="center"
                    width={80}
                    height={80}
                    alt=""
                  />
                </div>
                <div>
                  <h3
                    className={`text-xl font-normal ${
                      category.id === active
                        ? 'text-gray-200'
                        : ' text-gray-700'
                    }`}
                  >
                    {category.name.toUpperCase()}
                  </h3>
                  <h4
                    className={`${
                      category.id === active
                        ? 'text-gray-200'
                        : ' text-gray-700'
                    }`}
                  >
                    TREATMENT
                  </h4>
                </div>
              </div>
            )
          },
        )}
      </div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {dummyServices.map((service: any) => (
          <Col
            xs={24}
            sm={12}
            md={6}
            lg={4}
            xl={4}
            key={service._id}
            className="mb-8"
          >
            <SVCard service={service} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
