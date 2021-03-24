import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/ticket.service';
import { TicketListComponent } from '../ticket-list/ticket-list.component'

@Component({
  selector: 'app-ticket-summary',
  templateUrl: './ticket-summary.component.html',
  styleUrls: ['./ticket-summary.component.css']
})
export class TicketSummaryComponent implements OnInit {

  freeObservable: Observable<Ticket>;
  baseObservable: Observable<Ticket>;
  vipObservable: Observable<Ticket>;

  tax: number = 289;

  constructor(private ticketService: TicketService) {
    this.freeObservable = this.ticketService.observableOfFree;
    this.baseObservable = this.ticketService.observableOfBase;
    this.vipObservable = this.ticketService.observableOfVip;
  }

  ngOnInit(): void {
  }

  getTotalCost(amount, price) {
    return amount * price;
  }

  getTotal(free_ticket_obj, base_ticket_obj, vip_ticket_obj) {
    const total = this.getSubTotal(free_ticket_obj, base_ticket_obj, vip_ticket_obj) + this.tax;
    return total;
  }

  getSubTotal(free_ticket_obj, base_ticket_obj, vip_ticket_obj) {
    let free_total = free_ticket_obj.count * free_ticket_obj.price;
    let base_total = base_ticket_obj.count * base_ticket_obj.price;
    let vip_total = vip_ticket_obj.count * vip_ticket_obj.price;

    return free_total + base_total + vip_total;
  }
}
