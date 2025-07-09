import { Layout } from '../../components/layout/layout'
import './event-venue-page.css'

import { EventCard } from "../../components/events-card/events-card";
import type { Event } from '../events-page/events-page';
import { ClockIcon, CurrentLocationIcon, EmailIcon, LocationIcon } from '../../icons/icons';

const events: Event[] = [
    {
        id: "1",
        name: "The Champion Burger",
        date: "2025-08-31",
        openingTime: "18:00",
        closingTime: "22:00",
        venueName: "Santiago Bernabéu Stadium",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdEABBgvFKubXyPNsuBNpbi4wSInMyIwuFQ&s",
        minAge: 18,
        dressCode: "Casual"
    },
    {
        id: "2",
        name: "Aitana Concert - Summer Tour",
        date: "2025-09-15",
        openingTime: "19:00",
        closingTime: "22:00",
        venueName: "Wanda Metropolitano Stadium",
        imageUrl: "https://d2cyzdatssrhg7.cloudfront.net/export/sites/default/ets/.content/products/img/00-00087Zm.jpg?__locale=es",
        minAge: 16,
        dressCode: "Smart Casual"
    },
    {
        id: "3",
        name: "Oktoberfest 2025",
        date: "2025-10-20",
        openingTime: "12:00",
        closingTime: "20:00",
        venueName: "Central Park",
        imageUrl: "https://sellout-tickets.syd1.cdn.digitaloceanspaces.com/events/events_563_1747157725.png",
        minAge: 18,
        dressCode: "Traditional Bavarian"
    },
    {
        id: "4",
        name: "AWS Summit Madrid 2025",
        date: "2025-11-10",
        openingTime: "09:00",
        closingTime: "17:00",
        venueName: "Convention Center",
        imageUrl: "https://www.ifema.es/img/m/aws-logo/img-hb-aws-v2.jpg",
        minAge: 18,
        dressCode: "Business Casual"
    },
    {
        id: "5",
        name: "F1 The Movie Premiere",
        date: "2025-12-05",
        openingTime: "19:30",
        closingTime: "21:30",
        venueName: "City Theater",
        imageUrl: "https://img.asmedia.epimg.net/resizer/v2/OOLTDRGJ6NEOZEZKF65342QGYM.jpg?auth=eb452597dfdceab148a1a849b169827795de8bc8907ff5662cb192fcc417324e&width=1472&height=828&smart=true",
        minAge: 16,
        dressCode: "Smart Casual"
    }
]

export const VenueEventsPage = () => {
    return (
        <Layout>
            <div className="event-venue-container">
                <div className="left-side-container">
                    <img src='https://imagenes.elpais.com/resizer/v2/UTNBLPGKLFMIHMSOEHKTMMFU7A.jpg?auth=4625799d1b99c8e1e2c65079f6abbbb8a8ed6e2127f3835a74893c26e06a1910&width=1200' alt='Venue Logo' width={130} height={130} />
                    <h2>Santiago Bernabeu Stadium</h2>
                    <div className="location-info">
                        <p>Capacity: 81,044</p>
                        <p><ClockIcon strokeColor='var(--light-color-gray)' /> 10:00 AM - 11:00 PM</p>
                        <p><EmailIcon strokeColor='var(--light-color-gray)' /> realm@example.com</p>
                        <p><LocationIcon strokeColor='var(--light-color-gray)' />Av. de Concha Espina, 1, 28036 Madrid, Spain</p>
                        {/* TODO: Implementar esto en lugar de hardcodear las variables `https://www.google.com/maps/search/?api=1&query=${lat},${long}` */}
                        <a href={`https://www.google.com/maps/search/?api=1&query=${40.4531},${-3.6883}`} className='direction-link' target='_blank'> <CurrentLocationIcon fillColor='white' /> Take me there</a>
                    </div>
                </div>
                <div className="middle-container">
                    <h2>Santiago Bernabeu Stadium</h2>
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} isVenueEventPage />
                    ))}
                </div>
                <div className="right-side-container">
                    <div className="right-side-header">
                        <p className='title'>Venue Information</p>
                        <p>Find out more about the venue, its history, and upcoming events.</p>
                    </div>
                    <div className="venue-info">
                        <p>The Santiago Bernabéu Stadium is the home of Real Madrid, one of the most prestigious football clubs in the world. It has a rich history and hosts numerous events throughout the year.</p>
                        <p>For more information, visit the official website or contact us via email.</p>
                    </div>

                </div>
            </div>
        </Layout>
    )
}
