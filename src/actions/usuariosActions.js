import axios from "axios";

export const getUsers = () => async (dispatch) => {
  const respuesta = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  dispatch({
    type: "GET_USERS",
    payload: respuesta.data,
  });
};
