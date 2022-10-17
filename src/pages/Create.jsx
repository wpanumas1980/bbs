import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
    Form,
    Button,
    Input,
    Typography
} from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Create() {

    const redirect = useNavigate()
    const [form] = Form.useForm();
    const [fruits, setFruits] = useState([]);


    useEffect(() => {
        setFruits(JSON.parse(localStorage.getItem('fruits'))||[]);
    }, [])


    const onFinish = (values) => {
        values.id = new Date().getTime();
        setFruits(prev => [...prev, values]);
        localStorage.setItem('fruits',JSON.stringify( [...fruits, values]));
        return redirect('/three');
    };


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
                <Typography.Title>
                    Create
                </Typography.Title>
                <Row>
                    <Col xs={24} md={12}>
                        <Form
                            form={form}
                            name="create-fruit" onFinish={onFinish}
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}

                        >
                            <Form.Item
                                label="Name"
                                name="name"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Photo"
                                name="photo"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Save
                                </Button>
                                <Button htmlType="button" >
                                    Cancel
                                </Button>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
