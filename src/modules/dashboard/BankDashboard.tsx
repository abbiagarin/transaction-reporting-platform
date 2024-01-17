import React, { useState } from "react";
import { Container, Box, Button, Paper } from "@mui/material";
import Calendar from "components/calendar/Calendar";
import CustomTab from "components/customTab/CustomTab";
import CustomCard from "components/customCard/CustomCard";
import BarChart from "components/chart/bar/BarChart";
import LineChart from "components/chart/line/LineChart";
import { CardData, TabData } from "./index";

const BankDashboard = () => {
  const [selectedChart, setSelectedChart] = useState("bar");

  const boxStyles = {
    mb: { xs: 2, md: 0 },
    mr: { xs: 0, md: 3 },
    flex: "0 1 auto",
  };

  const buttonStyle = {
    bgcolor: "#191970",
    color: "#FFFF",
    px: 3.5,
    py: 1.5,
  };

  const buttonTextStyle = {
    color: "#191970",
  };

  const cardStyle = {
    width: "100%",

    "@media (max-width: 600px)": {
      width: "70%",
      margin: "0 auto",
    },
  };

  const handleChartButtonClick = (chartType: string) => {
    setSelectedChart(chartType);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Container maxWidth="xl" sx={{ flex: "1", my: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            justifyContent: { xs: "center", md: "space-between" },
            my: 2,
          }}
        >
          <Box component="span" sx={boxStyles}>
            <CustomTab tabs={TabData} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
            }}
          >
            <Box component="span" sx={boxStyles}>
              <Calendar />
            </Box>

            <Box component="span" sx={boxStyles}>
              <Button variant="contained" sx={buttonStyle}>
                Search
              </Button>
            </Box>
          </Box>
        </Box>

        <Box sx={cardStyle}>
          <CustomCard papers={CardData} container />
        </Box>

        <Paper
          sx={{
            width: "100%",
            my: 2,
            p: 2,
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Button
              onClick={() => handleChartButtonClick("bar")}
              variant={selectedChart === "bar" ? "contained" : "text"}
              sx={{
                ...(selectedChart === "bar" ? buttonStyle : buttonTextStyle),
              }}
            >
              Bank Reports
            </Button>
            <Button
              onClick={() => handleChartButtonClick("line")}
              variant={selectedChart === "line" ? "contained" : "text"}
              sx={{
                ...(selectedChart === "line" ? buttonStyle : buttonTextStyle),
              }}
            >
              Handlers
            </Button>
          </span>
          <Box>
            <div
              style={{
                width: "95%",
                margin: "auto",
              }}
            >
              <div
                style={{
                  width: "100%",
                  overflowX: "scroll",
                  overflowY: "hidden",
                }}
              >
                {selectedChart === "bar" ? <BarChart /> : <LineChart />}
              </div>
            </div>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default BankDashboard;
