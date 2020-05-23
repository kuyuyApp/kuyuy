import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdentifyComponent } from './components/identify/identify.component';
import { LoginComponent } from './components/identify/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterComponent } from './components/identify/register/register.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductDetailComponent } from "./components/products/product-detail/product-detail.component";
import { ProductListRoutingModule } from "./components/products/product-list/product-list-routing.module";
import { ModalComponent } from './shared/components/modal/modal.component';

//firebase
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from '../environments/environment';

//flexLayout
import { FlexLayoutModule } from "@angular/flex-layout";

import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdentifyComponent,
    LoginComponent,
    RegisterComponent,
    ProductCreateComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ModalComponent,
    ProductEditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFireStorageModule,
    ProductListRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule 
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    {provide: Storage, useValue:'gs://kuyuy-a261e.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
