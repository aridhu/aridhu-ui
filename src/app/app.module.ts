import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NotificationComponent } from './notification/notification.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotificationServicesService } from './notification-services.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { MyMaterialModule } from './material/material.module';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { AddCashFlowComponent } from './add-cash-flow/add-cash-flow.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    GalleryComponent,
    LoginComponent,
    CashFlowComponent,
    AddCashFlowComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MyMaterialModule,
    AppRoutingModule,
    // To initialize AngularFire
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(
      [
        { path: "", component: LoginComponent}
      ], { 
           useHash: true 
         }
    )
  ],
  providers: [
    AuthService,
    NotificationServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
