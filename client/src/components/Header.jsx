import { useEffect } from "react";
import { Dropdown, Avatar } from "flowbite-react"
import userPicture from '../assets/img/user.png'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/Provider'


function Header() {

    const { sesion, setSesion, notif } = useAppContext()

    const navigate = useNavigate()

    useEffect(() => {

    }, [])

    const logout = () => {
        setSesion(null)
        notif("success", "Sesión cerrada correctamente. ¡Hasta luego!", 0)
        localStorage.clear()
        setSesion(null)
        setTimeout(() => { navigate("/") }, 1000);
    }

    return (
        <header className="z-10 py-4 bg-white shadow-md">
            <div
                className="container flex items-center justify-around px-6 mx-auto text-purple-600 relative"
                style={{
                    minHeight: 35
                }}
            >

                <div className="inline-flex items-center font-bold mr-4" href="/dashboard" style={{borderRight: '1px solid #7a7a7a', paddingRight: 20}}>
                    <img style={{ width: 50 }} alt="User settings" className="!rounded-full rounded w-10 h-10 rounded" src="/src/assets/img/Logo_Club_Egresado.png" />
                    <h2
                        className="ml-4"
                        style={{
                            color: 'black',
                            fontWeight: 'bolder',
                        }}>Casa Club Del Egresado
                    </h2>
                </div>

                <div className="inline-flex items-center font-bold mr-4" href="/dashboard">
                    <img style={{ width: 50 }} alt="User settings" className="!rounded-full rounded w-10 h-10 rounded" src="/src/assets/img/Logo_Vives.png" />
                    <h2
                        className="ml-4"
                        style={{
                            color: 'black',
                            fontWeight: 'bolder'
                        }}>Viviendas Vives
                    </h2>
                </div>

                <div className="absolute top-10 right-0 mr-5">
                    <Avatar style={{ width: 80, height: 80 }} alt="User settings" img={userPicture} rounded={true}>
                        <Dropdown
                            style={{ width: 150, height: 150 }}
                            arrowIcon={true}
                            inline={true}
                            onFocus={false}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm font-bold">
                                    {sesion !== null ? sesion.primer_nombre + " " + sesion.primer_apellido : null}
                                </span>
                            </Dropdown.Header>
                            <hr />
                            <Dropdown.Item>
                                Ajustes
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logout}>
                                Cerrar sesión
                            </Dropdown.Item>
                        </Dropdown>
                    </Avatar>
                </div>
            </div>
        </header>
    )
}

export default Header