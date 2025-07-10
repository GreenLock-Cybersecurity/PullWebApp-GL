import type { TicketDetails } from "../../pages/event-detailed-page/event-detailed-page"
import './ticket-type-card.css'

export const DivTicketTypeCard = ({ ticket }: { ticket: TicketDetails }) => {
    return (
        <div className="ticket-type-card-container div-ticket">
            <div className="header-ticket-card">
                <div>
                    <h3>{ticket.name}</h3>
                </div>
                <p className="price">Q {ticket.price.toFixed(2)}</p>
            </div>
            <div>
                <p className="description">{ticket.description}</p>
            </div>
        </div>
    )
}