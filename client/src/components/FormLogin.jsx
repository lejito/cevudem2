import { useEffect } from 'react'
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify';
import { useAppContext } from '../context/Provider'
import { useNavigate } from 'react-router-dom'
import md5 from 'md5'

function FormLogin() {

    const notifSuccess = (message, id) => toast.success(message, { toastId: id })
    const notifWarning = (message, id) => toast.warning(message, { toastId: id })
    const notifError = (message, id) => toast.error(message, { toastId: id })

    const { verificarUsuario, buscarUsuario, sesion, setSesion } = useAppContext()

    const navigate = useNavigate()

    useEffect(() => {
        if (sesion) {
            navigate("/dashboard")
        }
    }, [])

    return (
        <Formik
            initialValues={{
                tipo_documento: "cc",
                documento: "",
                clave: ""
            }}

            enableReinitialize={false}

            onSubmit={async (values) => {
                const usuario = {
                    tipo_documento: values.tipo_documento,
                    documento: values.documento,
                    clave: md5(values.clave) // La clave se cifra en MD5
                }

                const respuesta = await verificarUsuario(usuario)

                if (respuesta.error) {
                    notifError("Ha ocurrido un error en el sistema al validar los datos.")
                }
                else {
                    const [verifDocumento, verifClave, verifBloqueo] = respuesta

                    if (verifDocumento === false) {
                        notifWarning("El usuario ingresado no existe. Verifica el tipo y número de documento.", 1)
                    }
                    else if (verifClave === false) {
                        notifWarning("La contraseña ingresada es incorrecta.", 2)
                    }
                    else if (verifBloqueo === false) {
                        notifWarning("El usuario ingresado no tiene permisos para acceder al sistema.", 3)
                    }
                    else {
                        const datosSesion = await buscarUsuario(usuario.documento)

                        if (datosSesion.error) {
                            notifError("Ha ocurrido un error en el sistema al iniciar sesión.")
                        }
                        else {
                            notifSuccess("Sesión iniciada correctamente. ¡Bienvenid@!", 4)
                            localStorage.setItem(
                                'loggedAppUser', JSON.stringify(datosSesion)
                            )
                            setSesion(datosSesion)
                            setTimeout(() => { navigate("/dashboard") }, 1000);
                        }
                    }
                }

            }}
        >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <label class="block text-sm">
                        <span class="text-dark">
                            Tipo de documento
                        </span>
                        <select
                            class="block w-full mt-1 text-sm form-select focus:border-primary focus:outline-none focus:shadow-outline-primary"
                            name="tipo_documento"
                            required
                            onChange={handleChange}
                            value={values.tipo_documento}
                        >
                            <option value="cc">CC - Cédula de ciudadanía</option>
                            <option value="ce">CE - Cédula de extranjería</option>
                            <option value="pa">PA - Pasaporte</option>
                        </select>
                    </label>

                    <label className="block mt-4 text-sm">
                        <span className="text-dark">Número de documento</span>
                        <input
                            className="block w-full mt-1 text-sm form-input focus:border-primary focus:outline-none focus:shadow-outline-primary"
                            placeholder="Ingresa el número de documento"
                            type="text"
                            name="documento"
                            required
                            onChange={handleChange}
                            value={values.documento}
                        />
                    </label>

                    <label className="block mt-4 text-sm">
                        <span className="text-dark">Contraseña</span>
                        <input
                            className="block w-full mt-1 text-sm form-input focus:border-primary focus:outline-none focus:shadow-outline-primary"
                            placeholder="Ingresa la contraseña"
                            type="password"
                            name="clave"
                            required
                            onChange={handleChange}
                            value={values.clave}
                        />
                    </label>
                    <center>
                        <p className="mt-4">
                            <a
                                className="text-sm font-medium italic text-gray-500 dark:text-gray-400 hover:text-primary"
                                href="#"
                            >
                                ¿Olvidaste la contraseña?
                            </a>
                        </p>
                        <button
                            className="block disabled w-56 font-bold px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-full active:bg-primary hover:bg-primary focus:outline-none focus:shadow-outline-purple"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Iniciar sesión
                        </button>
                    </center>
                </Form>
            )}
        </Formik>
    )
}

export default FormLogin