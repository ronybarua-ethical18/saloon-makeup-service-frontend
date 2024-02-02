

import SVBreadCrumb from '@/components/ui/SVBreadCrumb'
import React from 'react'

export default function Customers() {
  return (
    <div>
         <SVBreadCrumb
        items={[
          {
            label: `seller`,
            link: `/seller`,
          },
          {
            label: `customers`,
            link: `/seller/customers`,
          },
        ]}
      />
        This is seller customers page
        
        </div>
  )
}
