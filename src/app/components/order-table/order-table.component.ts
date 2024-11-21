import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../interfaces/order.intarface";
import {OrderDetailComponent} from "../order-detail/order-detail.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {
  orders: Order[] = [];
  displayedColumns: string[] = ['name', 'quantity', 'price', 'actions'];

  constructor(private orderService: OrdersService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.loadOrders();
    });
  }

  viewOrder(order: Order) {
    this.dialog.open(OrderDetailComponent, {
      width: '400px',
      data: order, // Передача данных в модальное окно
    });
  }
}
