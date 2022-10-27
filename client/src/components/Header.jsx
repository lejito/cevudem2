import { useEffect } from "react";
import { Dropdown, Avatar } from "flowbite-react"
import userPicture from '../assets/img/user.png'

function Header() {

    useEffect(() => {

    }, [])

    return (
        <header className="z-10 py-4 bg-white shadow-md">
            <div
                className="container flex items-center justify-around px-6 mx-auto text-purple-600 relative"
                style={{
                    minHeight: 35
                }}
            >
                <div className="top-10 mr-5">
                    <div class="relative">
                        <img style={{ width: 50 }} alt="User settings" class="!rounded-full rounded w-10 h-10 rounded" src="/src/assets/img/Logo_Club_Egresado.png" />
                    </div>
                </div>

                <div className="top-10 mr-5">
                    <div class="relative">
                        <img style={{ width: 50 }} alt="User settings" class="!rounded-full rounded w-10 h-10 rounded" src="/src/assets/img/Logo_Vives.png" />
                    </div>
                </div>

                <div className="absolute top-10 right-0 mr-5">
                    <Avatar style={{ width: 80, height: 80 }} alt="User settings" img={userPicture} rounded={true}>
                        <Dropdown
                            arrowIcon={true}
                            inline={true}
                            onFocus={false}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    Luis Aristizabal
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                                Perfil
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Configuraciones
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>
                                Cerrar sesion
                            </Dropdown.Item>
                        </Dropdown>
                    </Avatar>
                </div>
            </div>
        </header>
    )
}

export default Header