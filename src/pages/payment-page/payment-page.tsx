import { useParams } from 'react-router-dom';
import { Layout } from '../../components/layout/layout'
import { PrePaymentHeader } from '../../components/payments-header/payments-header'
import './payment-page.css'
import { TicketReceipt } from '../../components/ticket-receipt/ticket-receipt';
import type { TicketDetails } from '../event-detailed-page/event-detailed-page';
import { UserDetailsForm } from '../../components/user-details-form/user-details-form';
import { useRef } from 'react';

const ticketDetails: TicketDetails = {
    id: '1',
    eventId: '3',
    name: 'Early Bid',
    price: 125,
    description: 'Pre order your ticket at a discounted price.',
    availability: 100
}

export const PaymentPage = () => {

    const { eventId, ticketTypeId, quantity } = useParams<{ eventId: string, ticketTypeId: string, quantity: string }>();

    const url = `/event/${eventId}/tickets/${ticketTypeId}`;

    const formRef = useRef<{ submit: (onSubmit: any) => void }>(null);

    const onSubmit = (data: any) => {
        console.log("Form submitted with data:", data);
    };

    return (
        <Layout>
            <div className="payment-page-container">
                <PrePaymentHeader url={url} />
                <div className="payment-user-details">
                    <div className="user-details">
                        <UserDetailsForm quantity={Number(quantity!)} ref={formRef} />
                    </div>
                    <div className="payment-container">
                        <TicketReceipt
                            quantity={Number(quantity!)}
                            ticketDetails={ticketDetails}
                            url={``}
                            buttonText="Confirm Payment"
                            isNavigationLink={false}
                            onConfirm={() => formRef.current?.submit(onSubmit)}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}