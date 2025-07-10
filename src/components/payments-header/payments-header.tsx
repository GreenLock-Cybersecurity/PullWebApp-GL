import { NavLink } from "react-router-dom"
import { CalendarIcon, ClockIcon, LocationIcon, GoBackIcon } from "../../icons/icons"
import './payments-header.css'

export const PrePaymentHeader = ({ url }: { url: string }) => {

    return (
        <>
            <div className="pre-payment-header">
                <NavLink to={url} className="pre-payment-header-link"><GoBackIcon strokeColor="white" /></NavLink>
                <p>Aitana Concert - Summer Tour at Wanda Metropolitano</p>
            </div>
            <div className="event-info-sum-up">
                <img src="https://d2cyzdatssrhg7.cloudfront.net/export/sites/default/ets/.content/products/img/00-00087Zm.jpg?__locale=es" alt="Aitana Concert - Summer Tour" width={80} />
                <div>
                    <p><CalendarIcon strokeColor="var(--light-color-gray)" /> <span>MONDAY</span>, September 15, 2025</p>
                    <p><ClockIcon strokeColor="var(--light-color-gray)" /> 19:00 - 22:00</p>
                    <p><LocationIcon strokeColor="var(--light-color-gray)" /> Wanda Metropolitano Stadium</p>
                </div>
            </div>
            <h2>Aitana Concert - Summer Tour</h2>
        </>
    )
}