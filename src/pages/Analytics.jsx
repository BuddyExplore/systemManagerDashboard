import { useEffect } from "react";
import AnalyticsBox from "./components/analyticsBox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import AirportShuttleSharpIcon from "@mui/icons-material/AirportShuttleSharp";
import { MdElectricRickshaw } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/*graph data*/
const data = [
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

/*table data*/
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Analytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="section py-3 px-3 w-full">
        <div
          className="dashboardWrapper "
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px", 
            marginTop: '80px',
          }}
        >
          <AnalyticsBox
            title="Total Sales"
            amount="$120,784.02"
            percentage="12.3%"
            todayAmount="+$1,453.89"
            isIncrease={true}
            borderColor="rgba(0,0,0,0.1)"
          />
          <AnalyticsBox
            title="Total Orders"
            amount="28,834"
            percentage="20.1%"
            todayAmount="+$2,676"
            isIncrease={true}
            borderColor="rgba(0,0,0,0.1)"
          />
          <AnalyticsBox
            title="Visitor"
            amount="$18,896"
            percentage="5.6%"
            todayAmount="-876"
            isIncrease={false}
            borderColor="rgba(0,0,0,0.1)"
          />
          <AnalyticsBox
            title="Refunded"
            amount="$2,876"
            percentage="13%"
            todayAmount="+34"
            isIncrease={true}
            borderColor="rgba(0,0,0,0.1)"
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className="card mt-10 border-0"
          style={{
            width: "50%",
            border: "2px solid white",
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <h2 className="mb-4 font-bold text-sm">Sales Report</h2>
          <div style={{ height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  horizontal={false}
                />
                <Bar
                  dataKey="pv"
                  fill="#0078A1"
                  background={{ fill: "rgb(0, 120, 161,0.1)" }}
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className="card mt-10 border-0"
          style={{
            width: "45%", // Adjusted width to fit two items in a row
            border: "2px solid white",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <h2 className="mb-4 font-bold text-sm mb-7">Goals Budget</h2>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
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
            </div>

            <div
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
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
            </div>

            <div
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
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
            </div>

            <div
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
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
      </div>

      <div
        className="card mt-10 border-1 bg-white"
        style={{
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="mb-4 font-bold text-sm pt-4 px-4">Pending Trips</h2>

        <div className="table-responsive py-3 px-5">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Analytics;
