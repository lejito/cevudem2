import TableComponent from '../components/TableComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserEdit, faUserMinus } from '@fortawesome/free-solid-svg-icons'

function PersonasPage() {
  const columns = [
    {
      id: 'documento',
      label: 'Documento',
      minWidth: 170
    },
    {
      id: 'nombrecompleto',
      label: 'Nombre completo',
      minWidth: 100
    },
    {
      id: 'correoelectronico',
      label: 'Correo electrónico',
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
  ];

  function createData(documento, nombrecompleto, correoelectronico, telefono, rol) {
    return {documento, nombrecompleto, correoelectronico, telefono, rol};
  }

  const rows = [
    createData('India', 'IN', 1324171354, 3287263, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('China', 'CN', 1403500365, 9596961, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Italy', 'IT', 60483973, 301340, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
  ];

  return (
    <div className="container px-6 mx-auto grid">
      <h2
        className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
      >
        Inicio &gt; Personas
      </h2>
      <div className="flex mb-4">
        <button className="inline-flex items-center mr-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
          style={{
            backgroundColor: 'blue',
            color: 'white'
          }}>
          <FontAwesomeIcon icon={faUserPlus} className="h-5 w-5 mr-2" />
          Registrar persona
        </button>
      </div>

      <TableComponent columns={columns} rows={rows} />
    </div>
  )
 }

 export default PersonasPage