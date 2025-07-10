import { NavLink } from 'react-router-dom'
import { ShoppingCartIcon } from '../../icons/icons'
import type { TicketDetails } from '../../pages/event-detailed-page/event-detailed-page'
import './ticket-type-card.css'

export const TicketTypeCard = ({ ticket }: { ticket: TicketDetails }) => {
    return (
        <NavLink to={`/event/${ticket.eventId}/tickets/${ticket.id}`} className="ticket-type-card-container">
            <div className="header-ticket-card">
                <div>
                    <h3>{ticket.name}</h3>
                    {ticket.availability < 15 && <p className="availability">¡Quedan pocas entradas! {ticket.availability} disponibles</p>}
                </div>
                <p className="price">Q {ticket.price.toFixed(2)}</p>
            </div>
            <div>
                <p className="description">{ticket.description}</p>
                {/* TODO: Botón que redirija a la compra de la entrada ahora lo simulo con un div estilado */}
                <div className='buy-ticket-button'><ShoppingCartIcon strokeColor='#fff' /> Buy</div>
            </div>
        </NavLink>
    )
}