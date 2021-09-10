import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalclienteComponent } from '../modalcliente/modalcliente.component';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

 

  displayedColumns: string[] = ['name', 'value', 'functions'];
  dataSource : any;


  constructor(public dialog: MatDialog, private db : AngularFireDatabase) {

    this.dataSource = this.db.list('clientes')
    .snapshotChanges()
    .pipe(
      map(items =>{
        return items.map(item => {
          return Object.assign({key: item.payload.key},
            item.payload.val()
            )
        })
      }
    ))
      }


  inserir(){

    const dialogRef = this.dialog.open(ModalclienteComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
    if(result){
      this.db.list('clientes').push(result);
    }
    });
  }

  delete(key: any){
    this.db.list('clientes').remove(key);
  }

  editar(data: any){

    const dialogRef = this.dialog.open(ModalclienteComponent, {
      width: '350px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
    if(result){
      this.db.list('clientes').update(data.key, result);
    }
    });
  }







  ngOnInit(): void {
  }

}
