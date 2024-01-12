import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ProgressBar({value,lang}) {
 

  return (
    <>
      <div>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            style={{ color: "#ffc107", width: "3rem",}}
            variant="determinate"
            value={value}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{ color: "grey", fontSize: "0.7rem", paddingLeft: "10px" }}
              variant="caption"
              component="div"
              color="text.secondary"
            >{`${Math.round(value)}%`}</Typography>
          </Box>
        </Box>
        <p
          style={{
            margin: "5px",
            paddingLeft: "3px",
            fontSize: "0.9rem",
            fontWeight: "400",
            color : "#fff",
            opacity:0.7,
          }}
        >
          {lang}
        </p>
      </div>
    </>
  );
}
