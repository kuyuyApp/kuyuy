import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduct } from '../../../shared/models/product.interface';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  private image:any;
  uid;

  durationInSeconds = 5;

  constructor(private productService:ProductService,
              private _snackBar: MatSnackBar,
              public auth:AuthService
            ) { }

  public newProductForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    cantity: new FormControl('1'),
    image: new FormControl('', Validators.required),
    category: new FormControl(''),
  })

  async ngOnInit() {
    this.uid = await this.auth.getCurrentUserId();
  }
  
  handleImage(event:any) : void
  {
    this.image = event.target.files[0];
  }

  async createProduct(product:IProduct)
  {
    const owner = this.uid;
    product = {...product, owner}

    try
    {
      await this.productService.setProduct(product, this.image);
      await this.openSnackBar('true');
    }
    catch(e)
    {
      console.log(e);
    }
  }

  openSnackBar(valid) {
    if(valid === 'true')
      this._snackBar.openFromComponent(AlertComponent, {
        duration: this.durationInSeconds * 1000,
    });
  }

}
  @Component({
    selector: 'snack-bar-component-snack',
    templateUrl: 'snack-bar-component-snack.html',
    styles: [`
      .party {
        color: hotpink;
      }
    `],
  })
  export class AlertComponent {}
