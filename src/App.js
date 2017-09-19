import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionTypes from './action/actions';
import PropTypes from 'prop-types';
import React from 'react';
import World from './components/World';

class App extends React.Component {
  componentWillMount() {
    this.props.actionTypes.checkAlive();
  }

  renderAlive() {
    return <div>{ this.props.alive === true ? "alive" : "dead" } </div>
  }

  destroyHero(){
    this.props.actionTypes.switchAlive();
  }

  render() {
    return (
      <div onClick={() => this.destroyHero() }>
        <World />
        { this.renderAlive() }
      </div>
    );
  }
}

App.propTypes = {
  actionTypes : PropTypes.Object,
};

function mapStateToProps(state) {
  return {
    alive: state.alive
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actionTypes: bindActionCreators(actionTypes, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
