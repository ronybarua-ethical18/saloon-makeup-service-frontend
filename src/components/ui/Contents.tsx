'use client'

import React from 'react'
import { Layout } from 'antd'
import SVBreadCrumb from './SVBreadCrumb'
import SVTopbar from './SVTopbar'

const { Content } = Layout

export default function Contents({ children }: { children: React.ReactNode }) {
  const loggedUser = 'seller'
  return (
    <Content
      style={{ minHeight: '100vh', margin: '24px 16px 0', color: 'black', marginTop:'100px' }}
    >
      <SVTopbar />
      <SVBreadCrumb items={[
        {
          label:`${loggedUser}`,
          link:`/${loggedUser}`
        },
        {
          label:`bookings`,
          link:`/${loggedUser}/bookings`
        },
      ]} />
      {children}
    </Content>
  )
}
