import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const obtenerUsuarios = async () => {
      const respuesta = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsuarios(respuesta.data);
    };
    obtenerUsuarios();
  });

  const ponerFilas = () =>
    usuarios.map((usuario) => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ));

  return (
    <div>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.usuariosReducer;
};

export default connect(mapStateToProps, {
  /*Accion Creator*/
})(Usuarios);