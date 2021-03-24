import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TicketService } from 'src/app/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})

export class TicketListComponent implements OnInit {
  free_ticket: number = 0;
  base_ticket: number = 0;
  vip_ticket: number = 0;

  constructor(private ticketService: TicketService
  ) {
    this.free_ticket = this.ticketService.free_subject.value.count;
    this.base_ticket = this.ticketService.base_subject.value.count;
    this.vip_ticket = this.ticketService.vip_subject.value.count;
  }

  ngOnInit(): void {
    // this.ticketService.subject.next(this.selectedDay); 

  }
  selectChangeHandlerFree(event: any) {
   
    // this.selectedDay

    // this.ticketService.subject.next(this.selectedDay);
    let ticket = this.ticketService.free_subject.value;
    ticket.count = this.free_ticket; 
    this.ticketService.free_subject.next(ticket);
  }

  selectChangeHandlerBase(event: any) {
   
    // this.selectedDay

    // this.ticketService.subject.next(this.selectedDay);
    let ticket = this.ticketService.base_subject.value;
    ticket.count = this.base_ticket; 
    this.ticketService.base_subject.next(ticket);
  }

  selectChangeHandlerVip(event: any) {
   
    // this.selectedDay

    // this.ticketService.subject.next(this.selectedDay);
    let ticket = this.ticketService.vip_subject.value;
    ticket.count = this.vip_ticket; 
    this.ticketService.vip_subject.next(ticket);
  }

  
  
}