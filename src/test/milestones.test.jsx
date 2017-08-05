import React from 'react';
import toJson, { shallowToJson } from 'enzyme-to-json';
import { shallow, render, mount } from 'enzyme';
import { Milestones, mapStateToProps, mapDispatchToProps } from '../components/Milestones/Milestones';
import retrieveMilestones from '../actions/milestonesActions';

const state = {
  milestones: {
    ids: [2601714],
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  milestonesByID : {
    2601714 : {
      created: "2017-06-23T22:45:34Z",
      labels : [],
=======
  milestonesById: {
    2601714: {
      created: '2017-06-23T22:45:34Z',
      labels: [],
>>>>>>> 2c48835... Adding repo view
=======
  milestonesByID: {
=======
  milestonesById: {
>>>>>>> 88f4b03... Added passing tests on <Org and <Orgs
    2601714: {
      created: '2017-06-23T22:45:34Z',
      labels: [],
>>>>>>> edbe0e0... fml
      repoIssueNumber: 36,
      title: 'disregard this PR',

    },
  },
  loadingMilestones: false,
};

describe('Milestones component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Milestones milestonesIds={state.milestones.ids} loadingMilestones={false} />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('map\'s given State To Props ', () => {
    const expected = {
      milestonesIds: [2601714],
      loadingMilestones: false,
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('maps component dispatches to props', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('retrieveMilestones');
  });
  it('Should have a Cart Header in the center', () => {
    const component = shallow(
      <Milestones milestonesIds={state.milestones.ids} loadingMilestones={false} />,
    );
    expect(component.find('.aligned').exists()).toBe(true);
  });
});
