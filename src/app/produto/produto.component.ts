import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalprodutoComponent } from '../modalproduto/modalproduto.component';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  displayedColumns: string[] = ['name', 'value', 'functions'];
  dataSource : any;



  constructor(public dialog: MatDialog, private db : AngularFireDatabase) {

    this.dataSource = this.db.list('produtos')
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

        const dialogRef = this.dialog.open(ModalprodutoComponent, {
          width: '350px',
          data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.db.list('produtos').push(result);
        }
        });
      }
    
      delete(key: any){
        this.db.list('produtos').remove(key);
      }
    
      editar(data: any){
    
        const dialogRef = this.dialog.open(ModalprodutoComponent, {
          width: '350px',
          data
        });
        dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.db.list('produtos').update(data.key, result);
        }
        });
      }
    


  ngOnInit(): void {
  }

}
