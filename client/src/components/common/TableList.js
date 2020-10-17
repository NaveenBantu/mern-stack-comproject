import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { PropTypes } from "prop-types";

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
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

function TableList({ header, content }) {
    const classes = useStyles();

    return (
        <>
            <TableContainer component={Paper}>
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
                            <TableRow key={row._id}>
                                <TableCell >{row._id}</TableCell>
                                <TableCell >{row.count}</TableCell>
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