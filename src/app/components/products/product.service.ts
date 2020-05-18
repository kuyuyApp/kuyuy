import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { IProduct } from "../../shared/models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private afs:AngularFirestore) { }

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
}
