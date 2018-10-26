import { Component, OnInit } from '@angular/core';

import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';
  
  constructor() {}
  
  ngOnInit() {

  }

}
