import { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import DayTable from "./components/DayTable";
import MonthTable from "./components/MonthTable";
import YearScroller from "./components/YearScroller";


function App() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState("JAN");

  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() => {
    setSelectedDate(1);
    setSelectedDateIndex(0);
  }, [selectedMonth]);
  return (
    <div className="container">
      <div className="wrapper">
        <YearScroller
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <MonthTable
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      </div>
      <div className="wrapper">
        <Calendar
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          setSelectedDateIndex={setSelectedDateIndex}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <DayTable
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          selectedDateIndex={selectedDateIndex}
          selectedDate={selectedDate}
        />
      </div>
    </div>
  );
}

export default App;
