import React from 'react'
import EventList from './EventList'

function EventContainer({events, setEvents}) {
  return (
    <div> 
      <EventList events={events} setEvents= {setEvents}/>       
    </div>
  )
}

export default EventContainer