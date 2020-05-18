import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../../../shared/models/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product$:Observable<IProduct>;

  constructor(private productService:ProductService,
              private route:ActivatedRoute) {


    this.getSinglePorduct();
  }

  ngOnInit(): void {
  }

  getSinglePorduct()
  {
    const idProduct = this.route.snapshot.params.id;
    this.product$ = this.productService.getSingleProduct(idProduct);
  }
}
