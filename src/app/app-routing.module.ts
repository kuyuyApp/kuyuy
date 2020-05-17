import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IdentifyComponent } from './components/identify/identify.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'identify', component: IdentifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
