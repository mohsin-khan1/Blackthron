import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  form = {
    first_name: '',
    last_name: '',
    email: '',
  }

  validity = {
    first_name: true,
    last_name: true,
    email: true,
  }

  constructor() { }

  ngOnInit(): void {
  }
  isValid() {
    // Clear Validation
    this.validity.first_name = true;
    this.validity.last_name = true;
    this.validity.email = true;
    // Required Checks 
    this.validity.first_name = this.form.first_name === '' ? false : true;
    this.validity.last_name = this.form.last_name === '' ? false : true;
    this.validity.email = this.form.email === '' ? false : true;

    // Email Check
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.validity.email = re.test(String(this.form.email).toLowerCase()) === false ? false : true;
  }

}
