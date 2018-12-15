import { RouterModule, Routes } from '@angular/router';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { AddCashFlowComponent } from './add-cash-flow/add-cash-flow.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import {OptyComponent} from './opty/opty.component';
import {AssetComponent} from './asset/asset.component';

const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent,
    children: [
        { path: 'opty', component: OptyComponent },
        { path: 'asset', component: AssetComponent },
        { path: 'summary', component: CashFlowComponent },
      { path: 'add-cash-flow', component: AddCashFlowComponent }
    ]
  }
];



@NgModule({

  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
