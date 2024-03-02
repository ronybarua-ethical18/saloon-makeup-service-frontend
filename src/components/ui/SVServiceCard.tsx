import React from 'react'
import SVSectionTitle from '../SVSectionTitle'
import SVCard from './SVCard'
import { Col, Row } from 'antd'
import { dummyServices } from '@/utils/dummyServices'

export default function SVServiceCard() {
  return (
    <div className='px-8 md:px-32'>
        <SVSectionTitle title1='Available' title2='Services' />
        <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {dummyServices.map((service:any) =>(
                <Col span={6} key={service._id}>
                    <SVCard service={service} />
                </Col>
            ))}
        </Row>
    </div>
  )
}
