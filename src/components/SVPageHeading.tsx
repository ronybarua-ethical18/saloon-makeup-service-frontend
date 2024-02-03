import React from 'react'
import SVModal from './ui/SVModal'

interface IPageHeading {
  pageTitle: string
  numberOfItems: string
  pageSubTitle: string
  modalContent?: React.ReactNode
  modalTitle?: string
  buttonTitle?: string
}

export default function SVPageHeading({
  pageTitle,
  numberOfItems,
  pageSubTitle,
  modalContent,
  modalTitle,
  buttonTitle,
}: IPageHeading): React.ReactNode {
  return (
    <div className="flexCenterBetween" style={{ margin: '20px 0px' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ margin: 0 }}>{pageTitle}</h1>
          <div
            style={{
              background: '#fff',
              padding: '5px 8px',
              borderRadius: '25px',
              marginLeft: '10px',
            }}
          >
            {' '}
            {numberOfItems}
          </div>
        </div>
        <h4>{pageSubTitle}</h4>
      </div>
      {modalTitle && buttonTitle && (
        <SVModal
          content={<>{modalContent}</>}
          modalTitle={modalTitle}
          buttonTitle={buttonTitle}
        />
      )}
    </div>
  )
}
