import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  Paper,
  Grid,
  Card,
  Typography,
} from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

import {
  CardData,
  TabData,
  BarChart,
  LineChart,
  RadialChart,
  masterCard,
  visaCard,
  verveCard,
} from "./index";

import { cardAquirerScheme } from "components/chart/radial/data";
import { SelectBankButton } from "components/button/Button";
import Calendar from "components/calendar/Calendar";
import CustomTab from "components/customTab/CustomTab";
import CustomCard from "components/customCard/CustomCard";
import CustomTable from "components/customTable/CustomTable";
import TopError from "./data/TopError";
import {
  LeastBankPerformance,
  TopBankPerformance,
} from "./data/BankPerformance";

import styles from "./BankDashboard.module.scss";

const BankDashboard = () => {
  const [selectedChart, setSelectedChart] = useState("bar");

  const boxStyles = {
    mb: { xs: 2, md: 0 },
    mr: { xs: 0, md: 3 },
    flex: "0 1 auto",
  };

  const handleChartButtonClick = (chartType: string) => {
    setSelectedChart(chartType);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.containerWrapper}>
        <Container
          sx={{
            flex: "1",
            my: 10,
          }}
        >
          {/* Daily, weekly and monthly transactions, calender and search button */}
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

              <Box component="span">
                <Button
                  variant="contained"
                  sx={{ px: { xs: 3.5, md: 5 }, py: 1.5 }}
                  className={styles.button}
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Total, successful and failed transaction card */}
          <Box sx={styles.customCard}>
            <CustomCard papers={CardData} container />
          </Box>

          {/* Bar and line chart of bank transactions and handlers */}
          <Paper
            sx={{
              width: "100%",
              my: 2,
              p: 2,
            }}
          >
            <span className={styles.chartButton}>
              <Button
                onClick={() => handleChartButtonClick("bar")}
                variant={selectedChart === "bar" ? "contained" : "text"}
                sx={{ px: { xs: 3.5, md: 5 }, py: 1.5 }}
                className={
                  selectedChart === "bar" ? styles.button : styles.buttonText
                }
              >
                Bank Reports
              </Button>
              <Button
                onClick={() => handleChartButtonClick("line")}
                variant={selectedChart === "line" ? "contained" : "text"}
                sx={{ px: { xs: 3.5, md: 5 }, py: 1.5 }}
                className={
                  selectedChart === "line" ? styles.button : styles.buttonText
                }
              >
                Handlers
              </Button>
            </span>
            <Box>
              <div className={styles.chartWrapper}>
                <div
                  className={styles.scrollbar}
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

          <Grid container spacing={2}>
            <Grid item xs={12} md={8} sm={12}>
              <Paper>
                <Box
                  sx={{
                    mx: 4,
                    my: 1,
                  }}
                  className={styles.cardAcquirerWrapper}
                >
                  <Typography
                    variant="body1"
                    className={styles.cardAcquirerWrapperHeader}
                  >
                    Acquirer performance by card
                  </Typography>

                  <SelectBankButton />
                </Box>

                <Grid container>
                  {cardAquirerScheme.map((card, i) => (
                    <Grid item key={i} xs={12} md={4}>
                      <Card
                        sx={{
                          margin: "15px",
                          boxShadow: "1px 1px 1px 0.5px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div>
                          {card.name === "mastercard" && (
                            <img
                              src={masterCard}
                              alt=""
                              className={styles.cardLogo}
                            />
                          )}
                          {card.name === "visa" && (
                            <img
                              src={visaCard}
                              alt=""
                              className={styles.cardLogo}
                            />
                          )}
                          {card.name === "verve" && (
                            <img
                              src={verveCard}
                              alt=""
                              className={styles.cardLogo}
                            />
                          )}

                          <div>
                            <RadialChart data={[card]} />
                          </div>
                        </div>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    {/* card performance by acrquirer */}
                    <Paper sx={{ p: 1, mt: 2 }}>
                      <Box
                        sx={{
                          mx: 1.2,
                          my: 1,
                        }}
                        className={styles.cardAcquirerWrapper}
                      >
                        <Typography
                          variant="body1"
                          className={styles.cardAcquirerWrapperHeader}
                        >
                          Top Performing Banks
                        </Typography>

                        <NorthIcon
                          sx={{ color: "#369B07", fontSize: "20px" }}
                        />
                      </Box>

                      <Box>
                        <TopBankPerformance />
                      </Box>
                    </Paper>
                  </Grid>

                  {/* Bank performance */}
                  <Grid item xs={12} sm={6}>
                    <Paper sx={{ p: 1, mt: 2 }}>
                      <Box
                        sx={{
                          mx: 1.2,
                          my: 1,
                        }}
                        className={styles.cardAcquirerWrapper}
                      >
                        <Typography
                          variant="body1"
                          className={styles.cardAcquirerWrapperHeader}
                        >
                          Low Performing Banks
                        </Typography>

                        <SouthIcon
                          sx={{ color: "#EA0000", fontSize: "20px" }}
                        />
                      </Box>

                      <Box>
                        <LeastBankPerformance />
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Top 10 errors */}
            <Grid item xs={12} md={4} sm={12} sx={{ mb: 2 }}>
              <Paper sx={{ pb: 11, my: 1 }}>
                <Box
                  sx={{
                    mx: 1.2,
                  }}
                  className={styles.cardAcquirerWrapper}
                >
                  <Typography
                    variant="body1"
                    className={styles.cardAcquirerWrapperHeader}
                  >
                    Top 10 errors
                  </Typography>

                  <SelectBankButton />
                </Box>

                <Box>
                  <TopError />
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Bank Table*/}
          <Paper sx={{ pt: 2, pb: 3 }}>
            <Box
              sx={{
                mx: 1.2,
                my: 1.2,
              }}
              className={styles.cardAcquirerWrapper}
            >
              <Typography
                variant="body1"
                className={styles.cardAcquirerWrapperHeader}
                sx={{ ml: 1 }}
              >
                Bank transaction performance by card type
              </Typography>
            </Box>

            <CustomTable />
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default BankDashboard;
