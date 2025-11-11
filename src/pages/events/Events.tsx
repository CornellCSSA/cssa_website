import './Events.css';
import EventCard from './EventCard';
import { eventsData } from './events.data';

export default function Events() {
  return (
    <div>
      <h1>Events</h1>
      <div className="events-container">
        {eventsData.map((eventData) => (
          <EventCard key={eventData.title} eventData={eventData} />
        ))}
      </div>
    </div>
  );
}
  