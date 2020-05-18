import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../../../shared/models/product.interface';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllService();
  }

  getAllService()
  {
    return this.productService.getAllProducts().subscribe(res => {
      console.log('posts', res)
      this.products = res;
    })
  }
}
