import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Collapse } from '@material-ui/core';
import { PropTypes } from "prop-types";

const useStyles = makeStyles({
    root: { display: 'flex', maxWidth: '100%', margin: '10px 10px' },
    table: {
        maxWidth: '100%',
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

function TableList({ header, content, title }) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    console.log("content ", content)

    return (
        <>
            <Typography variant='h6'>{title}</Typography>
            <Collapse in={open} timeout="auto" unmountOnExit></Collapse>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            {header.map((head) => {
                                return (
                                    <StyledTableCell>{head}</StyledTableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {content.map((row) => (
                            <TableRow>
                                {Object.values(row).map(value => (<TableCell >{value}</TableCell>))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

TableList.propTypes = {
    header: PropTypes.array.isRequired,
    content: PropTypes.array.isRequired,
};

export default TableList;