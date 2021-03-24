import { TicketType } from "../enum/ticketType";

export interface Ticket {
    type: TicketType;
    count: number;
    price: number;
}