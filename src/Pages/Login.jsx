import Boton from "../Components/Boton"
import CampoTexto from "../Components/CampoTexto"
import { Image, message } from "antd";
import "../App.css"
import { useState } from "react";



function Login() {

    const [userstate, setuserstate] = useState('');
    const [passwordstate, setpasswordstate] = useState('');

    async function Auth() {
        if (userstate === '' || passwordstate === '') {
            message.error("Llene los campos");
            setuserstate('');
            setpasswordstate('');
        } else {
            const identity = userstate;
            const password = passwordstate;
            const user = {
                identity,
                password
            }
            const url = 'http://127.0.0.1:8090/api/collections/users/auth-with-password'
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Acept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user),
                });
                const data = await res.json();

                if (data.code != undefined) {
                    message.error(data.message)
                    setuserstate('');
                    setpasswordstate('');
                } else {
                    console.log("Autentificacion Exitosa")
                    setuserstate('');
                    setpasswordstate('');
                }
                return data;
            } catch (error) {
                console.log(error)
                setuserstate('');
                setpasswordstate('');
                return error;
            }
        }
    }

    return (
        <div className="login">

            <form id="formlogin" className="LoginForm" onSubmit={ev => {
                ev.preventDefault();
            }}>
                <Image className="logoDCPHONE"
                    src="./src/assets/dcphonelogo.jpg"
                    preview={false}
                />

                <div className="controllogin">

                    <CampoTexto type="text" mm="campousuario" ph="Usuario" id={"ct"} onch={(e) => setuserstate(e.target.value)} vl={userstate} />

                    <CampoTexto type="password" mm="mypass" ph="Contraseña" id="ctpass" onch={(e) => setpasswordstate(e.target.value)} vl={passwordstate} />

                    <Boton
                        desc={"Iniciar Sesion"}
                        type={"primary"}
                        oncl={Auth}
                    />

                </div>

            </form>


        </div>
    )
}

export default Login