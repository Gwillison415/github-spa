import React, { Component } from 'react';
import './Issues.css'
import { Card, Feed, List, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Issue from '../Issue/Issue.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {retrieveIssues} from '../../actions/issueActions';

export class Issues extends Component{

  componentDidMount(){
    this.props.retrieveIssues();
  }

  issueComponents = (issueIds) => {
    return issueIds.map(id => (
        <Issue key={id} issueId={id} />
    ))
  }

  render() {
    console.log('this.props.loadingIssues', this.props);
    if (this.props.loadingIssues) {
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

                  <Image src='/assets/images/wireframe/short-paragraph.png' />
                </Segment>
              </Feed>
      </Card.Content>
    </Card>
      )
    }
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Git Issues
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <List divided relaxed>
              {this.issueComponents(this.props.issuesIds)}
            </List>
          </Feed>
        </Card.Content>
      </Card>
    )
  }
};

export const mapStateToProps = state => {
    return {
      issuesIds: state.issues.ids,
      loadingIssues: state.issues.loadingIssues
    }
}

export const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveIssues
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issues);
