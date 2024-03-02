/* eslint-disable jsx-a11y/alt-text */

import Image from 'next/image';
import React from 'react';

interface ICard {
  images: [];
  name: string;
  subCategory: string;
  price: number;
  description: string;
}

export default function SVCard({ service }: any): React.ReactNode {
  return (
    <div className="rounded-2xl shadow h-100 p-4 w-100 relative">
      <div className="relative w-full" style={{ height: '300px' }}>
        <Image
          src={service?.images[0]?.img}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
          className="rounded-t-lg"
        />
      </div>
      <div className="flex justify-between align-baseline">
        <div>
          <h3>{service?.name}</h3>
          <strong>{service?.subCategory}</strong>
        </div>
        <h2>${service?.price}</h2>
      </div>
      <p>{service?.description}</p>
    </div>
  );
}
