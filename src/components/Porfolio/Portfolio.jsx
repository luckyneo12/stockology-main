import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  Checkbox,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { Container, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdOutlineExpandMore, MdDelete } from "react-icons/md";

const portfolioData = [
  {
    ticker: "ACC 28MAR2024 FUTURES",
    tradeType: "Buy",
    quantity: 300,
    entryPrice: 2708,
    currentPrice: 2650.2,
    exitPrice: 0,
    pnl: -17340.0,
    positionalGreeks: {
      delta: 100.0,
      theta: 0.0,
      gamma: 0.0,
      vega: 0.0,
    },
    tradePnl: "₹ -17340.00",
    createdAt: "05-Mar-2024 03:12",
  },
  {
    ticker: "XYZ 28MAR2024 FUTURES",
    tradeType: "Sell",
    quantity: 200,
    entryPrice: 1500,
    currentPrice: 1485.5,
    exitPrice: 0,
    pnl: 12000.0,
    positionalGreeks: {
      delta: -50.0,
      theta: 0.0,
      gamma: 0.0,
      vega: 0.0,
    },
    tradePnl: "₹ 12000.00",
    createdAt: "06-Mar-2024 10:45",
  },
  {
    ticker: "PQR 28MAR2024 FUTURES",
    tradeType: "Buy",
    quantity: 500,
    entryPrice: 3500,
    currentPrice: 3550.75,
    exitPrice: 0,
    pnl: -17550.5,
    positionalGreeks: {
      delta: 150.0,
      theta: 0.0,
      gamma: 0.0,
      vega: 0.0,
    },
    tradePnl: "₹ -17550.50",
    createdAt: "07-Mar-2024 14:30",
  },
];

const Portfolio = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [rows, setRows] = useState(portfolioData);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelectedRows(rows.map((row) => row.ticker));
    } else {
      setSelectedRows([]);
    }
  };

  const handleCheckboxClick = (event, ticker) => {
    if (event.target.checked) {
      setSelectedRows((prevSelected) => [...prevSelected, ticker]);
    } else {
      setSelectedRows((prevSelected) =>
        prevSelected.filter((selectedTicker) => selectedTicker !== ticker)
      );
    }
  };

  const handleDeleteSelected = () => {
    const updatedRows = rows.filter(
      (row) => !selectedRows.includes(row.ticker)
    );
    setRows(updatedRows);
    setSelectedRows([]);
  };

  const handleDeleteRow = (ticker) => {
    const updatedRows = rows.filter((row) => row.ticker !== ticker);
    setRows(updatedRows);
  };

  // const handleDeleteAll = () => {
  //   setRows([]);
  //   setSelectedRows([]);
  // };

  return (
    <Container
      minWidth={"80vw"}
      color={"black"}
      display={"flex"}
      flexDirection={"column"}
      gap={8}
      paddingY={10}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button variant="outlined" color="success">
          <Link to="/strategy-builder">Strategy Builder</Link>
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <Stack direction={"column"} key={row.ticker} mb={6}>
                <Accordion
                  sx={{ border: "1px solid #00000020", borderRadius: "20px" }}
                >
                  <AccordionSummary
                    expandIcon={<MdOutlineExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        gap: 10,
                        height: "60px",
                      }}
                    >
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Checkbox
                          checked={selectedRows.includes(row.ticker)}
                          onChange={(event) =>
                            handleCheckboxClick(event, row.ticker)
                          }
                        />
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <strong>{row.ticker}</strong>
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <strong>{row.currentPrice}</strong>
                      </TableCell>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack flexWrap={"wrap"} direction={"row"} gap={10} px={10}>
                      <p>
                        <strong>Trade Type:</strong> &nbsp;{row.tradeType}
                      </p>
                      <p>
                        <strong>Quantity:</strong> &nbsp;{row.quantity}
                      </p>
                      <p>
                        <strong>Entry Price:</strong> &nbsp;{row.entryPrice}
                      </p>
                      <p>
                        <strong>Entry Price:</strong> &nbsp;{row.entryPrice}
                      </p>
                      <p>
                        <strong>Current Price:</strong> &nbsp;{row.currentPrice}
                      </p>
                      <p>
                        <strong>Exit Price:</strong> &nbsp;{row.exitPrice}
                      </p>
                      <p>
                        <strong>PnL:</strong> &nbsp;{row.pnl}
                      </p>
                      <p
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: 8,
                        }}
                      >
                        <strong>Positional Greeks</strong>
                        <ul
                          style={{
                            listStyleType: "none",
                            display: "flex",
                            direction: "row",
                            gap: 12,
                          }}
                        >
                          <li>Delta: {row.positionalGreeks.delta} </li>
                          <li>Theta: {row.positionalGreeks.theta} </li>
                          <li>Gamma: {row.positionalGreeks.gamma} </li>
                          <li>Vega: {row.positionalGreeks.vega}</li>
                        </ul>
                      </p>
                      <p>
                        <strong>Trade PnL:</strong> {row.tradePnl}
                      </p>
                    </Stack>
                    <TableCell sx={{ p: 0, pt: 4, borderBottom: "none" }}>
                      <Stack
                        direction="row"
                        alignItems={"center"}
                        gap={2}
                        px={12}
                        pb={4}
                      >
                        <MdDelete
                          variant="contained"
                          fontSize={"18px"}
                          onClick={() => handleDeleteRow(row.ticker)}
                          style={{ cursor: "pointer", color: "red" }}
                        />
                        <p>Created At: {row.createdAt}</p>
                      </Stack>
                    </TableCell>
                  </AccordionDetails>
                </Accordion>
              </Stack>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="error"
        onClick={handleDeleteSelected}
        disabled={selectedRows.length === 0}
        sx={{ width: "25%" }}
      >
        Delete Selected
      </Button>
    </Container>
  );
};

export default Portfolio;
