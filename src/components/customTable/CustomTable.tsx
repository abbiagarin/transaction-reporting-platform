import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import masterCard from "../../assets/masterCard.png";
import visaCard from "../../assets/visaCard.png";
import verveCard from "../../assets/verveCard.png";
import redRectangle from "assets/redRectangle.png";
import yellowRectangle from "assets/yellowRectangle.png";
import grayRectangle from "assets/grayRectangle.png";
import style from "./CustomTable.module.scss";
import styles from "../bankDashboard/BankDashboard.module.scss";

interface bankCardPerformanceProps {
  BankName: string;
  MasterCard: number;
  VisaCard: number;
  VerveCard: number;
}

const tabelRowsData: bankCardPerformanceProps[] = [
  { BankName: "Access Bank", MasterCard: 45, VisaCard: 90, VerveCard: 85 },
  { BankName: "Eco Bank", MasterCard: 90, VisaCard: 90, VerveCard: 65 },
  { BankName: "First Bank", MasterCard: 95, VisaCard: 90, VerveCard: 85 },
  { BankName: "FCMB", MasterCard: 91, VisaCard: 90, VerveCard: 85 },
  { BankName: "Fidelity Bank", MasterCard: 80, VisaCard: 53, VerveCard: 85 },
  { BankName: "GTBank", MasterCard: 81, VisaCard: 90, VerveCard: 85 },
  { BankName: "Globus Bank", MasterCard: 90, VisaCard: 90, VerveCard: 85 },
  { BankName: "Heritage Bank", MasterCard: 35, VisaCard: 90, VerveCard: 85 },
  { BankName: "Keystone Bank", MasterCard: 99, VisaCard: 90, VerveCard: 85 },
  { BankName: "Lotus Bank", MasterCard: 99, VisaCard: 90, VerveCard: 85 },
  { BankName: "Providus Bank", MasterCard: 98, VisaCard: 90, VerveCard: 85 },
  { BankName: "Stanbic IBTC", MasterCard: 92, VisaCard: 90, VerveCard: 85 },
  { BankName: "Sterling Bank", MasterCard: 91, VisaCard: 90, VerveCard: 85 },
  { BankName: "SunTrust Bank", MasterCard: 95, VisaCard: 90, VerveCard: 85 },
  { BankName: "UBA", MasterCard: 94, VisaCard: 90, VerveCard: 85 },
  { BankName: "Polaris Bank", MasterCard: 93, VisaCard: 90, VerveCard: 85 },
  { BankName: "Union Bank", MasterCard: 92, VisaCard: 90, VerveCard: 85 },
  { BankName: "Unity Bank", MasterCard: 92, VisaCard: 90, VerveCard: 85 },
  { BankName: "Wema Bank", MasterCard: 91, VisaCard: 90, VerveCard: 85 },
  { BankName: "Zenith Bank", MasterCard: 98, VisaCard: 90, VerveCard: 85 },
];

const CustomTable = () => {
  const [rows, setRows] = useState<bankCardPerformanceProps[]>(tabelRowsData);
  const [searched, setSearched] = useState<string>("");
  const [filteredRows, setFilteredRows] = useState<bankCardPerformanceProps[]>(
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearched(e.target.value);
  };

  useEffect(() => {
    const filtered = searched
      ? rows.filter((row) =>
          row.BankName.toLowerCase().includes(searched.toLowerCase())
        )
      : rows;
    setFilteredRows(filtered);
  }, [searched, rows]);

  const handleSearch = () => {
    setSearched("");
  };

  return (
    <div className={style["table-container"]}>
      <div className={style["input-container"]}>
        <input
          type="text"
          placeholder="Search by bank name"
          value={searched}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          className={styles.button}
          sx={{ px: { xs: 3.5, md: 5 }, py: 1 }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>

      <Box className={style["image-wrapper"]}>
        <Typography variant="body1" className={style.typography}>
          References:{" "}
        </Typography>

        <img src={redRectangle} alt="" />
        <Typography variant="body1" className={style.typography}>
          High Risk
        </Typography>

        <img src={yellowRectangle} alt="" />
        <Typography variant="body1" className={style.typography}>
          Medium Risk
        </Typography>

        <img src={grayRectangle} alt="" />
        <Typography variant="body1" className={style.typography}>
          Low Risk
        </Typography>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={style["table-header"]}>
              <TableCell>S/N</TableCell>
              <TableCell>Bank name</TableCell>
              <TableCell>
                <span>
                  <img
                    src={masterCard}
                    alt="masterCardLogo"
                    className={styles.cardLogo}
                  />
                  Mastercard performance
                </span>
              </TableCell>
              <TableCell>
                <span>
                  <img
                    src={visaCard}
                    alt="visaCardLogo"
                    className={styles.cardLogo}
                  />
                  Visa performance
                </span>
              </TableCell>
              <TableCell>
                <span>
                  <img
                    src={verveCard}
                    alt="verveCardLogo"
                    className={styles.cardLogo}
                  />
                  Verve performance
                </span>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            className={style["table-body"]}
            sx={{
              "& .MuiTableRow-root tr:": {
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              },
              "& .MuiTableRow-root tr": {
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px",
              },
            }}
          >
            {filteredRows.map((row, i) => (
              <TableRow key={i} className={style["table-row"]}>
                <TableCell component="th" scope="row">
                  {i + 1}.
                </TableCell>
                <TableCell>{row.BankName}</TableCell>
                <TableCell>{row.MasterCard}%</TableCell>
                <TableCell>{row.VisaCard}%</TableCell>
                <TableCell>{row.VerveCard}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
