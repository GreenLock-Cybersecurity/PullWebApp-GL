import { Layout } from '../../components/layout/layout'
import './event-venue-page.css'

import { EventCard } from "../../components/events-card/events-card";
import { ClockIcon, CurrentLocationIcon, EmailIcon, LocationIcon } from '../../icons/icons';
import { useEffect, useState } from 'react';
import { getEventsByVenue, getVenueDescription, getVenueInfo } from '../../controller/events-page-controller';
import { useParams } from 'react-router-dom';
import type { EventInfo, VenueDescription, VenueEventInfo } from '../../types/types';

export const VenueEventsPage = () => {

    const { venueId } = useParams<{ venueId: string }>();

    const [events, setAllEvents] = useState<EventInfo[]>([])
    const [venueInfo, setVenueInfo] = useState<VenueEventInfo | null>(null);
    const [venueDescription, setVenueDescription] = useState<VenueDescription | null>(null);

    const [loading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {

        if (!venueId) {
            setIsLoading(false);
            return;
        }

        getEventsByVenue(venueId).then((events) => {
            setAllEvents(events)
        }).catch((error) => {
            console.error("Error fetching events:", error)
        })

        getVenueInfo(venueId).then((venue) => {
            setVenueInfo(venue)
            setIsLoading(false)
        }).catch((error) => {
            console.error("Error fetching venue info:", error)
            setIsLoading(false)
        })

        getVenueDescription(venueId).then((description) => {
            setVenueDescription(description)
        }).catch((error) => {
            console.error("Error fetching venue description:", error)
        })

    }, [venueId])

    const [open, setOpen] = useState<string>('');
    const [close, setClose] = useState<string>('');

    useEffect(() => {
        if (venueInfo) {
            setOpen(venueInfo.open_time.slice(0, 5));
            setClose(venueInfo.close_time.slice(0, 5));
        }
    }, [venueInfo]);


    return (
        <Layout>
            <div className="event-venue-container">
                <div className="left-side-container">
                    <img src='https://imagenes.elpais.com/resizer/v2/UTNBLPGKLFMIHMSOEHKTMMFU7A.jpg?auth=4625799d1b99c8e1e2c65079f6abbbb8a8ed6e2127f3835a74893c26e06a1910&width=1200' alt='Venue Logo' width={130} height={130} />
                    <h2>{venueInfo?.name}</h2>
                    <div className="location-info">
                        <p>Capacity: {venueInfo?.capacity}</p>
                        <p><ClockIcon strokeColor='var(--light-color-gray)' /> {open} - {close}</p>
                        <p><EmailIcon strokeColor='var(--light-color-gray)' /> {venueInfo?.email}</p>
                        <p><LocationIcon strokeColor='var(--light-color-gray)' />{venueInfo?.long_location}</p>
                        {/* TODO: Implementar esto en lugar de hardcodear las variables `https://www.google.com/maps/search/?api=1&query=${lat},${long}` */}
                        <a href={`https://www.google.com/maps/search/?api=1&query=${40.4531},${-3.6883}`} className='direction-link' target='_blank'> <CurrentLocationIcon fillColor='white' /> Take me there</a>
                    </div>
                </div>
                <div className="middle-container">
                    <h2>Santiago Bernabeu Stadium</h2>
                    {events.length !== 0 && !loading ? events.map((event) => (
                        <EventCard key={event.event_id} event={event} isVenueEventPage />
                    )) : events.length === 0 && !loading ? (
                        <p>No events available</p>
                    ) : (
                        <p>Loading events...</p>
                    )}
                </div>
                <div className="right-side-container">
                    <div className="right-side-header">
                        <p className='title'>Venue Information</p>
                        <p>Find out more about the venue, its history, and upcoming events.</p>
                    </div>
                    <div className="venue-info">
                        <p className='description'>{venueDescription?.description}</p>
                        <p>For more information, visit the official website or contact us via email.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
