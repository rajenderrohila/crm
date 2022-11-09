import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid-invoice',
  templateUrl: './paid-invoice.component.html',
  styleUrls: ['./paid-invoice.component.scss']
})
export class PaidInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list:any = [
    {BillNo:"NTPL0171", amount:"705.60"},
    {BillNo:"NTPL0172", amount:"705.60"},
    {BillNo:"NTPL0173", amount:"605.60"},
    {BillNo:"NTPL0174", amount:"705.60"},
    {BillNo:"NTPL0175", amount:"705.60"},
    {BillNo:"NTPL0176", amount:"705.60"},
    {BillNo:"NTPL0177", amount:"705.60"},
    {BillNo:"NTPL0178", amount:"905.60"},
    {BillNo:"NTPL0179", amount:"705.60"},
    {BillNo:"NTPL0180", amount:"705.60"}
  ]

}
