import React, { useState, useEffect, useRef } from "react";
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
  const refOne = useRef<any>(null);
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
    if (refOne.current) {
      refOne.current.focus(); // Focus on the input box when opening the calendar
    }
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

    const handleHideOnClickOutside = (event: MouseEvent) => {
      if (refOne.current && !refOne.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape, true);
    document.addEventListener("click", handleHideOnClickOutside, true);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleHideOnClickOutside);
    };
  }, []);

  return (
    <div className={styles.calendarWrap}>
      <div
        className={styles.inputBox}
        onClick={handleOpen}
        ref={refOne}
        tabIndex={0}
      >
        {/* Add tabIndex to make the div focusable */}
        <span>{startDate}</span>
        <span>
          <ArrowRightAltIcon className={styles.arrow} />
        </span>
        <span>{endDate}</span>
      </div>

      <div ref={refOne}>
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
    </div>
  );
};

export default Calendar;
