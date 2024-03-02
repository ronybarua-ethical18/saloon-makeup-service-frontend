import React from 'react'

interface ISectionTitle {
  title1: string
  title2: string
}
export default function SVSectionTitle({
  title1,
  title2,
}: ISectionTitle): JSX.Element {
  return (
    <div className="flex - justify-center my-6">
      <h2 className="mr-2 text-customPrimary-800 text-4xl">{title1}</h2>
      <h2 className="text-gray-600 text-4xl">{title2}</h2>
    </div>
  )
}
