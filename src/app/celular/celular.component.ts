import { Component, OnInit } from '@angular/core';
import { CelserviceService } from './celservice.service';
import { Produto } from "./celulares/celular.model";


@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.css']
})
export class CelularComponent implements OnInit {

  produtos:Produto[] = [];

  constructor(private celserviceService: CelserviceService) { }

  ngOnInit(): void {
    this.celserviceService.list().
    subscribe(dados => this.produtos = dados);
  }

}
