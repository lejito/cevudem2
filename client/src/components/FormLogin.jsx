import { Form, Formik } from 'formik'
import { toast } from 'react-toastify';

function FormLogin() {

    const notifSuccess = (values) => toast.success("¡Bienvenid@!", {toastId: 0})

    return (
        <Formik
            initialValues={{
                tipo_documento: "cc",
                documento: "",
                clave: ""
            }}

            onSubmit={(values) => {
                notifSuccess(values)
            }}
        >
            {({ handleChange, handleSubmit }) => (
                <Form>
                    <div className="mb-3">
                        <select
                            id="tipo_documento"
                            className="form-select fw-bold"
                            aria-label="Tipo de documento"
                            name="tipo_documento"
                            required
                            onChange={handleChange}
                        >
                            <option disabled>Tipo de documento</option>
                            <option value="cc">CC - Cédula de ciudadanía</option>
                            <option value="ce">CE - Cédula de extranjería</option>
                            <option value="pa">PA - Pasaporte</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input
                            id="documento"
                            type="text"
                            className="form-control fw-bold"
                            placeholder="Número de documento"
                            name="documento"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            id="clave"
                            type="password"
                            className="form-control fw-bold"
                            placeholder="Contraseña"
                            name="clave"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <a href="#" className="forgot-password fst-italic">¿Olvidaste la contraseña?</a>
                    </div>
                    <div className="mb-3">
                        <button className="btn fw-bold rounded-5 w-75 login-button" type="submit">Iniciar sesión</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default FormLogin