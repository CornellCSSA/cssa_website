export interface EventDataObject {
  title: string;
  time: string;
  description: string;
  image: string;
  orientation: 'left' | 'right';
}

export interface UpcomingEventDataObject {
  title: string;
  time: string;
  location: string;
  image: string;
}