import Button from "@mui/material/Button";

export default function SummaryBtn({summaryBtn}) {
  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(248, 192, 7)", color: "black" }}
        onClick={summaryBtn}
      >
        Summary
      </Button>
    </div>
  );
}
