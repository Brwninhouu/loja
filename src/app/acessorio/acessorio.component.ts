import { Component, OnInit } from '@angular/core';
import { Produto } from "./acessorios/acessorio.model";
import { AcessorioService } from './acessorio.service';


@Component({
  selector: 'app-acessorio',
  templateUrl: './acessorio.component.html',
  styleUrls: ['./acessorio.component.css']
})
export class AcessorioComponent implements OnInit {

  produtos:Produto[] = [];


  constructor(private acessorioService: AcessorioService) { }

  ngOnInit(): void {
    this.acessorioService.list().
    subscribe(dados => this.produtos = dados);
  }

}
