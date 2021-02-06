import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/usuariosActions";

const Usuarios = ({ usuarios, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

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

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);
