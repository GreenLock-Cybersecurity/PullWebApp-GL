import { CreditCardIcon } from '../../icons/icons'
import './assistant-card.css'

export const AssistantCard = ({ data }: { data: { id: string, name: string, paidAt: string | null } }) => {
    return (
        <div className="assistant-card">
            <p>{data.name}</p>
            <div className="options">
                {
                    data.paidAt === null ?
                        <button><CreditCardIcon strokeColor="white" /></button>
                        :
                        <div className='paid'><CreditCardIcon strokeColor="#4c9b78" /></div>
                }
            </div>
        </div>
    )
}