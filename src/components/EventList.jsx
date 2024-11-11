// EventsPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EventCard from './EventCard';
// import './EventsPage.css'; // Optional: For component-specific styles

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function EventList() {
  const query = useQuery();
  const century = query.get('century') || '';
  const country = query.get('country') || '';
  const category = query.get('category') || '';

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading]= useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilteredEvents = async () => {
      try {
        // Build query string for json-server
        let queryString = '?';
        if (century) queryString += `data.century=${encodeURIComponent(century)}&`;
        if (country) queryString += `data.country=${encodeURIComponent(country)}&`;
        if (category) queryString += `data.category=${encodeURIComponent(category)}&`;

        const response = await fetch(`http://localhost:3000/events${queryString}`);
        if (!response.ok) throw new Error("Network response for filtered events was not OK");
        const eventData = await response.json();
        setEvents(eventData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching filtered events:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchFilteredEvents();
  }, [century, country, category]);

  if (isLoading){
    return <p>Loading filtered events...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (events.length === 0){
    return <p>No events found matching your criteria.</p>;
  }

  return (
    <div className="filtered-events-page">
      <h2>Filtered Events</h2>
      <div className="card-container">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventList;
