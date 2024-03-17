import React from 'react'
import SVSectionTitle from '../SVSectionTitle'
import { Col, Row } from 'antd'
import { dummyBlogs } from '@/utils/dummyServices'
import Image from 'next/image'
import dummyImage from '@/assets/5.jpg'
import moment from 'moment'
import { FaEdit } from 'react-icons/fa'
import SVButton from '../SVButton'
import SVCollapse from './SVCollapse'

export default function SVFAQ() {
  return (
    <div className=" w-3/4 m-auto">
      <SVSectionTitle title1="FREQUENTLY ASKED" title2="QUESTIONS" />
      <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            
                <Col xs={24} sm={12} md={12} lg={12} xl={12} className='mb-8'>
                <SVCollapse />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} className='mb-8'>
                <SVCollapse />
                </Col>
        </Row>
    
    </div>
  )
}
