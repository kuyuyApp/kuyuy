import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../../../shared/models/product.interface';
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "../../../shared/components/modal/modal.component";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products;

  constructor(private productService:ProductService,
              public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts()
  {
    return this.productService.getAllProducts().subscribe(res => {
      this.products = res;
    })
  }

  createProduct()
  {
    this.openDialog();
  }

  editProduct(product : IProduct)
  {
    this.openDialog(product);
  }

  openDialog(product? : IProduct)
  {

    const config = {
      data: {
        message: product ? 'Editar Producto' : 'Crear Producto',
        content: product
      }
    };

    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }
}