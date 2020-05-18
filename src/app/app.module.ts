import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdentifyComponent } from './components/identify/identify.component';
import { LoginComponent } from './components/identify/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { RegisterComponent } from './components/identify/register/register.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductCreateModule } from './components/products/product-create/product-create.module';
import { ProductDetailComponent } from "./components/products/product-detail/product-detail.component";
import { ProductListRoutingModule } from "./components/products/product-list/product-list-routing.module";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

//flexLayout
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdentifyComponent,
    LoginComponent,
    RegisterComponent,
    ProductCreateComponent,
    ProductCreateComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    ProductCreateModule,
    AngularFirestoreModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFireStorageModule,
    ProductListRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: Storage, useValue:'gs://kuyuy-a261e.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
