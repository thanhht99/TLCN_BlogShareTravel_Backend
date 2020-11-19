import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers';

import {CreatetourComponent} from './createtour/createtour.component';

const customerModule = () => import('./customer/customer.module').then(x => x.CustomerModule);
const tourguideModule = () => import('./tour-guide/tour-guide.module').then(x => x.TourGuideModule);
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const tourModule = () => import('./tour/tour.module').then(x => x.TourModule);


const routes: Routes = [
  { path: 'account', loadChildren: accountModule },
  { path: 'customer', loadChildren: customerModule, canActivate: [AuthGuard] },
  { path: 'tourguide', loadChildren: tourguideModule, canActivate: [AuthGuard] },

  { path: 'tour', loadChildren: tourModule},



  { path: 'createtour', component:CreatetourComponent},
  

  // { path: 'customerinfo/:id', component: CustomerInfoComponent},
  // { path: 'tourguideinfo/:id', component: TourGuideInfoComponent},
  
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas : []
  
})
export class AppRoutingModule { }
