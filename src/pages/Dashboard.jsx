import React, { useEffect } from "react";
import DashboardBox from "./components/dashboardBox";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaymentsIcon from "@mui/icons-material/Payments";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import AirportShuttleSharpIcon from "@mui/icons-material/AirportShuttleSharp";
import { MdElectricRickshaw } from "react-icons/md";

/* graph data */
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

/* table data */
function createTripData(id, destination, departureDate, arrivalDate, status) {
  return { id, destination, departureDate, arrivalDate, status };
}

const rows = [
  createTripData("T001", "Paris", "2024-08-01", "2024-08-05", "Pending"),
  createTripData("T002", "New York", "2024-08-10", "2024-08-15", "Confirmed"),
  createTripData("T003", "Tokyo", "2024-09-01", "2024-09-07", "Cancelled"),
  createTripData("T004", "Sydney", "2024-09-15", "2024-09-20", "Pending"),
  createTripData("T005", "London", "2024-10-01", "2024-10-07", "Confirmed"),
];

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="section py-3 px-3 w-[full]">
        <div className="dashboardWrapper flex justify-between">
          <DashboardBox
            icon={<PaymentsIcon />}
            title="Total Expenses"
            amount="$500"
            iconColor="rgb(205,92,92)"
            borderColor="rgba(205,92,92,0.5)"
          />
          <DashboardBox
            icon={<AttachMoneyIcon />}
            title="30 Days Revenue"
            amount="$3000"
            iconColor="rgba(98,121,204)"
            borderColor="rgba(98,121,204,0.5)"
          />
          <DashboardBox
            icon={<CardTravelIcon />}
            title="Total Trips"
            amount="200"
            iconColor="rgb(103,146,103)"
            borderColor="rgb(103,146,103,0.5)"
          />
          <DashboardBox
            icon={<GroupIcon />}
            title="Total Tourists"
            amount="450"
            iconColor="rgb(126,110,172)"
            borderColor="rgb(126,110,172,0.5)"
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className="card mt-10 border-0"
          style={{
            width: "65%",
            border: "2px solid white",
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <h2 className="mb-4 font-bold text-sm">Sales Report</h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={data}
              syncId="anyId"
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#0078A1"
                fill="rgb(0, 120, 161,0.5)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div
          className="card mt-10 border-0"
          style={{
            width: "30%", // Adjusted width to fit two items in a row
            border: "2px solid white",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <h2 className="mb-4 font-bold text-sm">User Accounts</h2>
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              marginBottom: "40px",
            }}
          >
            <p style={{ borderBottom: "1px solid #ddd", marginBottom: "5px" }}>
              Tourists : 20
            </p>
            <p style={{ borderBottom: "1px solid #ddd", marginBottom: "5px" }}>
              Tour Guides : 20
            </p>
            <p style={{ borderBottom: "1px solid #ddd", marginBottom: "5px" }}>
              Vehicle Owners : 20
            </p>
            <p style={{ borderBottom: "1px solid #ddd", marginBottom: "5px" }}>
              Hotel Managers : 20
            </p>
            <p style={{ borderBottom: "1px solid #ddd", marginBottom: "5px" }}>
              Activity Providers : 20
            </p>
          </div>

          <h2 className="mb-4 font-bold text-sm">Type of Transport</h2>
          <div
            style={{
              display: "flex",
              gap: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MdElectricRickshaw
              style={{
                color: "rgb(103,146,103)",
                borderRadius: "5px",
                backgroundColor: "rgba(103,146,103,0.2)",
                width: "10%",
                height: "8%",
                padding: "5px",
              }}
            />
            <DirectionsCarIcon
              style={{
                color: "rgb(205,92,92)",
                borderRadius: "5px",
                backgroundColor: "rgba(205,92,92,0.2)",
                width: "10%",
                height: "8%",
                padding: "5px",
              }}
            />
            <DirectionsBusFilledIcon
              style={{
                color: "rgba(98,121,204)",
                borderRadius: "5px",
                backgroundColor: "rgba(98,121,204,0.2)",
                width: "10%",
                height: "8%",
                padding: "5px",
              }}
            />
            <AirportShuttleSharpIcon
              style={{
                color: "rgb(126,110,172)",
                borderRadius: "5px",
                backgroundColor: "rgba(126,110,172,0.2)",
                width: "10%",
                height: "8%",
                padding: "5px",
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop:"50px" }}>
        <div
          className="card mt-10 border-1 bg-white"
          style={{
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "65%",
          }}
        >
          <h2 className="mb-4 font-bold text-sm pt-4 px-4">Pending Trips</h2>

          <div className="table-responsive py-3 px-5 ">
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Trip ID</TableCell>
                    <TableCell align="right">Destination</TableCell>
                    <TableCell align="right">Departure Date</TableCell>
                    <TableCell align="right">Arrival Date</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.destination}</TableCell>
                      <TableCell align="right">{row.departureDate}</TableCell>
                      <TableCell align="right">{row.arrivalDate}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <div
          className="card mt-10 border-0"
          style={{
            width: "30%", // Adjusted width to fit two items in a row
            border: "2px solid white",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <h2 className="mb-4 font-bold text-sm">User Accounts</h2>
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              marginBottom: "40px",
            }}
          >
            <p style={{ borderBottom: "1px solid #ddd", marginBottom: "5px" }}>
              Tourists : 20
            </p>
            <p style={{ borderBottom: "1px solid #ddd", marginBottom: "5px" }}>
              Tour Guides : 20
            </p>
            <p style={{ borderBottom: "1px solid #ddd", marginBottom: "5px" }}>
              Vehicle Owners : 20
            </p>
            <p style={{ borderBottom: "1px solid #ddd", marginBottom: "5px" }}>
              Hotel Managers : 20
            </p>
            <p style={{ borderBottom: "1px solid #ddd", marginBottom: "5px" }}>
              Activity Providers : 20
            </p>
          </div>

          <h2 className="mb-4 font-bold text-sm">Type of Transport</h2>
          <div
            style={{
              display: "flex",
              gap: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MdElectricRickshaw
              style={{
                color: "rgb(103,146,103)",
                borderRadius: "5px",
                backgroundColor: "rgba(103,146,103,0.2)",
                width: "10%",
                height: "8%",
                padding: "5px",
              }}
            />
            <DirectionsCarIcon
              style={{
                color: "rgb(205,92,92)",
                borderRadius: "5px",
                backgroundColor: "rgba(205,92,92,0.2)",
                width: "10%",
                height: "8%",
                padding: "5px",
              }}
            />
            <DirectionsBusFilledIcon
              style={{
                color: "rgba(98,121,204)",
                borderRadius: "5px",
                backgroundColor: "rgba(98,121,204,0.2)",
                width: "10%",
                height: "8%",
                padding: "5px",
              }}
            />
            <AirportShuttleSharpIcon
              style={{
                color: "rgb(126,110,172)",
                borderRadius: "5px",
                backgroundColor: "rgba(126,110,172,0.2)",
                width: "10%",
                height: "8%",
                padding: "5px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
