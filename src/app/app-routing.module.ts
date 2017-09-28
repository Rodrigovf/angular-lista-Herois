import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroiDetalheComponent }from './heroi-detalhe/heroi-detalhe.component';
import { HeroisComponent }      from './herois/herois.component';
import { DashboardComponent }   from './dashboard/dashboard.component'

const routes: Routes = [
    { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'herois',       component: HeroisComponent },
    { path: 'detail/:id',   component: HeroiDetalheComponent },
    { path: 'dashboard',    component: DashboardComponent }
    
    
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}

