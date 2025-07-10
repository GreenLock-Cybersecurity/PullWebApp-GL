import { useParams } from "react-router-dom"
import { Layout } from "../../components/layout/layout"
import './pre-purchase-page.css'
import { MinusIcon, PlusIcon } from "../../icons/icons";
import { useState } from "react";
import { DivTicketTypeCard } from "../../components/ticket-type-card/div-ticket-type-card";
import type { TicketDetails } from "../event-detailed-page/event-detailed-page";
import { PrePaymentHeader } from "../../components/payments-header/payments-header";
import { TicketReceipt } from "../../components/ticket-receipt/ticket-receipt";

const ticketDetails: TicketDetails = {
    id: '1',
    eventId: '3',
    name: 'Early Bid',
    price: 125,
    description: 'Pre order your ticket at a discounted price.',
    availability: 100
}

export const PrePurchasePage = () => {

    const { eventId, ticketTypeId } = useParams<{ eventId: string, ticketTypeId: string }>();

    const [quantity, setQuantity] = useState<number>(1);

    const url = `/event/${eventId}`;

    return (
        <Layout>
            <div className="pre-payment-container">
                <PrePaymentHeader url={url} />
                <div className="selection-ticket-container">
                    <div className="ticket-options">
                        <DivTicketTypeCard ticket={ticketDetails} />
                        <div className="quantity-selector">
                            <p>Choose the quantity</p>
                            <div className="quantity-options">
                                <button
                                    onClick={() => { quantity > 1 ? setQuantity(quantity - 1) : 1 }}
                                    disabled={quantity === 1}
                                >
                                    <MinusIcon strokeColor="var(--light-color-gray)" />
                                </button>
                                <p>{quantity}</p>
                                <button
                                    onClick={() => { setQuantity(quantity + 1) }}
                                ><PlusIcon strokeColor="var(--light-color-gray)" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="payment-container">
                        <TicketReceipt
                            quantity={quantity}
                            ticketDetails={ticketDetails}
                            url={`/event/${ticketDetails.eventId}/tickets/${ticketTypeId}/${quantity}`}
                            isNavigationLink
                            buttonText="Pay"
                        />
                    </div>
                </div>
            </div>
        </Layout >
    )
}