import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "./SearchBar";
import "./static/Dashboard.css";
import axios from "axios";

function Events() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  useEffect(() => {
    fetchData();
  }, []);

  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([{}]);
  const [rowNames, setRowNames] = useState([]);
  const classes = useStyles();

  const requestSearch = (searchedVal) => {
    const filteredRows = data.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.username.toLowerCase().includes(searchedVal.toLowerCase())
      );
    });
    setRows(filteredRows);
  };

  const fetchData = () => {
    setIsLoading(true);
    axios.get("http://127.0.0.1:8000/api/admin/eventsinfo").then((response) => {
      console.log(response.data);
      setData(response.data);
      setRowNames(Object.keys(response.data[0]));
      setRows(response.data);
      setIsLoading(false);
    });
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const generateTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          {rowNames.map((colname) => (
            <TableCell>{colname.toUpperCase()}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const generateTableBody = () => {
    return (
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {rowNames.map((c) => {
              return <TableCell key={row[c]}>{row[c]}</TableCell>;
            })}
          </TableRow>
        ))}
      </TableBody>
    );
  };
  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="table">
        <Paper>
          <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
          />
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              {generateTableHead()}
              {generateTableBody()}
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </>
  );
}

export default Events;
