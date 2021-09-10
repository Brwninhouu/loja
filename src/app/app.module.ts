import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CelularComponent } from './celular/celular.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CelularesComponent } from './celular/celulares/celulares.component';
import { CelserviceService } from "./celular/celservice.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AcessorioComponent } from './acessorio/acessorio.component';
import { AcessoriosComponent } from './acessorio/acessorios/acessorios.component';
import { AcessorioService } from './acessorio/acessorio.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalclienteComponent } from './modalcliente/modalcliente.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CelularComponent,
    ClienteComponent,
    CelularesComponent,
    AcessorioComponent,
    AcessoriosComponent,
    ModalclienteComponent
    
  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAyBqd8rs-L7z_H5U2ZkhIdc-xBHDLvR2Y",
  authDomain: "brunoscript.firebaseapp.com",
  databaseURL: "https://brunoscript-default-rtdb.firebaseio.com",
  projectId: "brunoscript",
  storageBucket: "brunoscript.appspot.com",
  messagingSenderId: "397245791285",
  appId: "1:397245791285:web:cf6f57b33390efc6b4c57c",
  measurementId: "G-JWPCYMDBNY"
    })
  ],

  entryComponents:[ModalclienteComponent],

  providers: [CelserviceService, AcessorioService],

  bootstrap: [AppComponent]
})


export class AppModule { }
