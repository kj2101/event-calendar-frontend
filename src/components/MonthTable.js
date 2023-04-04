import React, { useState, useEffect } from "react";
import {
  MONTH_ID_MAP_LEAP_YEAR,
  MONTH_ID_MAP_NON_LEAP_YEAR,
} from "../constants/monthConstants";

export default function MonthTable({
  selectedYear,
  setSelectedMonth,
  selectedMonth,

}) {
  const [monthMap, setMonthMap] = useState({});
  useEffect(() => {
    const firstDay = new Date(`January 1, ${selectedYear}`).getDay();
    const isLeap = parseInt(selectedYear % 4) === 0;
    const monthMapObject = {};
    if (isLeap) {
      Object.keys(MONTH_ID_MAP_LEAP_YEAR).map((key) => {
        monthMapObject[key] = MONTH_ID_MAP_LEAP_YEAR[(key - firstDay + 8) % 7];


      });
    } else {
      Object.keys(MONTH_ID_MAP_NON_LEAP_YEAR).map((key) => {
        monthMapObject[key] =
          MONTH_ID_MAP_NON_LEAP_YEAR[(key - firstDay + 9) % 7];


      });
    }
    setMonthMap(monthMapObject);
  }, [selectedYear]);

  return (
    <table className="monthTable">
      <tr>
        {Object.keys(monthMap).map((key) => (
          <td>
            <button
              class={monthMap[key][0] == selectedMonth ? "selectedMonth" : ""}
              onClick={() => {
                setSelectedMonth(monthMap[key][0]);
              }}
            >
              {monthMap[key][0]}
            </button>
          </td>
        ))}
      </tr>
      <tr>
        {Object.keys(monthMap).map((key) => (
          <td>
            {monthMap[key][1] ? (
              <button
                class={monthMap[key][1] == selectedMonth ? "selectedMonth" : ""}
                onClick={() => {
                  setSelectedMonth(monthMap[key][1]);
                }}
              >
                {monthMap[key][1]}
              </button>
            ) : (
              <span></span>
            )}
          </td>
        ))}
      </tr>
      <tr>
        {Object.keys(monthMap).map((key) => (
          <td>
            {monthMap[key][2] ? (
              <button
                class={monthMap[key][2] == selectedMonth ? "selectedMonth" : ""}
                onClick={() => {
                  setSelectedMonth(monthMap[key][2]);
                }}
              >
                {monthMap[key][2]}
              </button>
            ) : (
              <span></span>
            )}
          </td>
        ))}
      </tr>
    </table>
  );
}
