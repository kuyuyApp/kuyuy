import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IdentifyComponent } from './components/identify/identify.component';

import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';


const routes: Routes = [
                        {path:'', redirectTo: '/home', pathMatch: 'full'},
                        { path: 'products', loadChildren: () => import('./components/products/product-list/product-list.module').then(m => m.ProductListModule) },
                        { path: 'products/:id', component: ProductDetailComponent},
                        { path: 'identify', component: IdentifyComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
