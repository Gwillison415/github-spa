<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, {Component} from 'react';
import { List } from 'semantic-ui-react';
import Repo from '../Repo/Repo.jsx';
import './RepoList.css'
import {retrieveRepos} from '../../actions/orgActions';
=======
=======
/* eslint-disable import/no-named-as-default, consistent-return */
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Header, Icon, Image, Grid, List } from 'semantic-ui-react';
>>>>>>> 2c48835... Adding repo view
=======
import { Header, Icon, Grid, List } from 'semantic-ui-react';
>>>>>>> 02a66ea... Adding with some linting errors addressed
=======
import { Header, Icon, Grid, List, Button } from 'semantic-ui-react';
>>>>>>> 564c283... Fixing warning messages from tests
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
<<<<<<< HEAD

class RepoList extends Components{

  componentDidMount(){
    this.props.retreiveRepos();
=======
import PropTypes from 'prop-types';
import { retrieveRepos } from '../../actions/repoActions';
<<<<<<< HEAD
=======
import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import { retrieveRepos } from '../../actions/orgActions';
>>>>>>> edbe0e0... fml
=======
import { renderOrgs } from '../../actions/renderActions';
>>>>>>> 564c283... Fixing warning messages from tests
import Repo from '../Repo/Repo';
import './RepoList.css';

function repoComponents(repos, org) {
  if (repos && repos[org]) {
    return repos[org].map(id =>
      <Repo key={id} repoId={id} />,
    );
  }
  return '';
}

export class RepoList extends Component {
  componentDidMount() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // this.props.retrieveRepos();
>>>>>>> d1d9951... adding fixed dashboard view
=======
    this.props.retrieveRepos();
>>>>>>> 2c48835... Adding repo view
=======
      this.props.retrieveRepos();
>>>>>>> e342caa... Adding latest work
=======
      this.props.retrieveRepos(this.props.userName, this.props.orgName);
>>>>>>> e19f169... Adding syced app
=======
    this.props.retrieveRepos(this.props.userName, this.props.orgName);
>>>>>>> 8213532... Frontend/Backend sync
  }

<<<<<<< HEAD
<<<<<<< HEAD
  repoComponents = (repoIds) => {
    return repoIds.map(id => {
      <Repo key={id} repoId={id} />
    })
  }

  render(){
=======

=======
>>>>>>> 564c283... Fixing warning messages from tests
  render() {
<<<<<<< HEAD
      return (
        <div>
          <Button icon padded onClick={() => this.props.renderOrgs()}>
            <Icon name="arrow left" />
          </Button>
          <Grid centered padded>
            <Grid.Column width={8}>
              <Header as="h2" icon textAlign="center">
                <Icon name="github" />
                <Header.Content>
                  Which repository are you interested in?
                </Header.Content>
              </Header>
              <List animated divided relaxed size="huge">
                {repoComponents(this.props.reposByOrg, this.props.orgName)}
              </List>
            </Grid.Column>
          </Grid>
        </div>
      );
    }
<<<<<<< HEAD
>>>>>>> 02a66ea... Adding with some linting errors addressed
    return (
<<<<<<< HEAD
      <List>
        {this.props.repoComponents(this.props.repoIds)}
      </List>
    )
=======
      <Grid centered padded>
        <Grid.Column width={8}>
          <Header as="h2" icon textAlign="center">
            <Icon name="github" />
            <Header.Content>
              Which repository are you interested in?
            </Header.Content>
          </Header>
          <List animated divided relaxed size="huge">
            {repoComponents(this.props.repoIds)}
          </List>
        </Grid.Column>
      </Grid>
    );
>>>>>>> 2c48835... Adding repo view
  }
};

const mapStateToProps = state => {
  return {
    repoIds: state.repos.ids,
    reposById: state.repos.reposById
  }
}

const mapDispatchToProps = dispatch =>
<<<<<<< HEAD
  bindActionCreators ({
    retrieveRepos
=======
  bindActionCreators({
<<<<<<< HEAD
    // retrieveRepos,
>>>>>>> d1d9951... adding fixed dashboard view
=======
    retrieveRepos,
>>>>>>> 2c48835... Adding repo view
=======
    // this.props.retrieveRepos();
  }

  repoComponents(repoIds) {
    return repoIds.map(id => <Repo key={id} repoId={id} />);
  }

  render() {
    return (
      <List>
        {this.props.repoComponents(this.props.repoIds)}
      </List>
    );
=======
>>>>>>> 564c283... Fixing warning messages from tests
=======
    return (
      <div>
        <Button icon onClick={() => this.props.renderOrgs(this.props.userName)}>
          <Icon name="arrow left" />
        </Button>
        <Grid centered padded>
          <Grid.Column width={8}>
            <Header as="h2" icon textAlign="center">
              <Icon name="github" />
              <Header.Content>
                  Which repository are you interested in?
              </Header.Content>
            </Header>
            <List animated divided relaxed size="huge">
              {repoComponents(this.props.reposByOrg, this.props.orgName)}
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
>>>>>>> 8213532... Frontend/Backend sync
  }
}

RepoList.propTypes = {
  retrieveRepos: PropTypes.func.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
  repoIds: PropTypes.number.isRequired,
=======
>>>>>>> e19f169... Adding syced app
  currentPage: PropTypes.string.isRequired,
=======
>>>>>>> 8213532... Frontend/Backend sync
  renderOrgs: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  orgName: PropTypes.string.isRequired,
  reposByOrg: PropTypes.objectOf(PropTypes.array),
};

RepoList.defaultProps = {
  reposByOrg: {},
};

export const mapStateToProps = state => ({
  reposByOrg: state.repos.reposByOrg,
  repoIds: state.repos.ids,
  reposById: state.repos.reposById,
  userName: state.currentPage.userName,
  orgName: state.currentPage.selectedOrgName,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
<<<<<<< HEAD
<<<<<<< HEAD
    // retrieveRepos,
>>>>>>> edbe0e0... fml
=======
    retrieveRepos, renderOrgs
>>>>>>> 564c283... Fixing warning messages from tests
=======
    retrieveRepos, renderOrgs,
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
  }, dispatch);

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  mapDispatchToProps
=======
  mapDispatchToProps,
>>>>>>> edbe0e0... fml
)(RepoList);
