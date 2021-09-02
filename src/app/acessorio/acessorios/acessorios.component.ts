import { Component, Input, OnInit } from '@angular/core';
import { Produto } from "./acessorio.model";


@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.css']
})
export class AcessoriosComponent implements OnInit {

  @Input() produto:any;

  constructor() { }

  ngOnInit(): void {
  }

}
