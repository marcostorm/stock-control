import { Component, Input } from '@angular/core';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProducts';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: []
})
export class ProductsTableComponent {
  @Input() products: Array<GetAllProductsResponse> = [];

  public productSelected!: GetAllProductsResponse;

}
