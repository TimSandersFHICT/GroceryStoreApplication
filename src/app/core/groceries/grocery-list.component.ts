import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-grocery-list',
  template: `
  <div [sortablejs]="products" style="margin: 15px;">
    <div class="grocery row" *ngFor="let product of products">
      <div class="col-8 text-left">
      <b>{{ product.name }}</b> <span class="ml-2 text-muted">({{ product.amount }})</span>
      </div>
      <div class="col-4 text-right align-middle">
        <input class="form-check-input mr-3" style="width: 23px; height: 21px;"
 type="checkbox" value="" id="defaultCheck1">
        <button type="button " class="btn ml-2 btn-sm btn-danger"
        (click)="this.removeFromList(product)" style="padding: 0px 5px;color: #fff">🞮</button>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .grocery {
      border: 1px solid #ccc;
      margin-bottom: 1px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  `]
})
export class GroceryListComponent {
  @Input() products: Product[];

  constructor() { }

  removeFromList(product: Product) {
    this.products = this.products.filter(obj => obj !== product);
  }

}
