import React from "react";
import { Button } from 'antd';

const buttonStyle = {
    margin: "2rem 0rem",
    textAlign: "center"
}

export default function NormalButton({ title }) {
    return (
        <div style={buttonStyle}>
            <Button type="primary">{title}</Button>
        </div>
    )
}