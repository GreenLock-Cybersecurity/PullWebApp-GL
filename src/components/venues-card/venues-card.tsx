import type { Venues } from '../../pages/venues-page/venues-page';
import './venues-card.css';

export const VenuesCard = ({ venue }: { venue: Venues }) => {
    return (
        <div className="venues-card-container">
            <img src={venue.image} alt={venue.name} />
            <div className="venue-info">
                <p className='title'>{venue.name}</p>
                <div>
                    <p className='extra-info'>From {venue.open} to {venue.close}</p>
                    <p className='extra-info'>Address: {venue.location}</p>
                </div>
            </div>
        </div>
    );
};
