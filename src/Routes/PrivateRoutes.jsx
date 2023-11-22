import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext';
import { Navigate, Outlet } from 'react-router-dom';
import { login, menu } from './Patch';
import { message } from 'antd';

export default function PrivateRoutes({allowroled}) {

    const { islog,DataAuth } = useContext(DataContext);

    const notpermission = () => {
        message.open({ key: 'notpermission', type: 'error', content: 'notpermission' });
            return  <Navigate to={menu}></Navigate>;
    };

    return (
        !islog ?
            <Navigate to={login}></Navigate> :
            allowroled.includes(DataAuth?.record?.Role)?
            <Outlet />:
            notpermission()
    )
}
