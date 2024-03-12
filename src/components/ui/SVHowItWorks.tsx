import React from 'react';
import SVSectionTitle from '../SVSectionTitle';
import MakeupSVG from '@/assets/make.png'; // corrected import statement
import Image from 'next/image';

export default function SVHowItWorks() {
  return (
    <div className="p-8 bg-gray-200 mt-20">
      <SVSectionTitle title1="HOW IT" title2="WORKS" />
      {/* <Image src={MakeupSVG} className='text-green-900'/> */}
    </div>
  );
}
