import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {menu} from './Patch'
import { DataContext } from '../Context/DataContext';

export default function PublicRoutes() {
    
    const {islog} = useContext(DataContext);
    if (islog) {
        return <Navigate to={menu}></Navigate>
    }
    return (
        <Outlet />
    )
}
