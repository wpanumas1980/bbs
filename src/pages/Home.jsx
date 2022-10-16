import React from 'react';
import {
    Row,
    Col,
    Button
} from 'antd';

export default function Home() {
    return (
        <div
            style={{
                width: '100%',
                textAlign: 'center',
                marginTop: '50vh'
            }}
        >

            <Button
                type='primary'
                href='/one'
                style={{
                    margin:'16px'
                }}
            >
                Ex.1
            </Button>
            <Button
                type='primary'
                style={{
                    margin:'16px'
                }}
            >
                Ex.1
            </Button>
            <Button
                type='primary'
                style={{
                    margin:'16px'
                }}
            >
                Ex.1
            </Button>

        </div>
    )
}
