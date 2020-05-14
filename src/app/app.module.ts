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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdentifyComponent,
    LoginComponent,
    RegisterComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    ProductCreateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
