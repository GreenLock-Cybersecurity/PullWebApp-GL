import { useParams } from "react-router-dom"
import { Layout } from "../../components/layout/layout"
import './manage-booking-page.css'
import { ReservationHeader } from "../../components/reservation-header/reservation-header";
import { useState } from "react";
import { LoginPopUp } from "../../components/login-pop-up/login-pop-up";
import { ClockIcon } from "../../icons/icons";
import { AssistantCard } from "../../components/assistant-card/assistant-card";

const assistants = [
    {
        id: '1',
        name: 'John Doe',
        paidAt: '2023-10-01T12:00:00Z'
    },
    {
        id: '2',
        name: 'Jane Smith',
        paidAt: '2023-10-02T15:30:00Z'
    },
    {
        id: '3',
        name: 'Alice Johnson',
        paidAt: null
    },
    {
        id: '4',
        name: 'Bob Brown',
        paidAt: null
    },
    {
        id: '5',
        name: 'Charlie Davis',
        paidAt: null
    },
]

export const ManageBookingPage = () => {

    const { venueId, reservationDate } = useParams<{ venueId: string; reservationDate: string }>();

    const [isTable, setIsTable] = useState<string>('false');

    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleAdminStatusChange = (isAdmin: boolean) => {
        setIsAdmin(isAdmin);
    };

    return (
        <Layout>
            {isOpen && <LoginPopUp onClose={() => setIsOpen(false)} handleAdminStatusChange={handleAdminStatusChange} />}
            <div className="manage-booking-page-container">
                {!isAdmin && !isOpen && <button className="login-admin-button" onClick={() => setIsOpen(true)}>Login as Admin</button>}
                <ReservationHeader
                    id={venueId ? venueId : ''}
                    date={reservationDate ? reservationDate : ''}
                    table={isTable}
                    isPaymentPage
                    isWithTime
                    startTime={'20:00'}
                    endTime={'06:00'}
                />
                <p className="title-section">Assistants</p>
                <div className="booking-info">
                    <div className="assistants">
                        {assistants.map((assistant) => (
                            <AssistantCard key={assistant.id} data={assistant} />
                        ))}
                    </div>
                    <div className="booking-sum-up">
                        <p className="booking-sum-up-title">Information</p>
                        <p className="info"><ClockIcon strokeColor="white" /> Cancel free ends: 48h before</p>
                        <p className="total-pay">Total: <strong>1000 Q</strong></p>
                        <p className="info">Total paid: <strong>200 Q</strong></p>
                        <p className="info">Pending: <strong>800 Q</strong></p>
                        <div className="progress-bar">
                            <div className="progress-bar-fill" style={{ width: (1000 - 800) / 1000 * 100 + '%' }} />
                            <p>{(1000 - 800) / 1000 * 100}%</p>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}