import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(nameInfo, info) {
    return { nameInfo, info };
  }
  
  const rows = [
    createData("First Name" , UserInfo.firstName),
    // createData(),
    // createData(),
    // createData(),
    // createData(),
  ];
  
  export default function UserInfo(useInfo) {
    const classes = useStyles();
    const users = useInfo;
    const UserInfo = users.useInfo[0];
  
    function createData(nameInfo, info) {
        return { nameInfo, info };
      }
      
      const rows = [
        createData("First Name" , UserInfo.firstName),
        createData("Last Name", UserInfo.lastName),
        createData("Email" , UserInfo.email),
        createData("Phon" , UserInfo.phon),
        createData("Company" , UserInfo.company),
      ];
      console.log(rows);
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.nameInfo}
                </TableCell>
                <TableCell>{row.info}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
