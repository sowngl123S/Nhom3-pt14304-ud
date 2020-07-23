import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserbyManagerComponent } from './create-userby-manager/create-userby-manager.component';

const routes: Routes = [

  {path:'createUserbyManager',component:CreateUserbyManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

