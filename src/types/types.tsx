export type VenueInfo = {
    id: string;
    slug: string;
    name: string;
    venue_name: string;
    image: string;
    location: string;
    open_time: string;
    close_time: string;
}

type Requirements = {
    name: string;
    description: string;
}

export type EventInfo = {
    event_id: string;
    event_slug: string;
    event_name: string;
    venue_name: string;
    start_time: string;
    end_time: string;
    event_date: string;
    custome_location: VenueInfo;
    event_img: string;
    requirements: Requirements[];
}

export type VenueEventInfo = {
    name: string;
    capacity: number;
    email: string;
    image: string;
    open_time: string;
    close_time: string;
    long_location: string;
    latitude: number;
    longitude: number;
}

export type VenueDescription = {
    description: string;
}

export type EventDetailedInfo = {
    event_name: string;
    event_img: string;
    date: string;
    open_time: string;
    close_time: string;
    location: string;
    requirements: Requirements[];
}

export type TicketType = {
    ticket_type_id: string;
    slug: string;
    ticket_name: string;
    ticket_price: number;
    ticket_description: string;
    ticket_quantity: number;
}

export type UserInfoTicket = {
    owner_name: string;
    owner_last_name: string;
    owner_email: string;
    owner_phone: string;
    owner_dpi: string;
    owner_birthdate: string;
}

export type TicketResponse = {
    message: string;
    order_id: string;
}

export type PurchasedTicketInfo = {
    owner_full_name: string;
    owner_email: string;
    event_name: string;
    event_date: string;
    qr_token: string;
    benefits: string;
    start_time: string;
}