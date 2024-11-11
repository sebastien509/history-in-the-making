import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error"; // Ensure Error is imported correctly

function EventsPage() {
  const [event, setEvent] = useState({});
  const params = useParams();
  const [error, setError] = useState(null);

  async function fetchEvents() {
    try {
      const response = await fetch(`http://localhost:3000/events/${params.id}`);
      if (!response.ok) throw new Error("Failed to fetch event data.");
      const data = await response.json();
      setEvent(data);
    } catch (caughtError) {
      console.error(caughtError);
      setError(caughtError);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, [params.id]);

  if (error) {
    return <Error />;
  }

  return (
    <div className="event-page">
      <h1>{event.title}</h1>
      <h2>{event.data?.category}</h2>
      <h2>{event.data?.country}</h2>
      <h2>{event.data?.century}</h2>
      <div className='event-images'>
      <img src={event.img1} alt="Event Image 1" />
      <img src={event.img2} alt="Event Image 2" />
      </div>
      <p>{event.data?.description}</p>
    </div>
  );
}

export default EventsPage;
