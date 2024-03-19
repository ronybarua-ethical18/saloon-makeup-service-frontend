import React from 'react'
import SVSectionTitle from '../SVSectionTitle'
import SVCard from './SVCard'
import { Col, Row } from 'antd'
import { dummyServices } from '@/utils/dummyServices'

export default function SVServiceCard() {
  return (
    <div className='w-3/4 m-auto'>
        <SVSectionTitle title1='TOP RATED' title2='SERVICES' />
        <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {dummyServices.map((service:any) =>(
                <Col xs={24} sm={12} md={6} lg={6} xl={6} key={service._id} className='mb-8'>
                    <SVCard service={service} />
                </Col>
            ))}
        </Row>
    </div>
  )
}
