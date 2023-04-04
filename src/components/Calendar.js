import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MONTH_DAYS_LEAP_YEAR,
  MONTH_DAYS_NON_LEAP_YEAR,
} from "../constants/monthConstants";
import DayEvents from "./DayEvents";

export default function Calendar({
  selectedMonth,
  selectedYear,
  setSelectedDateIndex,
  selectedDate,
  setSelectedDate,
}) {
  const [eventMap, setEventMap] = useState({});
  const [emptyDivs, setEmptyDivs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/eventList/${selectedMonth}${selectedYear}`)
      .then(function (response) {
        let eventDaysMap = {};
        for (
          let i = 1;
          i <=
          (selectedYear % 4 != 0
            ? MONTH_DAYS_NON_LEAP_YEAR[selectedMonth]
            : MONTH_DAYS_LEAP_YEAR[selectedMonth]);
          i++
        ) {
          eventDaysMap[i] = response.data.filter(
            (event) => event["dateDay"] == i
          );
        }
        setEventMap(eventDaysMap);
        setEmptyDivs(new Array(35 - Object.keys(eventDaysMap).length).fill(""));
      });
  }, [selectedMonth, selectedYear, selectedDate]);
  return (
    <div className="days">
      {Object.keys(eventMap).map((day, index) => (
        <button
          class={selectedDate == day ? "selectedDate daysButton" : "daysButton"}
          onClick={() => {
            setSelectedDateIndex((day - 1) % 7);
            setSelectedDate(day);
          }}
        >
          {day}
          {selectedDate == day && (
            <DayEvents
              events={eventMap[index + 1]}
              selectedDate={selectedDate}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
            />
          )}
        </button>
      ))}
      {emptyDivs.map((emptyDiv) => (
        <div class="emptyDiv"></div>
      ))}
    </div>
  );
}
