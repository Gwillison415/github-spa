
import {
  GET_ISSUES,
} from '../actions/issueActions';
const issuesReducer = (state = {ids:[], reposById: {}} , action) => {

  switch (action.type) {
    case GET_ISSUES:
      return createState (action.responseObj)

    default:
      return {
        state
      }
  }
}


function createState(json){
  console.log(json);
 let state = { ids: [], reposByID: {} };
 json.forEach(repo => {
   state.ids.push(repo.id);
   state.reposByID[repo.id] = {};
   state.reposByID[repo.id].issues = {};
   state.reposByID[repo.id].issues['title'] = repo.title;
   state.reposByID[repo.id].issues['number'] = repo.number;
   state.reposByID[repo.id].issues['assignedTo'] = repo.assignees.map(assignee => assignee.avatar_url);
   state.reposByID[repo.id].issues['labels'] = repo.labels.map(label => { label.name, label.color })
 });
 return state;
}

export default issuesReducer;
