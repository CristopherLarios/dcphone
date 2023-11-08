import React from "react";
import { Input } from "antd";
import './index.css'

export default function CampoTexto(props) {

    const { type, vl, nm, ph,id, onch } = props;

    return (
        
            <div className="inputGroup">
                <Input id={id} className="campoTexto" type={type} placeholder={ph} name={nm} value={vl} onChange={onch} />
                <label className={vl?.length > 0 ? "is-fill" : undefined} htmlFor={id}>{ph}</label>
            </div>
        
    )
}