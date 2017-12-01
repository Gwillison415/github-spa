import { GET_ORGS } from '../actions/orgActions';
import { LOGOUT } from '../actions/renderActions';

function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((org) => {
    state.ids = state.ids.concat(org.id);
    state.orgsById[org.id] = {};
    state.orgsById[org.id].avatarUrl = org.avatarUrl;
    state.orgsById[org.id].orgName = org.login;
    state.orgsById[org.id].reposUrl = org.url;
  });
  return { ...state };
}
const initialState = {
  ids: [],
<<<<<<< HEAD
  orgsById: {},
};
=======
  orgsById: {}
}
>>>>>>> 0c947efc005bf11bf9326d4be2f9d8c5a7b80045
const orgReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORGS:
      return createState(action.responseObj, state);

    case LOGOUT:
      return initialState;
<<<<<<< HEAD

=======
      
>>>>>>> 0c947efc005bf11bf9326d4be2f9d8c5a7b80045
    default:
      return state;
  }
};

export default orgReducer;
