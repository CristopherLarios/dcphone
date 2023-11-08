import { Button } from "antd";
import React from 'react'

export default function Boton(props) {
    const { desc, type,oncl } = props;
    return (
        <Button type={type} htmlType="submit" onClick={oncl}>
            <span>{desc}</span>
        </Button>
    )
}
