import type { TicketType } from "../types/types";
import { apiClient } from "../utils/axios";

export const getEventDetailedInfo = async (eventId: string): Promise<any> => {
    const response = await apiClient.get<any>(`/event/get-detailed-event-info/${eventId}`);
    return response.data;
}

export const getEventTicketsTypes = async (eventId: string): Promise<TicketType[]> => {
    const response = await apiClient.get<TicketType[]>(`/event/get-tickets-types/${eventId}`);
    return response.data;
}

export const getTicketInfo = async (slug: string, ticketTypeId: string): Promise<TicketType> => {
    const response = await apiClient.get<TicketType>(`/event/get-ticket-info/${slug}/${ticketTypeId}`);
    return response.data;
}