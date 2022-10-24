interface IActionAuthReducer {
  type: string;
  payload: boolean;
}
interface ILoginStatus {
  logginIn: boolean;
}
const loginStatus: ILoginStatus = {
  logginIn: false
};
export const authReducer = (
  state = loginStatus,
  action: IActionAuthReducer
) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        logginIn: action.payload
      };
    default:
      return state;
  }
};
