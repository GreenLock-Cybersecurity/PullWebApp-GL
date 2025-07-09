import './events-card.css'
import type { Event } from "../../pages/events-page/events-page";
import { CalendarIcon, ClockIcon, LocationIcon, HangerIcon } from '../../icons/icons';
import { InfoComponent } from './info-component';

export const EventCard = ({ event }: { event: Event }) => {

    return (
        <div className="event-card">
            <img src={event.imageUrl} alt={event.name} width={120} height={160} />
            <div className="event-info">
                <div className="header-info">
                    <p className='title'>{event.name}</p>
                </div>
                <p className='date'><CalendarIcon strokeColor='white' /> {event.date}</p>
                <div className="event-extra-info">
                    <InfoComponent icon={<ClockIcon strokeColor={'var(--light-color-gray)'} />} text={`${event.openingTime} - ${event.closingTime}`} />
                    <InfoComponent icon={<LocationIcon strokeColor={'var(--light-color-gray)'} />} text={event.venueName} />
                    <InfoComponent icon={<HangerIcon strokeColor={'var(--light-color-gray)'} />} text={event.dressCode} />
                </div>
            </div>
        </div>
    )
}