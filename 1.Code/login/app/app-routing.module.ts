import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DetailComponent} from './detail/detail.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'detail',component:DetailComponent},
  { path:'home',component:HomeComponent}
  ];

  @NgModule({
    declarations: [],
    imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ],
    ],
    exports: [ RouterModule ]
    })
    export class AppRoutingModule { }
