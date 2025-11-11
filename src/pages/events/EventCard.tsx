import { EventDataObject } from './event.type';

export default function EventCard({ eventData }: { eventData: EventDataObject }) {
  return (
    <div className="event-card">
        <img src={eventData.image} alt={eventData.title} className="event-image" />
        <div className="event-content">
            <h2 className="event-title">{eventData.title}</h2>
            <h5 className="event-time">时间：{eventData.time}</h5>
            <p className="event-description">{eventData.description}</p>
            <button className="event-button">往期回顾</button>
        </div>
    </div>
  );
}