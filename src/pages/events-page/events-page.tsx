import "./events-page.css"
import { Layout } from "../../components/layout/layout"
import { EventCard } from "../../components/events-card/events-card";

export type Event = {
    id: string;
    name: string;
    date: string;
    openingTime: string;
    closingTime: string;
    venueName: string;
    imageUrl: string;
    minAge: number;
    dressCode: string;
}

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

export const EventsPage = () => {
    return (
        <Layout>
            <div className="events-container">
                <h2>Choose an Event</h2>
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </Layout>
    )
}