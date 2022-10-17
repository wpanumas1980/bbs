import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
    Button,
    Input,
    Table,
    Skeleton,
} from 'antd';

export default function ExThree() {

    const [isLoading, setIsLoading] = useState(true);
    const [fruits, setFruits] = useState([]);
    const [searchFruits, setSearchFruits] = useState(null);

    const onSearchFruits = e => {
        const targetFruits = fruits.filter(f => f.name.includes(e.target.value));
        setSearchFruits(targetFruits);
    }

    useEffect(() => {
        setFruits(JSON.parse(localStorage.getItem('fruits')) || []);
        setIsLoading(false);
    }, [])


    if (isLoading) {
        return <Skeleton active />
    };


    // console.log('fruits =>', fruits);
    return (
        <div
            style={{
                // background: 'pink',
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
                <Row justify='space-between' style={{ marginBottom: '8px' }}>
                    <Col>
                        <Button href='/'>
                            Back to home
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            type='primary'
                            href='/three/create'
                        >เพิ่มผลไม้</Button>
                    </Col>
                </Row>
                <Row justify='end' style={{ marginBottom: '16px' }}>
                    <Col>
                        <Input
                            placeholder='Search here'
                            onChange={onSearchFruits}
                        />
                    </Col>
                </Row>
                <Row justify='end' style={{ marginBottom: '16px' }}>
                    <Col xs={24}>
                        <Table
                            rowKey='id'
                            columns={[
                                {
                                    title: 'ชื่อผลไม้',
                                    dataIndex: 'name',
                                    key: 'name',
                                },
                                {
                                    title: '',
                                    dataIndex: 'photo',
                                    key: 'photo',
                                    render: (param, columns) => <img src={param} alt={columns.name} />
                                },
                            ]}
                            dataSource={searchFruits || fruits}
                        />
                    </Col>
                </Row>

            </div>
        </div>
    )
}
