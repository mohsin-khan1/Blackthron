import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketListScreenComponent } from './ticket-list/ticket-list-screen/ticket-list-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { TicketSummaryComponent } from './ticket-list/ticket-summary/ticket-summary.component';
import { TicketListComponent } from './ticket-list/ticket-list/ticket-list.component';
import { TicketInfoComponent } from './ticket-information/ticket-info/ticket-info.component';
import { TicketMainComponent } from './ticket-information/ticket-main/ticket-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [
    AppComponent,
    TicketListScreenComponent,
    TicketSummaryComponent,
    TicketListComponent,
    TicketInfoComponent,
    TicketMainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    FontAwesomeModule,
    MatInputModule
    
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
