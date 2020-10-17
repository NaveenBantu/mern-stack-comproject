import React, { Component, useState } from "react";
import { Container } from "reactstrap";
import { Table } from "semantic-ui-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import CollapseListItem from './CollapseListItem';

import PropTypes from "prop-types";

const ProjectList = ({ projects }) => (
  <Container>
    {/* <table className="table table-bordered"> */}
    <Table celled selectable sortable></Table>
    <thead className="thead-dark">
      <tr>
        <th>#</th>
        <th>Project Name</th>
        <th>System Name</th>
        <th>Operating System</th>
        <th>Last Update on</th>
      </tr>
    </thead>
    <tbody>
      {projects.map((project, index) => {
        return (
          <tr key={project._id}>
            <td>{index + 1}</td>
            <td>{project["Project Name"]}</td>
            <td>{project["System Name"]}</td>
            <td>{project["Operating System"]}</td>
            <td>{project["Last Update on"]}</td>
          </tr>
        );
      })}
    </tbody>
    {/* </table> */}

    {/* <ListGroup>
      <TransitionGroup className="shopping-list">
        {projects.map((project) => (
          <CSSTransition key={project._id} timeout={500} classNames="fade">
            // {/* <CollapseListItem ></CollapseListItem> */}
    {/* <ListGroupItem>{project["System Name"]}</ListGroupItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup> */}
  </Container>
);

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
