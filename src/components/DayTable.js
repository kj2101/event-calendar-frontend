import React, { useEffect, useState } from "react";

export default function DayTable({
  selectedYear,
  selectedMonth,
  selectedDate,
  selectedDateIndex,
}) {
  const dayList = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const jsDayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [dayName, setDayName] = useState(
    jsDayList[
      new Date(`${selectedMonth} ${selectedDate}, ${selectedYear}`).getDay()
    ]
  );
  useEffect(() => {
    setDayName(
      jsDayList[
        new Date(`${selectedMonth} ${selectedDate}, ${selectedYear}`).getDay()
      ]
    );
  }, [selectedYear, selectedMonth, selectedDate, selectedDateIndex]);

  return (
    <table className="dayTable">
      {dayList.map((day, index) => (
        <tr>
          {dayList.slice(index, dayList.length).map((day) => (
            <td
              className={
                `${dayName}${selectedDateIndex}` === `${day}${index}`
                  ? "selectedDay"
                  : ""
              }
            >
              {day}
            </td>
          ))}
          {dayList.slice(0, index).map((day) => (
            <td
              className={
                `${dayName}${selectedDateIndex}` === `${day}${index}`
                  ? "selectedDay"
                  : ""
              }
            >
              {day}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
