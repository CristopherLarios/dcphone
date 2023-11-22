import React from 'react'
import { useNavigate } from 'react-router-dom'

function Menu() {

    const NavigateTo = useNavigate();

    const handleclick =() => (NavigateTo('/GestionInventario'))

    return (
        <div>
        <t1>Menu</t1>
        
        <button onClick={handleclick}> Hola Mundo</button>
        
        </div>
    )
}

export default Menu