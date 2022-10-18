import FormLogin from '../components/FormLogin'

function LoginPage() {
  return (
    <div className="login text-center">
      <link href="./src/css/login.css" rel="stylesheet"></link>
      <main className="form-signin w-100 m-auto">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title titulo text-uppercase fw-bold">Inicio de sesión</h4>
          </div>
          <div className="card-body">
            <img className="logo img-fluid" src="./src/img/Logo_UdeMedellin.png" alt="Logo UdeMedellín" />
            <FormLogin />
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage