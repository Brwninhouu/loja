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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CelularComponent,
    ClienteComponent,
    CelularesComponent,
    AcessorioComponent,
    AcessoriosComponent
  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule
  ],




  providers: [CelserviceService, AcessorioService],

  bootstrap: [AppComponent]
})


export class AppModule { }
