import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import { PieChart, Pie } from "recharts";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import TransactionCard from "./components/transactionCard";

/*transactionCard data*/
const data3 = [
  { name: "Jan 01", value: 30 },
  { name: "Jan 02", value: 20 },
  { name: "Jan 03", value: 27 },
  { name: "Jan 04", value: 18 },
  { name: "Jan 05", value: 23 },
  { name: "Jan 06", value: 34 },
  { name: "Jan 07", value: 28 },
  { name: "Jan 08", value: 24 },
  { name: "Jan 09", value: 29 },
  { name: "Jan 10", value: 32 },
];

/* Line chart data */
const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

/* Pie chart data */
const data2 = [
  { name: "A", value: 5 },
  { name: "B", value: 10 },
  { name: "C", value: 15 },
  { name: "D", value: 20 },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  return (
    <StyledText x="50%" y="50%">
      {children}
    </StyledText>
  );
}

/* Table data */
function createData(name, date, amount, status, mode) {
  return { name, date, amount, status, mode };
}

const rows = [
  createData("Trip to City Park", "2024-07-22", "$150", "Pending", "Car"),
  createData("Beach Excursion", "2024-07-23", "$300", "Completed", "Bus"),
  createData("Mountain Hiking", "2024-07-24", "$250", "Pending", "Shuttle"),
  createData("Zoo Visit", "2024-07-25", "$100", "Completed", "Rickshaw"),
  createData("Museum Tour", "2024-07-26", "$200", "Pending", "Bus"),
];

const Transactions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    { name: "Pending", value: 3 },
    { name: "Completed", value: 2 },
  ];

  return (
    <>
      {/*transaction cards*/}
      <div style={{ marginTop: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TransactionCard
              title="Revenue Status"
              value="$432"
              chartType="bar"
              data={data3}
              color="#d0ebff"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TransactionCard
              title="Page View"
              value="$432"
              chartType="line"
              data={data3}
              color="#fff3bf"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TransactionCard
              title="Bounce Rate"
              value="$432"
              chartType="line"
              data={data3}
              color="#ffe3e3"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TransactionCard
              title="Revenue Status"
              value="$432"
              chartType="bar"
              data={data3}
              color="#f3d4ff"
            />
          </Grid>
        </Grid>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "30%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="mb-6 font-bold text-sm pt-4 px-4">
            Transaction Calendar
          </h2>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar defaultValue={dayjs("2024-07-22")} readOnly />
          </LocalizationProvider>
        </div>

        <div
          className="card border-1 bg-white"
          style={{
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "65%",
          }}
        >
          <h2 className="mb-4 font-bold text-sm pt-4 px-4">
            Transaction Details
          </h2>

          <div className="table-responsive py-3 px-5">
            <TableContainer>
              <Table sx={{ minWidth: "50%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Trip Name</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Mode of Transport</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">{row.mode}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "60px",
        }}
      >
        <div
          className="card border-1 bg-white"
          style={{
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "35%",
          }}
        >
          <h2 className="mb-4 font-bold text-sm pt-4 px-4">
            Pie Chart Example
          </h2>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data2}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                />
                <Tooltip />
                <PieCenterLabel>Center label</PieCenterLabel>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className="card border-1 bg-white"
          style={{
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "60%",
          }}
        >
          <h2 className="mb-1 font-bold text-sm pt-4 px-4">
            Transaction Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        className="card mt-14 border-1 bg-white"
        style={{
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
        }}
      >
        <h2 className="mb-4 font-bold text-sm pt-4 px-4">Line Chart Example</h2>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={data1}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Transactions;
