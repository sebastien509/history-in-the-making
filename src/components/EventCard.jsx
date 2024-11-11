// EventCard.jsx
import React from "react";
import { Link } from "react-router-dom";
// import './EventCard.css'; // Optional: For component-specific styles

function EventCard({ event }) {
  return (
      <Link to={`/home/event/${event.id}`} className="card">
    <div >
      <h4>{event.title}</h4>
      <h6>{event.data?.category} - {event.data?.country}</h6>
      <img src={event.img1} alt={event.title} />
      <button >Learn More</button>
    </div>
      </Link>
  );
}

export default EventCard;
