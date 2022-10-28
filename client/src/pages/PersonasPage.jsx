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

  ];

  function createData(documento, nombre_completo, correo_electronico, telefono, rol,) {
    return { documento, nombre_completo, correo_electronico, telefono, rol, };
  }

  const rows = [
    createData( 1324171354, 3287263, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
   createData(13435153, 'andres perez','perezjuan@gmail.com', 3134567543, 'Administrador' ),
   createData(44435153, 'juan perez','perezjuan@gmail.com', 313453453567543, 'Administrador' ),
   createData(53454435153, 'camilo rodriguez','camrodriguez@gmail.com', 3134567533343, 'Administrador' )

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