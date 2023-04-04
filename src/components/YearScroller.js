import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function YearScroller({ selectedYear, setSelectedYear }) {
  return (
    <div className="yearScroller">
      <button className='scrollerButton' onClick={() => setSelectedYear(selectedYear - 1)}>
        <BsChevronCompactLeft />
      </button>
      <span>{selectedYear}</span>
      <button className='scrollerButton' onClick={() => setSelectedYear(selectedYear + 1)}>
        <BsChevronCompactRight />
      </button>
    </div>
  );
}
