import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-add-form',
  template: `
  <form (ngSubmit)="addProduct()" #itemForm="ngForm">
  <div class="form-row">
    <div class="col-12 text-left">
    <p class="mb-1 font-weight-bold">Add new item</p>
    </div>
    <div class="col-8">
      <input
        [ngClass]="{
          'is-invalid': product.name === '' && formSubmitted
        }"
        required
        [(ngModel)]="product.name"
        name="name"
        #name="ngModel"
        type="text"
        class="form-control"
        placeholder="Name">
    </div>
    <div class="col-4">
      <input
        type="number"
        class="form-control"
        placeholder="Amount"
        [(ngModel)]="product.amount"
        name="amount"
        required
        #name="ngModel"
        >
    </div>
  </div>
  <div class="form-row pt-2">
    <div class="col-12">
      <button type="button" (click)="addProduct()" class="btn btn-primary btn-block mb-2">Submit</button>
    </div>
  </div>
</form>

  `
})
export class AddFormComponent implements OnInit {
  @Input() products: Product[];
  formSubmitted = false;
  @ViewChild('itemForm') itemForm;
  product: Product;

  constructor() {
    this.product = {id: 1, name: '', amount: 1 };
  }

  ngOnInit(): void { }

  addProduct() {
    this.formSubmitted = true;
    if (this.itemForm.valid) {
    this.products.push({id: 1, name: this.product.name, amount: this.product.amount});
    this.product = {id: 1, name: '', amount: 1 };
    this.formSubmitted = false;
    }
  }
}
