import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  orderForm: FormGroup;

  @Output() orderAdded = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.orderForm = this.fb.group({
      name: [''],
      quantity: [0],
      price_per_unit: [0],
    });
  }

  addOrder() {
    this.http.post('http://localhost:3000/orders', this.orderForm.value).subscribe(() => {
      this.orderAdded.emit();
      this.orderForm.reset();
    });
  }

}
