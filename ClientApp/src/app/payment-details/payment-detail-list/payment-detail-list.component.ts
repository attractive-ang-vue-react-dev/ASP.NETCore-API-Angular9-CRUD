import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from './../../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [
  ]
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(PMId)
      .subscribe(res => {
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
      );
    }
  }
}
