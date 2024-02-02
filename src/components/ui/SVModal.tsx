'use client'

import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import SVButton from '../SVButton'

interface IModal {
  content: any
  modalTitle: string
  buttonTitle: string
}
const SVModal = ({
  content,
  modalTitle,
  buttonTitle,
}: IModal): React.ReactNode => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <SVButton type="primary" title={buttonTitle} onClick={showModal} />
      <Modal
        title={modalTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {content}
      </Modal>
    </>
  )
}

export default SVModal
