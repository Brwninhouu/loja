import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modalproduto',
  templateUrl: './modalproduto.component.html',
  styleUrls: ['./modalproduto.component.css']
})
export class ModalprodutoComponent {

  public ModalData = {name:null , value:null}


  constructor(
    public dialogRef: MatDialogRef<ModalprodutoComponent>,
  
    @Inject(MAT_DIALOG_DATA) public data: any) {
  
     Object.assign(this.ModalData, data);
     
    }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  }