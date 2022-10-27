import { useEffect } from 'react'
import { useAppContext } from '../context/Provider'
import { Link, useNavigate } from 'react-router-dom'
import TableComponent from '../components/TableComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

function InicioPage() {

  const { sesion } = useAppContext()

  const navigate = useNavigate()

  useEffect(() => {
    if (!sesion) {
      navigate("/login")
    }
  }, [])

  const columns = [
    {
      id: 'documento',
      label: 'Documento',
      minWidth: 170
    },
    {
      id: 'nombre_completo',
      label: 'Nombre Completo',
      minWidth: 100
    },
    {
      id: 'correo_electronico',
      label: 'Correo Electrónico',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'telefono',
      label: 'Teléfono',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'rol',
      label: 'Rol',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'opciones',
      label: 'Opciones',
      minWidth: 170,
      align: 'right',
    },
  ];

  function createData(documento, nombre_completo, correo_electronico, telefono, rol, opciones) {
    return { documento, nombre_completo, correo_electronico, telefono, rol, opciones};
  }

  const rows = [
    createData('India', 'IN', 1324171354, 3287263, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('China', 'CN', 1403500365, 9596961, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Italy', 'IT', 60483973, 301340, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('United States', 'US', 327167434, 9833520, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Canada', 'CA', 37602103, 9984670, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Australia', 'AU', 25475400, 7692024, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Germany', 'DE', 83019200, 357578, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Ireland', 'IE', 4857000, 70273, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Mexico', 'MX', 126577691, 1972550, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Japan', 'JP', 126317000, 377973, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('France', 'FR', 67022000, 640679, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('United Kingdom', 'GB', 67545757, 242495, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Russia', 'RU', 146793744, 17098246, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Nigeria', 'NG', 200962417, 923768, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Brazil', 'BR', 210147125, 8515767, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
  ];

  return (
    <div className="container px-6 mx-auto grid">
      <h2
        className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
      >
        Inicio
      </h2>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <div
          className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
        >
          <div
            className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              ></path>
            </svg>
          </div>
          <div>
            <p
              className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              Usuarios Creados
            </p>
            <p
              className="text-lg font-semibold text-gray-700 dark:text-gray-200"
            >
              20
            </p>
          </div>
        </div>
        <div
          className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
        >
          <div
            className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <p
              className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              Reservas creadas
            </p>
            <p
              className="text-lg font-semibold text-gray-700 dark:text-gray-200"
            >
              100
            </p>
          </div>
        </div>
        <div
          className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
        >
          <div
            className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              ></path>
            </svg>
          </div>
          <div>
            <p
              className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              Contratos creados
            </p>
            <p
              className="text-lg font-semibold text-gray-700 dark:text-gray-200"
            >
              60
            </p>
          </div>
        </div>
        <div
          className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
        >
          <div
            className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <p
              className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              Contactos Pendientes
            </p>
            <p
              className="text-lg font-semibold text-gray-700 dark:text-gray-200"
            >
              35
            </p>
          </div>
        </div>
      </div>

      <div className="flex mb-4">
        <button class="inline-flex items-center mr-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
          style={{
            backgroundColor: 'rgb(99 102 241)',
            color: 'white'
          }}>
          <FontAwesomeIcon icon={faUserPlus} class="h-5 w-5 mr-2" />
          Crear Usuario
        </button>
      </div>

      <div className="w-full overflow-hidden rounded-lg shadow-xs mb-8">

        <div className="w-full overflow-x-auto">
          <TableComponent columns={columns} rows={rows} />

        </div>
      </div>
    </div>

  )


}

export default InicioPage