import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'https://localhost:44368/api';
  list: PaymentDetail[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
  }

  putPaymentDetail() {
    return this.http.put(this.rootURL + '/PaymentDetail/' + this.formData.PMId, this.formData);
  }

  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + '/PaymentDetail/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/PaymentDetail')
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
}

