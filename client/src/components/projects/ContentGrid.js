import React from 'react'
import { makeStyles, Typography } from "@material-ui/core"
import PropTypes from "prop-types";
import TableList from "../common/TableList"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "10px",
    },
}))

function ContentGrid({ project }) {
    const classes = useStyles();
    console.log("type check ", Object.keys(project["Disk Space"][0]))
    console.log("disk space ", typeof (project["Disk Space"]))
    const headContent = Object.keys(project["Disk Space"][0]);
    return (
        <>
            <div className={classes.root}>
                <Typography variant="h4">
                    {project["System Name"]}
                </Typography>
                {Object.keys(project).map(key => typeof (project[key]) === "object" && key !== "backups" ? <TableList header={Object.keys(project[key][0])} content={project[key]} title={key}></TableList> : null)}
            </div>
        </>
    );
}

export default ContentGrid
