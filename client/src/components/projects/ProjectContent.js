import React, { Component } from "react";
import { connect } from "react-redux";
import * as projectActions from "../../redux/actions/projectActions";
import PropTypes from "prop-types";
import ProjectList from "./ProjectList";

import { withStyles, Typography } from "@material-ui/core"

const compStyles = theme => ({
  root: {
    flexGrow: 1,
    margin: "10px",
  },
})

class ProjectsPage extends Component {

  componentDidMount() {
    this.props.getProjects().catch((error) => {
      alert("Loading Projects failed" + error);
    });
  }

  render() {
    console.log("props in render ", this.props);
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <Typography variant="h3">
            Projects
          </Typography>
          <ProjectList projects={this.props.projects} />
        </div>
      </>
    );
  }
}

ProjectsPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
};

// this function determines what state is passed to our component via props
// Be specific what data our component needs (Request only that)
function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

const mapDispatchToProps = {
  createProject: projectActions.createProject,
  getProjects: projectActions.getProjects,
};

// since we did not declare the mapDispatchToProps, connect automatically adds Dispatch as a prop

const styledProjectsPage = withStyles(compStyles)(ProjectsPage);
export default connect(mapStateToProps, mapDispatchToProps)(styledProjectsPage); // the connect function returns a function. and the returned function will calls our Component
