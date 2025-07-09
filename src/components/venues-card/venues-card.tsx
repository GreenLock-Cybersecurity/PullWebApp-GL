import { NavLink } from 'react-router-dom';
import { ClockIcon, LocationIcon } from '../../icons/icons';
import type { Venues } from '../../pages/venues-page/venues-page';
import './venues-card.css';

export const VenuesCard = ({ venue }: { venue: Venues }) => {
    return (
        <NavLink to={`/venues/events/${venue.id}`} className="venues-card-container">
            <img src={venue.image} alt={venue.name} width={150} height={150} />
            <div className="venue-info">
                <p className='title'>{venue.name}</p>
                <div>
                    <p className='extra-info'><ClockIcon strokeColor={'var(--light-color-gray)'} /> {venue.open} to {venue.close}</p>
                    <p className='extra-info'><LocationIcon strokeColor={'var(--light-color-gray)'} /> {venue.location}</p>
                </div>
            </div>
        </NavLink>
    );
};
