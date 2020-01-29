import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { menuActions } from "../../redux/actions/menuActions";
import { NavigationMenu } from "./NavigationMenu";

class NavigationWrapper extends Component {
  componentDidMount() {
    this.props.actions.getTopMenu();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <span className="lni-bulb"></span>ESSENCE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="lni-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {this.props.navigation && !this.props.navigation.isFetching && (
              <NavigationMenu menuItems={this.props.navigation.data} />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  };
}

// const mapDispatchToProps = (dispatch) => ({
//   getTopMenu() {
//     dispatch(menuActions.getTopMenu())
//   }
// });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(menuActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationWrapper);
