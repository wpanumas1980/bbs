import React from 'react';
import {
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
                    margin: '16px'
                }}
            >
                Ex.1
            </Button>
            <Button
                type='primary'
                href='/two'
                style={{
                    margin: '16px'
                }}
            >
                Ex.2
            </Button>
            <Button
                type='primary'
                href='/three'
                style={{
                    margin: '16px'
                }}
            >
                Ex.3
            </Button>

        </div>
    )
}
