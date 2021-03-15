import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { canComponentDeactivate } from 'src/app/authGaurd/canDeactivateGaurd.service';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['payment.component.css'],
})
export class paymentComponent implements canComponentDeactivate {
  constructor(private router: Router) {}
  paymentDone = false;

  payAmount() {
    this.paymentDone = true;
    this.router.navigate(['/dashboard']);
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.paymentDone == false) {
      return confirm('payment not done, still want to navigate?');
    } else {
      return true;
    }
  }
}
