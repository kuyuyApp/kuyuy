import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from'@angular/forms';
import { ProductService } from '../product.service';
import { IProduct } from '../../../shared/models/product.interface';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  private image:any;
  private imageOriginal:any;

  @Input() product:IProduct;
  constructor(private productService:ProductService) { }

  editProductForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    cantity: new FormControl(''),
    image: new FormControl(''),
    owner: new FormControl(''),
    category: new FormControl('')
  });

  ngOnInit(): void {
    this.image = this.product.image;
    this.imageOriginal = this.product.image;
    this.initValuesForm();
  }

  editProduct(product:IProduct)
  {
    if(this.image === this.imageOriginal)
    {
      product.image = this.imageOriginal;
      this.productService.editProductById(product);
    }
    else
    {
      this.productService.editProductById(product, this.image);
    }
  }

  handleImage(event:any) : void
  {
    this.image = event.target.files[0];
  }

  private initValuesForm() : void
  {
    this.editProductForm.patchValue({
      id: this.product.id,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      category: this.product.category
    });
  }

}
