import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as projectActions from "../../redux/actions/projectActions";
import PropTypes from "prop-types";
import ContentGrid from './ContentGrid';

import { withStyles, Typography } from "@material-ui/core"

const compStyles = theme => ({
  root: {
    flexGrow: 1,
    margin: "10px",
  },
})

function ProjectContent({ projects, getProjects, classes, ...props }) {
  const [project, setProject] = useState({ ...props.project })

  useEffect(() => {
    if (projects.length === 0) {
      getProjects().catch((error) => {
        alert("Loading Projects failed" + error);
      });
    }
  }, []);

  return (
    <ContentGrid project={project} />
  );
}

ProjectContent.propTypes = {
  projects: PropTypes.array.isRequired,
  getProjects: PropTypes.func.isRequired
};

export function getProjectById(projects, id) {
  return projects.find(project => project["System Name"] === id) || null;     //this is called a selector in redux (cory lesson 11 at 35:07)
}

// this function determines what state is passed to our component via props
// Be specific what data our component needs (Request only that)
function mapStateToProps(state, ownProps) {
  const projId = ownProps.match.params.id;
  const project = state.projects.length > 0 ? getProjectById(state.projects, projId) : {};
  console.log("project content ", project)
  return {
    projects: state.projects,
    project
  };
}

const mapDispatchToProps = {
  createProject: projectActions.createProject,
  getProjects: projectActions.getProjects,
};

// since we did not declare the mapDispatchToProps, connect automatically adds Dispatch as a prop

const styledProjectContent = withStyles(compStyles)(ProjectContent);
export default connect(mapStateToProps, mapDispatchToProps)(styledProjectContent); // the connect function returns a function. and the returned function will calls our Component
