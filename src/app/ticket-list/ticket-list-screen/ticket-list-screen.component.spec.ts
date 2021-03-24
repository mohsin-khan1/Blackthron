import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListScreenComponent } from './ticket-list-screen.component';

describe('TicketListScreenComponent', () => {
  let component: TicketListScreenComponent;
  let fixture: ComponentFixture<TicketListScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketListScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
