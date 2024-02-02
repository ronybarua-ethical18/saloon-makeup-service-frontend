'use client'

import SVBreadCrumb from '@/components/ui/SVBreadCrumb'
import SVDataTableWithUtils from '@/components/ui/SVDataTableWithUtils'
import SVModal from '@/components/ui/SVModal'
import React from 'react'

export default function Services() {

    const columns = [
        {
          title: 'Service name',
          dataIndex: 'name',
        },
        {
          title: 'Category',
          dataIndex: 'category',
        },
        {
          title: 'Subcategory',
          dataIndex: 'subCategory',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          render: function (data:any) {
            return <>{`$${data.toFixed(2)}`}</>;
          },
        },
        {
          title: 'Shop name',
          dataIndex: 'shopName',
        },
        {
          title: 'Availability',
          dataIndex: 'availability',
        },
        {
          title: 'Status',
          dataIndex: 'status',
        },
      ];
      

      const data = [
        {
            key:1,
          name: 'Haircut',
          category: 'Hair',
          subCategory: 'Styling',
          price: 25.99,
          shopName: 'Chic Styles',
          availability: 'Available',
          status: 'Open',
        },
        {
            key:2,
          name: 'Manicure',
          category: 'Nails',
          subCategory: 'Nail Care',
          price: 19.99,
          shopName: 'Nail Haven',
          availability: 'Available',
          status: 'Open',
        },
        {
            key:3,
          name: 'Makeup Application',
          category: 'Makeup',
          subCategory: 'Full Face',
          price: 45.99,
          shopName: 'Glamour Studio',
          availability: 'Available',
          status: 'Open',
        },
        {
            key:4,
          name: 'Hair Coloring',
          category: 'Hair',
          subCategory: 'Coloring',
          price: 55.99,
          shopName: 'Color Palette Salon',
          availability: 'Available',
          status: 'Open',
        },
        {
            key:5,
          name: 'Pedicure',
          category: 'Nails',
          subCategory: 'Foot Care',
          price: 29.99,
          shopName: 'Sole Revival',
          availability: 'Available',
          status: 'Open',
        },
        {
            key:6,
          name: 'Facial Treatment',
          category: 'Skincare',
          subCategory: 'Facial',
          price: 39.99,
          shopName: 'Radiant Skin Spa',
          availability: 'Available',
          status: 'Open',
        },
        {
            key:7,
          name: 'Waxing - Full Body',
          category: 'Skincare',
          subCategory: 'Waxing',
          price: 69.99,
          shopName: 'Smooth Silhouette',
          availability: 'Available',
          status: 'Open',
        },
        {
            key:8,
          name: 'Bridal Makeup',
          category: 'Makeup',
          subCategory: 'Bridal',
          price: 99.99,
          shopName: 'Bridal Bliss Beauty',
          availability: 'Available',
          status: 'Open',
        },
        {
            key:9,
          name: 'Hairstyling - Updo',
          category: 'Hair',
          subCategory: 'Styling',
          price: 35.99,
          shopName: 'Elegance Salon',
          availability: 'Available',
          status: 'Open',
        },
        {
            key:10,
          name: 'Eyelash Extensions',
          category: 'Eyelashes',
          subCategory: 'Extensions',
          price: 49.99,
          shopName: 'Lash Luxe Lounge',
          availability: 'Available',
          status: 'Open',
        },
      ];
      
      // You can use this array in your React component or wherever it's needed.
      
  return (
    <div>
      <SVBreadCrumb
        items={[
          {
            label: `seller`,
            link: `/seller`,
          },
          {
            label: `services`,
            link: `/seller/services`,
          },
        ]}
      />
      <div className="flexCenterBetween" style={{ margin: '20px 0px' }}>
       <div>
       <h1>Services</h1>
        <h4>See your active or inactive services and make changes</h4>
       </div>
        <SVModal
          content={<>This is create service modal</>}
          modalTitle="Create Service"
          buttonTitle="Create Service"
        />
      </div>
      <div>
        <SVDataTableWithUtils columns={columns}  data={data} totalPages={5} isLoading={false} />
      </div>
    </div>
  )
}
