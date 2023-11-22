import Boton from "../Components/Boton"
import CampoTexto from "../Components/CampoTexto"
import { Image, message } from "antd";
import "../App.css"
import { useState, useContext } from "react";
import { DataContext } from "../Context/DataContext";



function Login() {



    const [userstate, setuserstate] = useState('');
    const [passwordstate, setpasswordstate] = useState('');

    const { Auth,setislog } = useContext(DataContext);

    async function VerificarLogin() {

        if (userstate === '' || passwordstate === '') {
            message.error("Llene los campos");
            setuserstate('');
            setpasswordstate('');
        } else {

            try {
                const valido = await Auth(userstate, passwordstate)
                if (valido?.code != undefined) {
                    console.log('nok');
                    message.error(valido.message);
                } else {
                    setislog(true)
                    console.log(valido)
                    // message.success('',valido.record.name);
                    message.success(`Verificacion Exitosa, ${valido.record.name}`)
                }
            } catch (error) {
                setuserstate('');
                setpasswordstate('');
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
                        oncl={VerificarLogin}
                    />

                </div>

            </form>


        </div>
    )
}

export default Login