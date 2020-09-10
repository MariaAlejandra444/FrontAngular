import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private productsService: ProductsService, private orderService: OrderService) { }

  ngOnInit(): void {
  }

  public products: any[] = [];


  getProducts() {

    this.productsService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    }, error => {
      console.log(error);
    }
    );

  }

  putOrder(id_ref, units, price) {
    console.log(id_ref,units, price);
    var eachProduct =
    {
      "id_ref": id_ref,
      "id_customer": "102030",
      "customer_name": "John Alejandro",
      "price": price,
      "units": units
    };
    console.log(eachProduct);
    this.orderService.putOrders(eachProduct).subscribe(data => {
      console.log(data);

    }, error => {
      console.log(error);
    });

  }
}
