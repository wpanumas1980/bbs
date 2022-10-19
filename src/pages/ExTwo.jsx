import React from 'react'
import { Row, Col, Typography, Button } from 'antd'
import CardScan from '../assets/CardScan.png'
import WorkSchedule from '../assets/WorkSchedule.png'
import sqlQuery from '../assets/sqlQuery.png'
import sqlResult from '../assets/sqlResult.png'
export default function ExTwo() {
  return (
    <div
      style={{
        height: '100vh',
        padding: '8px'
      }}
    >
      <div
        style={{
          background: '#FFF',
          height: '100%',
          boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)',
          padding: '16px'
        }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Typography.Title level={3}>
              Table CardScan
            </Typography.Title>
            <img
              src={CardScan}
              alt='CardScan'
              width={'100%'}
            />
          </Col>
          <Col xs={24} md={12}>
            <Typography.Title level={3}>
              Table WorkSchedule
            </Typography.Title>
            <img
              src={WorkSchedule}
              alt='WorkSchedule'
              width={'100%'}
            />
          </Col>
          <Col
            xs={24} md={12}
          >
            <Typography.Title level={3}>
              SQL Query
            </Typography.Title>
            <img
              src={sqlQuery}
              alt='sqlQuery'
              width={'100%'}
            />
          </Col>
          <Col
            xs={24} md={12}
          >
            <Typography.Title level={3}>
              Result
            </Typography.Title>
            <img
              src={sqlResult}
              alt='sqlResult'
              width={'100%'}
            />
          </Col>
        </Row>
        <Row justify='center'>
          <Col>
            <Button href='/'>
              Back to home
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
