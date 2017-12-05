
export const DISPLAY_ORGS = 'DISPLAY_ORGS';
export const DISPLAY_LOGIN = 'DISPLAY_LOGIN';
export const DISPLAY_REPOS = 'DISPLAY_REPOS';
export const LOGOUT = 'LOGOUT';
export const DISPLAY_DASHBOARD = 'DISPLAY_DASHBOARD';

export const displayOrgs = userName => (dispatch) => {
  dispatch({
    type: DISPLAY_ORGS,
    userName,
  });
};

<<<<<<< HEAD
export const displayLogin = () => (dispatch) => {
  dispatch({
    type: DISPLAY_LOGIN,
  });
};
=======
// export const displayLogin = () => (dispatch) => {
//   dispatch({
//     type: DISPLAY_LOGIN,
//   });
// };
>>>>>>> parent of 8b808c7... Update cookie assignment to avoid namespace collisions across microservices (#30)

export const displayRepos = selectedOrgName => (dispatch) => {
  dispatch({
    type: DISPLAY_REPOS,
    selectedOrgName,
  });
};

export const displayDashboard = repoName => (dispatch) => {
  dispatch({
    type: DISPLAY_DASHBOARD,
    repoName,
  });
export const logout = () => {
  {
    type: LOGOUT
  }
}
};
export const logout = () => ({
  type: LOGOUT,
});
