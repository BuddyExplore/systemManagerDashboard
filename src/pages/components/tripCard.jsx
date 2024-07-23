import { colors, IconButton } from "@mui/material";
import { RiMoreLine } from "react-icons/ri";

const TripCard = ({ icon, tripId, date, from, to }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.iconContainer}>{icon}</div>
        <div>
          <p style={styles.title}>Trip Id</p>
          <p style={styles.tripId}>{tripId}</p>
        </div>
        <div>
          <p style={styles.title}>Date</p>
          <p style={styles.tripId}>{date}</p>
        </div>
      </div>

      <div style={styles.dottedLine}></div>

      <div style={styles.route}>
        <div>
          <p style={styles.title}>From</p>
          <p style={styles.tripId}>{from}</p>
        </div>
        <div>
          <p style={styles.title}>To</p>
          <p style={styles.tripId}>{to}</p>
        </div>
      </div>
      <button style={styles.addButton}>Add Options</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    width: "300px",
    backgroundColor: "white",
    margin: "10px",
    textAlign: "center",
    marginTop: "80px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  iconContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: "50%",
    padding: "10px",
  },
  title: {
    fontSize: "12px",
    color: "#888",
  },
  tripId: {
    margin: 0,
    fontSize: "0.875rem",
    color: "#000",
  },
  route: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px 0",
  },
  dottedLine: {
    flexGrow: 1,
    height: "1px",
    background:
      "linear-gradient(to right, #0078a1 33%, rgba(255, 255, 255, 0) 0%)",
    backgroundSize: "6px 1px",
    backgroundRepeat: "repeat-x",
    margin: "0 10px",
  },
  addButton: {
    border: "1px solid #ddd",
    color: "black",
    borderRadius: "5px",
    width:"90%",
    padding: "5px 30px",
    cursor: "pointer",
    margin:"5px 0px"
  },
};

export default TripCard;
