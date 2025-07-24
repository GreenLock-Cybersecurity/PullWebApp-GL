import { NavLink } from 'react-router-dom';
import { ClockIcon, LocationIcon } from '../../icons/icons';
import './venues-card.css';
import type { VenueInfo } from '../../types/types';

export const VenuesCard = ({ venue }: { venue: VenueInfo }) => {

    const open = venue.open_time.slice(0, 5);
    const close = venue.close_time.slice(0, 5);

    return (
        <NavLink to={`/venues/${venue.slug}/events`} className="venues-card-container">
            <img src={venue.image} alt={venue.venue_name} width={150} height={150} />
            <div className="venue-info">
                <p className='title'>{venue.venue_name}</p>
                <div>
                    <p className='extra-info'><ClockIcon strokeColor={'var(--light-color-gray)'} /> {open} to {close}</p>
                    <p className='extra-info'><LocationIcon strokeColor={'var(--light-color-gray)'} /> {venue.location}</p>
                </div>
            </div>
        </NavLink>
    );
};
