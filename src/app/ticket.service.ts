import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TicketType } from './enum/ticketType';
import { Ticket } from './models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  free_subject: BehaviorSubject<Ticket> = new BehaviorSubject<Ticket>({ type: TicketType.Free, price: 0, count: 0 });
  base_subject: BehaviorSubject<Ticket> = new BehaviorSubject<Ticket>({ type: TicketType.Base, price: 20000, count: 0 });
  vip_subject: BehaviorSubject<Ticket> = new BehaviorSubject<Ticket>({ type: TicketType.Vip, price: 35000, count: 0 });


  constructor() {
  }

  get observableOfFree(): Observable<Ticket> {
    return this.free_subject.asObservable();
  }

  get observableOfBase(): Observable<Ticket> {
    return this.base_subject.asObservable();
  }

  get observableOfVip(): Observable<Ticket> {
    return this.vip_subject.asObservable();
  }
}
