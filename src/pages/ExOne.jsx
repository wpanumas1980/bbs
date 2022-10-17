import { Button, Typography } from 'antd'
import React from 'react'

export default function ExOne() {
    {
        let n = 10;
        for (let i = 0; i < n - 1; i++) {
            let str = ' '.repeat(n - i - 2);
            let str2 = `${i+1} `.repeat(i + 1);
            str += str2;
            str += '\n';
            console.log(str);
        }

    }
    return (
        <div
            style={{
                margin: '0px auto',
                marginTop: '50vh',
                textAlign:'center'
            }}
        >
            <Typography.Title style={{}}>
                Please see at console
            </Typography.Title>
            <Button href='/'>
                Back to home
            </Button>
        </div>
    )
}
