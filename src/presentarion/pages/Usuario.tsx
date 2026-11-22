
import useUsers from "../hooks/useUsers.ts";



const Usuario = () => {
  const { usuarios } = useUsers();
  return (
  <div className="container table-responsive">
      <h2>Listado de usuarios</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Primer nombre</th>
            <th>Segundo nombre</th>
            <th>Primer apellido</th>
            <th>Segundo apellido</th>
            <th>Fecha nacimiento</th>
            <th>Estado civil</th>
            <th>Grado estudio</th>
            <th>Teléfono</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.primerNombre}</td>
              <td>{usuario.segundoNombre}</td>
              <td>{usuario.primerApellido}</td>
              <td>{usuario.segundoApellido}</td>
              <td>{usuario.fechaNacimiento}</td>
              <td>{usuario.estadoCivil}</td>
              <td>{usuario.gradoEstudio}</td>
              <td>{usuario.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuario;
