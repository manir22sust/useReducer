export const INITIAL_STATE = {
  isLoggedIn: undefined,
};

export const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
      };

    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
