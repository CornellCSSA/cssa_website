export interface EventDataObject {
  title: string;
  time: string;
  description: string;
  image: string;
  link: string;
  orientation: 'left' | 'right';
}

export interface UpcomingEventDataObject {
  title: string;
  time: string;
  location: string;
  link: string;
  image: string;
}