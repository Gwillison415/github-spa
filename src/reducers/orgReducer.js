import {
  GET_ORGS,
} from '../actions/orgActions';



const orgReducer = (state = {ids: [], orgsByID: {} }, action) => {

  switch (action.type) {
    case GET_ORGS:
<<<<<<< HEAD
      return createState(action.responseObj);

=======
      return createState(action.responseObj, state);
<<<<<<< HEAD
    // case LOADING_ORGS:
    //   return {
    //     ...state,
    //     loadingOrgs: true,
    //   }
    // case SHOW_ORGS:
    //   return {
    //     ...state,
    //     showOrgs: true,
    //   }
>>>>>>> d3454fd... Adding PR Table and Milestones Components
=======

>>>>>>> 9486a99... Adding components re-organized
    default:
    return {
      state,
    }
  }
}

function createState(json){
 let state = { ids: [], orgsByID: {} };
 json.forEach(org => {
   state.ids.push(org.id);
   state.orgsByID[org.id]={};
<<<<<<< HEAD
   state.orgsByID[org.id]['repo'] = org.login;
   state.orgsByID[org.id]['id'] = org.id;
   state.orgsByID[org.id]['url'] = org.repos_url;
=======
   state.orgsByID[org.id]['avatarUrl'] = org.avatar_url;
   state.orgsByID[org.id]['orgName'] = org.login;
   state.orgsByID[org.id]['reposUrl'] = org.repos_url;
>>>>>>> 9486a99... Adding components re-organized
 });
 return {...state};
}

export default orgReducer;
