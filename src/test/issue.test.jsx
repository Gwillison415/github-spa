import React from 'react';
import toJson, { shallowToJson } from 'enzyme-to-json';
import { shallow, render, mount } from 'enzyme';
import {Issue, mapStateToProps, mapDispatchToProps }from '../components/Issue/Issue';

const state = {

<<<<<<< HEAD
  issues: {
    issuesById: {
      238923429: {
        assignedTo: [['Gwillison415', 'https://avatars2.githubusercontent.com/u/22106099?v=4']],
        labels: ['duplicate', 'help wanted', 'question'],
        number: 16,
        title: 'login tst JWT token',
      },
    },
  },
=======
    issues : {
      issuesById : {
      238923429 : {
        assignedTo: ['grant'],
        labels : ['duplicate', 'help wanted', 'question'],
        repoIssueNumber: 16,
        title : 'login tst JWT token',

      }
    },}
>>>>>>> renamed files, finished tests for issue

}

describe('Issue entry component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
<<<<<<< HEAD
      <Issue
        labels={state.issues.issuesById[238923429].labels}
        issueId={238923429}
        assignedTo={[['Gwillison415', 'https://avatars2.githubusercontent.com/u/22106099?v=4']]}
        number={16}
        title={'login tst JWT token'}
      />,
=======
      <Issue labels={state.issues.issuesById[238923429].labels}
         issueId={238923429} assignedTo={['grant']}
          repoIssueNumber={16}
          title={'login tst JWT token'}/>,
>>>>>>> renamed files, finished tests for issue
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it('map\'s given State To Props ', () => {
    const expected = {
<<<<<<< HEAD
      assignedTo: [['Gwillison415', 'https://avatars2.githubusercontent.com/u/22106099?v=4']],
      labels: ['duplicate', 'help wanted', 'question'],
      number: 16,
      title: 'login tst JWT token',
    };
    expect(mapStateToProps(state, { issueId: 238923429 })).toEqual(expected);
  });

  it('Should have a Cart Header in the center', () => {
    const component = shallow(
      <Issue
        number={16}
        title={'login tst JWT token'}
        issueId={238923429}
        labels={state.issues.issuesById[238923429].labels}
        assignedTo={[['Gwillison415', 'https://avatars2.githubusercontent.com/u/22106099?v=4']]}
      />,
=======
      assignedTo: ['grant'],
      labels : ['duplicate', 'help wanted', 'question'],
      repoIssueNumber: 16,
      title : 'login tst JWT token',
    }
    expect(mapStateToProps(state, {issueId: 238923429})).toEqual(expected);
  })


  it('Should have a Cart Header in the center', () => {
    const component = shallow(
      <Issue issueId={238923429}
      labels={state.issues.issuesById[238923429].labels}/>,
>>>>>>> renamed files, finished tests for issue
    );
    expect(component.find('.aligned').exists()).toBe(true);
  })
});
