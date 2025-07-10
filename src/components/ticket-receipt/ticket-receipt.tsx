import { NavLink } from 'react-router-dom'
import type { TicketDetails } from '../../pages/event-detailed-page/event-detailed-page'
import './ticket-receipt.css'

export const TicketReceipt = (
    { quantity, ticketDetails, url, buttonText, isNavigationLink, onConfirm }
        :
        {
            quantity: number,
            ticketDetails: TicketDetails,
            url: string,
            buttonText: string,
            isNavigationLink: boolean
            onConfirm?: () => void
        }
) => {
    return (
        <div className="ticket-receipt">
            <div className="receipt-container">
                <div className="title">Ticket Receipt</div>
                <div className="separator" />
                <div className="receipt-details">
                    <div>
                        <p>{quantity}*{ticketDetails.name} ({ticketDetails.price})</p>
                        <p>Q {quantity * ticketDetails.price}</p>
                    </div>
                    <div>
                        <p>Management</p>
                        <p>Q {quantity * 8.75}</p>
                    </div>
                </div>
                <div className="separator" />
                <div className="receipt-total">
                    <p>Total</p>
                    <p>Q {quantity * ticketDetails.price + quantity * 8.75}</p>
                </div>
            </div>
            {/* `/events/${ticketDetails.eventId}/tickets/${ticketTypeId}/${quantity}` */}
            {isNavigationLink ?
                <NavLink to={url} className="receipt-button">{buttonText}</NavLink>
                :
                <button className="receipt-button" onClick={onConfirm}>
                    {buttonText}
                </button>
            }
        </div>
    )
}