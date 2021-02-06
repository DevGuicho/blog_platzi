const INITIAL_STATE = {
  usuario: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        usuarios: action.payload,
      };
    default:
      return state;
  }
};
