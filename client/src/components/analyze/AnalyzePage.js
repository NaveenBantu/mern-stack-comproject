import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, Typography, List } from "@material-ui/core"
import * as analyzeActions from "../../redux/actions/analyzeActions";
import PropTypes from "prop-types";

import TableList from "../common/TableList"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10px",
  },
}))

const AnalyzePage = ({ oscounts, getOSCounts }) => {
  const classes = useStyles();
  const headContent = ["OS", "Count"];

  useEffect(() => {
    // if (oscounts.length === 0) {
    getOSCounts().catch((error) => {
      alert("Loading Projects failed" + error);
    });
  }, []);

  console.log("classes ", classes)
  return (
    <>
      <div className={classes.root}>
        <Typography variant="h3">
          Analyzer
        </Typography>
        <Typography variant="h5">
          Operating Systems
        </Typography>
        <TableList header={headContent} content={oscounts}></TableList>
      </div>
    </>
  );
};

AnalyzePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  oscounts: PropTypes.array.isRequired,
};

// this function determines what state is passed to our component via props
// Be specific what data our component needs (Request only that)
function mapStateToProps(state) {
  console.log("state in os counts ", state)
  return {
    oscounts: state.oscounts,
  };
}

const mapDispatchToProps = {
  getOSCounts: analyzeActions.getOSCounts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzePage);
