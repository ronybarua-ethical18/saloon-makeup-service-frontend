/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button, Col, Input, Row, Select, message } from 'antd'
import Form from '@/components/Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import { SubmitHandler } from 'react-hook-form'
import SVCarousel from '@/components/ui/SVCarousel'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import Image from 'next/image'
import helloImage from '@/assets/hello.png'
import Link from 'next/link'

type FormValues = {
  id: string
  password: string
}

const LoginPage = () => {
  // console.log(isLoggedIn());

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      console.log('data', data)
    } catch (err: any) {
      console.error(err.message)
    }
  }

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: '100vh',
      }}
    >
      <Col
        sm={12}
        md={12}
        lg={12}
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div style={{ width: '60%', margin: 'auto' }}>
          <div style={{ marginBottom: '50px', textAlign: 'center' }}>
            <h1
              style={{
                margin: '10px 0px',
                fontSize: '35px',
              }}
            >
              Welcome to <span style={{ color: '#407aff' }}>Style Vibe </span>
              <Image
                src={helloImage}
                width={50}
                height={50}
                alt="welcome message"
              />
            </h1>
            <h2 style={{ color: '#b6bfce', fontWeight: 400 }}>
              Enter your information to login your account
            </h2>
          </div>
          <div>
            <Form submitHandler={onSubmit}>
              <Row gutter={[16, 16]}>
                <Col sm={24}>
                  <h4 style={{ marginBottom: '10px' }}>Email</h4>
                  <FormInput
                    name="email"
                    type="text"
                    // prefix={<UserOutlined />}
                    size="large"
                    placeholder="Enter your email"
                  />
                </Col>
                <Col sm={24}>
                  <h4 style={{ marginBottom: '10px' }}>Password</h4>
                  <FormInput
                    name="password"
                    type="password"
                    size="large"
                    // prefix={<UserOutlined />}
                    placeholder="Enter your password"
                  />
                </Col>

                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%', margin: '20px 0px' }}
                  size="large"
                >
                  Login
                </Button>
                <div style={{ textAlign: 'center', width: '100%' }}>
                  <h5 style={{ fontWeight: 400 }}>
                    Don't have an account? <Link href="/signup">Sign up</Link>
                  </h5>
                </div>
              </Row>
            </Form>
          </div>
        </div>
      </Col>
      <Col
        sm={12}
        md={12}
        lg={12}
        style={{ minHeight: '100vh', background: '#e6f0ff' }}
      >
        <div style={{ textAlign: 'center' }}>
          <SVCarousel />
        </div>
      </Col>
    </Row>
  )
}

export default LoginPage
