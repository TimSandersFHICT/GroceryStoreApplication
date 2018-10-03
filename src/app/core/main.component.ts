import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-main',
  template: `
  <div class="row justify-content-md-center pt-3">
    <div class="col-12 col-md-8 col-xl-5 text-center">
      <h2>Groceries 🍎🍞🥫</h2>
      <app-add-form [products]="this.products"></app-add-form>
      <app-grocery-list [products]="this.products"></app-grocery-list>
    </div>
  </div>

  `
})
export class MainComponent implements OnInit {
  products: Product[];
  constructor() { }

  ngOnInit(): void {
    this.initData();
   }

  initData(): void {
    this.products = [];
  }
}
