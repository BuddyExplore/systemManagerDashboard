import { useEffect, useState } from "react";
import DashboardBox from "./components/dashboardBox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import AirportShuttleSharpIcon from "@mui/icons-material/AirportShuttleSharp";
import { MdElectricRickshaw } from "react-icons/md";
import ReactApexChart from "react-apexcharts";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

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
  /*line chart data*/
  const [state, setState] = useState({
    series: [
      {
        name: "Previous Month",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Last 12 days",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      colors: ["#0078A1", "#4B6D4F"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09",
          "2018-10",
          "2018-11",
          "2018-12",
          "2019-01",
          "2019-02",
          "2019-03",
        ],
      },
      tooltip: {
        x: {
          format: "MM",
        },
      },
    },
  });

  /*pie chart data*/
  /* Pie chart data */
  const [pieChartState, setPieChartState] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="section py-3 px-3 w-[full]">
        <div className="dashboardWrapper flex justify-between">
          <DashboardBox
            icon={<PaymentsOutlinedIcon />}
            title="Total Expenses"
            amount="Rs.2000"
            change="0.43%"
            isPositive={true}
          />
          <DashboardBox
            icon={<AttachMoneyIcon />}
            title="30 Days Revenue"
            amount="Rs.30,000"
            change="4.35%"
            isPositive={true}
          />
          <DashboardBox
            icon={<LuggageOutlinedIcon />}
            title="Total Trips"
            amount="200"
            change="2.59%"
            isPositive={true}
          />
          <DashboardBox
            icon={<PersonOutlineIcon />}
            title="Total Users"
            amount="450"
            change="0.95%"
            isPositive={false}
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
          <h2 className="mb-4 font-bold text-sm">Revenue</h2>
          <div>
            <div id="chart">
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="area"
                height={350}
              />
            </div>
            <div id="html-dist"></div>
          </div>
        </div>

        <div
          className="card mt-10 border-0"
          style={{
            width: "30%",
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <div
          className="card mt-10 border-1 bg-white"
          style={{
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "30%",
          }}
        >
          <h2 className="mb-4 font-bold text-sm pt-4 px-4">
            Recently Added Locations
          </h2>

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

        {/*<div
          className="card mt-10 border-1 bg-white"
          style={{
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "25%",
          }}
        >
          <h2 className="mb-4 font-bold text-sm pt-4 px-4">
            Pie Chart Example
          </h2>
          <div style={{ width: "100%", height: 300 }}>
            <div id="chart">
              <ReactApexChart
                options={pieChartState.options}
                series={pieChartState.series}
                type="donut"
              />
            </div>
            <div id="html-dist"></div>
          </div>
        </div>*/}

        <div
          className="card mt-10 border-1 bg-white"
          style={{
            width: "25%", 
            border: "2px solid white",
            backgroundColor: "white",
            padding: "15px",
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
