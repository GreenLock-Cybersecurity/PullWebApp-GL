import './venues-page.css'
import { Layout } from "../../components/layout/layout"
import { VenuesCard } from '../../components/venues-card/venues-card';

export type Venues = {
    id: string;
    name: string;
    location: string;
    open: string;
    close: string;
    image: string;
}

const venues: Venues[] = [
    {
        id: "1",
        name: "Santiago Bernabeu Stadium",
        location: "Madrid, Spain",
        open: "10:00 AM",
        close: "11:00 PM",
        image: "https://imagenes.elpais.com/resizer/v2/UTNBLPGKLFMIHMSOEHKTMMFU7A.jpg?auth=4625799d1b99c8e1e2c65079f6abbbb8a8ed6e2127f3835a74893c26e06a1910&width=1200"
    },
    {
        id: "2",
        name: "Wanda Metropolitano Stadium",
        location: "Madrid, Spain",
        open: "9:00 AM",
        close: "10:00 PM",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKrJHaJlKEvqpC8bxjr6xA3PpEo-xcRVPZQ&s"
    },
    {
        id: "3",
        name: "Teatro Barceló",
        location: "Madrid, Spain",
        open: "8:00 AM",
        close: "9:00 PM",
        image: "https://teatrobarcelo.com/wp-content/uploads/2022/03/lunes_teatrobarcelo.jpg"
    },
    {
        id: "4",
        name: "Padana Discoteca",
        location: "Madrid, Spain",
        open: "11:00 AM",
        close: "12:00 AM",
        image: "https://discotecasgratis.com/img/uploads/Property/289/PropertyPicture/large/1699614833_discoteca-padana.jpeg"
    },
    {
        id: "5",
        name: "Sala La Riviera",
        location: "Madrid, Spain",
        open: "10:00 AM",
        close: "11:00 PM",
        image: "https://discotecasgratis.com/img/uploads/Property/210/PropertyPicture/large/1634722758_image.jpg"
    }
]

export const VenuesPage = () => {
    return (
        <Layout>
            <div className="venues-container">
                <h2>Choose a Venue</h2>
                {venues.map((venue) => (
                    <VenuesCard key={venue.id} venue={venue} />
                ))}
            </div>
        </Layout>
    )
}