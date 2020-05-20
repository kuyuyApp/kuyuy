import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map, finalize } from 'rxjs/operators';
import { IProduct } from "../../shared/models/product.interface";
import { IFile } from "../../shared/models/file.interface";
import { AngularFireStorage } from "@angular/fire/storage";
import { ProductCreateComponent } from './product-create/product-create.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private filePath : any;
  private downloadURL : Observable<string>;

  constructor(private afs:AngularFirestore,
              private storage:AngularFireStorage) { }

  public getAllProducts() : Observable<IProduct[]>
  {
    return this.afs.collection('products').snapshotChanges()
              .pipe(
                map(res => 
                  res.map(element => {
                    const data = element.payload.doc.data() as IProduct;
                    const id = element.payload.doc.id;
                    return {id, ...data};
                  })
                )
              )
  }

  public getSingleProduct(id:IProduct) : Observable<IProduct>
  {
    return this.afs.doc<IProduct>(`products/${id}`).valueChanges();
  }

  private uploadImageProduct(product:IProduct, image:IFile)
  {
    this.filePath = `products-images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(imageUrl => {
              this.downloadURL = imageUrl;
            
              this.createProduct(product);
            });
          })
    ).subscribe();
  }

  private createProduct(product:IProduct)
  {
    const productObj = {
      name: product.name,
      description: product.description,
      price: product.price,
      cantity: product.cantity,
      image: this.downloadURL,
      owner: product.owner,
      category: product.category,
      fileRef: this.filePath
    };

    this.afs.collection<IProduct>('products').add(productObj)
  }

  public setProduct(product:IProduct, imageFile:IFile)
  {
      this.uploadImageProduct(product, imageFile);
  }
}
