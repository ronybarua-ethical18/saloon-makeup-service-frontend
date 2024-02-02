

import SVBreadCrumb from '@/components/ui/SVBreadCrumb'
import React from 'react'

export default function Bookings() {
  return (
    <div>
      <SVBreadCrumb
        items={[
          {
            label: `seller`,
            link: `/seller`,
          },
          {
            label: `bookings`,
            link: `/seller/bookings`,
          },
        ]}
      />
      <h1>This is seller bookings page</h1>
    </div>
  )
}
