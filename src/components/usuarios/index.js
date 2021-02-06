import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/usuariosActions";
import Fatal from "../general/Fatal";
import Spinner from "../general/Spinner";
import Table from "./Table";

const Usuarios = ({ usuarios, getUsers, loading, error }) => {
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Spinner />;
  else if (error) return <Fatal error={error} />;
  else return <Table usuarios={usuarios} />;
};

const mapStateToProps = (state) => {
  return state.usuariosReducer;
};

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);
