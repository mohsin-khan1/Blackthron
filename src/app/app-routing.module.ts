import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketMainComponent } from './ticket-information/ticket-main/ticket-main.component';
import { TicketListScreenComponent } from './ticket-list/ticket-list-screen/ticket-list-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: TicketListScreenComponent
  },
  {
    path: 'info',
    component: TicketMainComponent
  } 
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
