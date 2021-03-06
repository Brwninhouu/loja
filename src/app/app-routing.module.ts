import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularComponent } from './celular/celular.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { AcessorioComponent } from './acessorio/acessorio.component';
import { ProdutoComponent } from './produto/produto.component';
const routes: Routes = [


{ path:'celular',component:CelularComponent },
{ path:'cliente',component:ClienteComponent },
{ path:'home',component:HomeComponent },
{ path:'acessorio',component:AcessorioComponent },
{ path:'produto',component:ProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

