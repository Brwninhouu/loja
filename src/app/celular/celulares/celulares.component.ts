import { Component, OnInit, Input } from '@angular/core';
import { Produto } from "./celular.model";


@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {

  @Input() produto:any;

  constructor() { }

  ngOnInit(): void {
  }

}
