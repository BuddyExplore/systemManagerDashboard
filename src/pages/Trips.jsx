import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Table data
function createData(
  tripId,
  startLocation,
  destination,
  numberOfPeople,
  numberOfDays,
  from,
  to,
  status,
) {
  return {
    tripId,
    startLocation,
    destination,
    numberOfPeople,
    numberOfDays,
    from,
    to,
    status,
  };
}

const rows = [
  createData(
    1,
    "New York",
    "Los Angeles",
    2,
    5,
    "2024-07-01",
    "2024-07-06",
    "Approved",
  ),
  createData(
    2,
    "Boston",
    "Chicago",
    45,
    1,
    "2024-07-10",
    "2024-07-11",
    "Rejected",
  ),
  createData(
    3,
    "San Francisco",
    "Seattle",
    1,
    3,
    "2024-07-15",
    "2024-07-18",
    "Pending",
  ),
  createData(
    4,
    "Miami",
    "Orlando",
    8,
    7,
    "2024-07-20",
    "2024-07-27",
    "Approved",
  ),
  createData(
    5,
    "Dallas",
    "Houston",
    4,
    2,
    "2024-07-22",
    "2024-07-24",
    "Pending",
  )
];

const CustomIconButton = styled(IconButton)({
  boxShadow: "none",
});

const Trips = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [filterByStatus, setFilterByStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState([null, null]);
  const [sortOrder, setSortOrder] = useState("");
  const [dateFilterOption, setDateFilterOption] = useState('Last 30 Days');
  const [dateFilterAnchorEl, setDateFilterAnchorEl] = useState(null);

  const rowsPerPage = 10;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusFilterChange = (event) => {
    setFilterByStatus(event.target.value);
  };

  const handleDateFilterClick = (event) => {
    setDateFilterAnchorEl(event.currentTarget);
  };

  const handleDateFilterClose = () => {
    setDateFilterAnchorEl(null);
  };

  const handleDateFilterOptionChange = (option) => {
    setDateFilterOption(option);
    // Set date range based on option
    const now = dayjs();
    let newDateRange = [null, null];
    switch (option) {
      case 'Today':
        newDateRange = [now.startOf('day'), now.endOf('day')];
        break;
      case 'Yesterday':
        newDateRange = [now.subtract(1, 'day').startOf('day'), now.subtract(1, 'day').endOf('day')];
        break;
      case 'Last 7 Days':
        newDateRange = [now.subtract(7, 'days').startOf('day'), now.endOf('day')];
        break;
      case 'Last 30 Days':
        newDateRange = [now.subtract(30, 'days').startOf('day'), now.endOf('day')];
        break;
      case 'This Month':
        newDateRange = [now.startOf('month'), now.endOf('month')];
        break;
      case 'Last Month':
        newDateRange = [now.subtract(1, 'month').startOf('month'), now.subtract(1, 'month').endOf('month')];
        break;
      case 'Custom Range':
        // Don't set date range for custom option
        break;
      default:
        break;
    }
    setDateRange(newDateRange);
    if (option !== 'Custom Range') {
      handleDateFilterClose();
    }
  };

  const handleDateRangeChange = (newRange) => {
    setDateRange(newRange);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "green";
      case "Rejected":
        return "red";
      case "Pending":
        return "orange";
      default:
        return "black";
    }
  };

  const filterByDateRange = (row) => {
    if (!dateRange[0] || !dateRange[1]) return true;
    const fromDate = dayjs(row.from);
    const toDate = dayjs(row.to);
    return fromDate.isAfter(dateRange[0]) && toDate.isBefore(dateRange[1]);
  };

  const filteredRows = rows.filter((row) => {
    return (
      (!filterByStatus || row.status === filterByStatus) &&
      filterByDateRange(row)
    );
  });

  if (sortOrder === "newest") {
    filteredRows.sort((a, b) => new Date(b.from) - new Date(a.from));
  } else if (sortOrder === "oldest") {
    filteredRows.sort((a, b) => new Date(a.from) - new Date(b.from));
  }

  const totalRows = filteredRows.length;

  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginatedRows = filteredRows.slice(startIdx, endIdx);

  const uniqueStatuses = [...new Set(rows.map((row) => row.status))];

  const grayButtonStyle = {
    color: 'gray',
    borderColor: 'gray',
  };

  return (
    <>
      <Box sx={{ alignItems: "right", textAlign: "right" }}>
        <div className="d-flex justify-content-end align-items-center mt-24 mb-1 px-4">
          <FormControl
            variant="outlined"
            style={{
              minWidth: 150,
              minHeight: 50,
              marginRight: "20px",
              borderRadius: "100px",
            }}
          >
            <InputLabel>Filter By Status</InputLabel>
            <Select
            variant="outlined"
              value={filterByStatus}
              onChange={handleStatusFilterChange}
              label="Filter By Status"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {uniqueStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            onClick={handleDateFilterClick}
            endIcon={<ArrowDropDownIcon />}
            style={{ marginRight: "20px", minHeight: 55, border: "1px solid rgb(128,128,128,0.5)", ...grayButtonStyle }}
          >
            {dateFilterOption}
          </Button>
          <Popover
            open={Boolean(dateFilterAnchorEl)}
            anchorEl={dateFilterAnchorEl}
            onClose={handleDateFilterClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <List>
                <ListItem button onClick={() => handleDateFilterOptionChange('Today')}>
                  <ListItemText primary="Today" />
                </ListItem>
                <ListItem button onClick={() => handleDateFilterOptionChange('Yesterday')}>
                  <ListItemText primary="Yesterday" />
                </ListItem>
                <ListItem button onClick={() => handleDateFilterOptionChange('Last 7 Days')}>
                  <ListItemText primary="Last 7 Days" />
                </ListItem>
                <ListItem button onClick={() => handleDateFilterOptionChange('Last 30 Days')}>
                  <ListItemText primary="Last 30 Days" />
                </ListItem>
                <ListItem button onClick={() => handleDateFilterOptionChange('This Month')}>
                  <ListItemText primary="This Month" />
                </ListItem>
                <ListItem button onClick={() => handleDateFilterOptionChange('Last Month')}>
                  <ListItemText primary="Last Month" />
                </ListItem>
                <ListItem button onClick={() => handleDateFilterOptionChange('Custom Range')}>
                  <ListItemText primary="Custom Range" />
                </ListItem>
              </List>
              {dateFilterOption === 'Custom Range' && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateRangePicker
                    value={dateRange}
                    onChange={handleDateRangeChange}
                    renderInput={(startProps, endProps) => (
                      <>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                      </>
                    )}
                  />
                </LocalizationProvider>
              )}
            </Box>
          </Popover>

          <FormControl
            variant="outlined"
            style={{
              minWidth: 150,
              minHeight: 50,
              borderRadius: "100px",
            }}
          >
            <InputLabel>Sort By</InputLabel>
            <Select value={sortOrder} onChange={handleSortOrderChange} label="Sort By">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>

      <div
        className="table-responsive py-3 px-5"
        style={{
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
          marginTop: "30px",
        }}
      >
        <div className="table-responsive py-3 px-5">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold'}}>Trip ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>Start location</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>Destination</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>No of people</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>No of days</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>From</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>To</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>Bookings</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>Special Requests</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRows.map((row) => (
                  <TableRow
                    key={row.tripId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.tripId}
                    </TableCell>
                    <TableCell>{row.startLocation}</TableCell>
                    <TableCell>{row.destination}</TableCell>
                    <TableCell>{row.numberOfPeople}</TableCell>
                    <TableCell>{row.numberOfDays}</TableCell>
                    <TableCell>{row.from}</TableCell>
                    <TableCell>{row.to}</TableCell>
                    <TableCell>
                      <Button variant="outlined" style={grayButtonStyle}>Bookings</Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="outlined" style={grayButtonStyle}>Notes</Button>
                    </TableCell>
                    <TableCell style={{ color: getStatusColor(row.status) }}>
                      {row.status}
                    </TableCell>
                    <TableCell>
                      <CustomIconButton onClick={handleClick}>
                      <VisibilityIcon />
                      </CustomIconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'right',
          mt: 5,
          mb:5,
          px: 4,
        }}
      >
        <span>{paginatedRows.length} of {totalRows} rows</span>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(totalRows / rowsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
        <span>Page {currentPage} of {Math.ceil(totalRows / rowsPerPage)}</span>
      </Box>
    </>
  );
};

export default Trips;
