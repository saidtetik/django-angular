import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TravelDetailComponent} from "./travel-detail/travel-detail.component";
import {TravelListComponent} from "./travel-list/travel-list.component";
import {LoginComponent} from "./login/login.component";




const routes: Routes = [
  {path: 'travel/:id', component: TravelDetailComponent},
  {path: '', redirectTo:'/login',  pathMatch: 'full'},
  {path: 'travels', component: TravelListComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
