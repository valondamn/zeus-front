import {Component, Inject} from '@angular/core';
import {Order} from "../../interfaces/order.intarface";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Order) {}

}
