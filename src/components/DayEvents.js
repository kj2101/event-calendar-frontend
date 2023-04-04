import React, { useState } from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";

export default function DayEvents({
  events,
  selectedMonth,
  selectedYear,
  selectedDate,
}) {
  const [addingEvent, setAddingEvent] = useState(false);
  const [eventDetails, setEventDetails] = useState("");
  const [eventsArray, setEventsArray] = useState(events);

  function addEvent() {
    axios
      .post("http://localhost:3000/eventList", {
        event_details: eventDetails,
        monthYear: `${selectedMonth}${selectedYear}`,
        dateDay: selectedDate,
      })
      .then((response) => {
        setEventsArray([
          ...eventsArray,
          {
            id: response.data,
            event_details: eventDetails,
            monthYear: `${selectedMonth}${selectedYear}`,
            dateDay: selectedDate,
          },
        ]);
        setAddingEvent(!addingEvent);
      });
  }

  function deleteEvent(id) {
    axios.delete(`http://localhost:3000/eventList/${id}`).then(response => {
      setEventsArray(eventsArray.filter(eventDetail => id != eventDetail.id));
    })
  }
  return (
    <div className="dayEvents">
      {eventsArray &&
        eventsArray.map((event) => (
          <div class="eventContainer">
            <div className="eventDetails">- {event.event_details} </div>{" "}
            <div className="closeIcon">
              <AiFillCloseCircle onClick={()=>deleteEvent(event.id)}/>
            </div>
          </div>
        ))}
      {addingEvent && (
        <input
          placeholder="Add event details"
          value={eventDetails}
          onChange={(e) => {
            setEventDetails(e.target.value);
          }}
        />
      )}
      {addingEvent && (
        <button
          onClick={addEvent}
          className="dayEventsButton"
        >
          Submit
        </button>
      )}
      {!addingEvent && (
        <button
          onClick={() => setAddingEvent(!addingEvent)}
          className="dayEventsButton"
        >
          Add Event+
        </button>
      )}
    </div>
  );
}
