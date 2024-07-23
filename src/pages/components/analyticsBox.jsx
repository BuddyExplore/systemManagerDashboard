import { IconButton } from "@mui/material";
import { RiMoreLine } from "react-icons/ri";

const AnalyticsBox = ({
  title,
  amount,
  percentage,
  todayAmount,
  isIncrease,
  borderColor,
}) => {
  const percentageColor = isIncrease ? "green" : "red";
  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 className="mb-4 font-bold text-sm">{title}</h3>
          <IconButton aria-label="settings">
            <RiMoreLine />
          </IconButton>
        </div>
        <h2 style={{ margin: "10px 0" }}>{amount}</h2>
        <p style={{ margin: 0, color: percentageColor }}>
          {percentage} {isIncrease ? "▲" : "▼"} {todayAmount} today
        </p>
      </div>

      <a
        href="#"
        style={{
          color: "#0078A1",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        View Report
        <span
          style={{
            marginLeft: "5px",
            display: "inline-block",
            transform: "rotate(-45deg)",
          }}
        >
          ➜
        </span>
      </a>
    </div>
  );
};

export default AnalyticsBox;
