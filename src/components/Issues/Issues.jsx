<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import './Issues.css'
<<<<<<< HEAD
import { Card, Feed, List, Label } from 'semantic-ui-react';

const Issues = ({}) => (
  <Card>
    <Card.Content>
      <Card.Header className="ui center aligned">
=======
import React from 'react';
import { Card, Feed, List, Label } from 'semantic-ui-react';
import './Issues.css';

const Issues = () => (
  <Card>
    <Card.Content>
      <Card.Header>
>>>>>>> 49a3039... combined efforts (#1)
        Git Issues
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <List divided relaxed>
<<<<<<< HEAD
<<<<<<< HEAD
          <List.Item>
=======
          <Cards />
          <Cards />
          <Cards />
          const cardComponents =
          {/* <List.Item>
>>>>>>> 7e05dfe... mapped store, state, readme, mockAPI calls, and began wiring up components
              <List.Content>
                <List.Header>#1 Git Issue One</List.Header><Label.Group tag><div className="us tiny label"><Label>question</Label></div></Label.Group>
                <List.Description>Assigned To: Jenny</List.Description>
              </List.Content>
            </List.Item>
          <List.Item>
              <List.Content>
                <List.Header>#2 Git Issue One</List.Header><Label.Group tag><Label>bug</Label></Label.Group>
                <List.Description>Assigned To: Jenny</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>#3 Git Issue One</List.Header><Label.Group tag><Label>help</Label></Label.Group>
                <List.Description>Assigned To: Jenny</List.Description>
              </List.Content>
=======
          <List.Item>
            <List.Content>
              <List.Header>#1 Git Issue One</List.Header>
              <Label.Group tag>
                <div className="us tiny label">
                  <Label>question</Label>
                </div>
              </Label.Group>
              <List.Description>Assigned To: Jenny</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>#2 Git Issue One</List.Header>
              <Label.Group tag><Label>bug</Label></Label.Group>
              <List.Description>Assigned To: Jenny</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>#3 Git Issue One</List.Header>
              <Label.Group tag><Label>help</Label></Label.Group>
              <List.Description>Assigned To: Jenny</List.Description>
            </List.Content>
>>>>>>> 49a3039... combined efforts (#1)
          </List.Item>
        </List>
      </Feed>
    </Card.Content>
  </Card>
<<<<<<< HEAD
<<<<<<< HEAD
)
=======
  return (
    <div>
=======
import { Card, Feed, List } from 'semantic-ui-react';
=======
import React, { Component } from 'react';
import './Issues.css';
import { Card, Feed, List, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
>>>>>>> edbe0e0... fml
import Issue from '../Issue/Issue.jsx';
=======
import React, { Component } from 'react';
<<<<<<< HEAD
import { Card, List } from 'semantic-ui-react';
>>>>>>> 02a66ea... Adding with some linting errors addressed
=======
import { Card } from 'semantic-ui-react';
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { retrieveIssues } from '../../actions/issueActions';
import './Issues.css';

function issueComponents(issues, repo) {
  if(issues && issues[repo]){ return issues[repo].map(id => <Issue issueId={id} />
  )}
  else {
    return ''
  }
}

export class Issues extends Component {
  componentDidMount() {
    this.props.retrieveIssues(this.props.userName, this.props.orgName, this.props.repoName);
  }

<<<<<<< HEAD
<<<<<<< HEAD
  issueComponents = (issuesIds) => {
    return issuesIds.sort((a,b)=> {
      return a-b;
    }).map(id => (
        <Issue key={id} issueId={id} />
    ))
=======
  issueComponents(issuesIds) {
    return issuesIds.sort((a, b) => a - b).map(id => (
      <Issue key={id} issueId={id} />
    ));
>>>>>>> edbe0e0... fml
  }

=======
>>>>>>> 2f2a056... Adding with fewer linting errors
  render() {
    if (this.props.loadingIssues) {
      console.log('loading issues');
      return (
        <Card>
          <Card.Content>
            <Card.Header className="ui center aligned">
              Git Issues
            </Card.Header>
            <Feed>
              <Segment>
                <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer>

                <Image src="/assets/images/wireframe/short-paragraph.png" />
              </Segment>
            </Feed>
          </Card.Content>
        </Card>
      );
    }
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Issues
          </Card.Header>
        </Card.Content>
        {issueComponents(this.props.issuesByRepo, this.props.repoName)}
      </Card>
    );
  }
}

Issues.propTypes = {
  retrieveIssues: PropTypes.func.isRequired,
  loadingIssues: PropTypes.bool.isRequired,
  issuesIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

<<<<<<< HEAD
<<<<<<< HEAD
export const mapStateToProps = state => {
    return {
      issuesIds: state.issues.ids,
      loadingIssues: state.loadingIssues
    }
}
>>>>>>> c317919... Adding Issues component

<<<<<<< HEAD
    </div>
  )
);
>>>>>>> 7e05dfe... mapped store, state, readme, mockAPI calls, and began wiring up components
=======
export const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveIssues
=======
=======
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store

export const mapStateToProps = state => ({
  issuesByRepo: state.issues.issuesByRepo,
  issuesIds: state.issues.ids,
<<<<<<< HEAD
  loadingIssues: state.issues.loadingIssues,
=======
  loadingIssues: state.loadingIssues,
  orgName: state.currentPage.selectedOrgName,
  userName: state.currentPage.userName,
>>>>>>> e19f169... Adding syced app
});


export const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveIssues,
>>>>>>> edbe0e0... fml
}, dispatch);
>>>>>>> dab0224... added loading feature, wrote tests

<<<<<<< HEAD
export default Issues;
=======
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Issues);
>>>>>>> edbe0e0... fml
=======
);

export default Issues;
>>>>>>> 49a3039... combined efforts (#1)
