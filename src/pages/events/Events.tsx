import './Events.css';
import EventCard from './EventCard';
import { eventsData, upcomingEventData } from './events.data';
import UpcomingEventCard from './UpcomingEventCard';

export default function Events() {
  return (
    <div>
      <h1>Events</h1>
      <div className="upcoming-events-container">
        {upcomingEventData.map((upcomingEventData) => (
          <UpcomingEventCard key={upcomingEventData.title} upcomingEventData={upcomingEventData} />
        ))}
      </div>
      
      <div className="events-container">
        {eventsData.map((eventData) => (
          <EventCard key={eventData.title} eventData={eventData} />
        ))}
      </div>
    </div>
  );
}
  