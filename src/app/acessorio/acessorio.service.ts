import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produto } from "./acessorios/acessorio.model";
import { CELUTOP_API } from "../app.api";


@Injectable({
  providedIn: 'root'
})
export class AcessorioService {

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Produto[]>(`${CELUTOP_API}/acessorios`);
  }
}
