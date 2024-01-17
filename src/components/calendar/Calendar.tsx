import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import format from "date-fns/format";
import styles from "./Calendar.module.scss";
import "./index.css";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Calendar = () => {
  // open/close state
  const [open, setOpen] = useState(false);
  // date state
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const startDate = format(dateRange[0].startDate, "dd/MM/yyyy");
  const endDate = format(dateRange[0].endDate, "dd/MM/yyyy");

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  // Callback for date range selection
  const handleOnChange = (item: any) => {
    setDateRange([item.selection]);
  };

  // Add event listener for the "Escape" key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={styles.calendarWrap}>
      <div className={styles.inputBox} onClick={handleOpen}>
        <span>{startDate}</span>
        <span>
          <ArrowRightAltIcon className={styles.arrow} />
        </span>
        <span>{endDate}</span>
      </div>

      {open && (
        <div className={styles.calender}>
          <DateRangePicker
            onChange={handleOnChange}
            moveRangeOnFirstSelection={true}
            editableDateInputs={true}
            months={1}
            ranges={dateRange}
            direction="horizontal"
            maxDate={new Date()}
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;
