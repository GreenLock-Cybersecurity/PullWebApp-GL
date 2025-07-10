import { Layout } from '../../components/layout/layout'
import { TicketTypeCard } from '../../components/ticket-type-card/ticket-type-card';
import { HangerIcon, PlusIcon } from '../../icons/icons'
import './event-detailed-page.css'

export type TicketDetails = {
    id: string;
    eventId: string;
    name: string;
    price: number;
    description: string;
    availability: number;
}

const ticketDetails: TicketDetails[] = [
    {
        id: '1',
        eventId: '3',
        name: 'Early Bid',
        price: 125,
        description: 'Pre order your ticket at a discounted price.',
        availability: 100
    },
    {
        id: '2',
        eventId: '3',
        name: 'Primera Fase',
        price: 150,
        description: 'Includes two drinks after the 10:00 pm.',
        availability: 50
    },
    {
        id: '3',
        eventId: '3',
        name: 'VIP Experience',
        price: 200,
        description: 'VIP access with exclusive seating and 2 free drinks during the event.',
        availability: 5
    }
]

export const EventDetailedPage = () => {
    return (
        <Layout>
            <div className="detailed-event-page">
                <p className='header-bar'>Aitana Concert - Summer Tour at Wanda Metropolitano</p>
                <div className="event-header-info">
                    <img src='https://d2cyzdatssrhg7.cloudfront.net/export/sites/default/ets/.content/products/img/00-00087Zm.jpg?__locale=es' alt='Aitana summer logo' width={200} height={250} />
                    <div className="header-details">
                        <h1>Aitana Concert - Summer Tour</h1>
                        <p className="event-date">September 15, 2025 <span>From 19:00 to 22:00</span></p>
                        <p className="event-venue">Wanda Metropolitano Stadium</p>
                        <div className="restrictions">
                            <p><PlusIcon strokeColor='#101010' /> 18</p>
                            <p><HangerIcon strokeColor={'#101010'} /> Casual</p>
                        </div>
                    </div>
                </div>
                <div className="types-of-tickets">
                    <h2>Choose your type of ticket</h2>
                    {ticketDetails.map(ticket => (
                        <TicketTypeCard key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}