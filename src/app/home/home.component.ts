import { DialogExampleComponent } from './../dialog-example/dialog-example.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  title: string
  secondaryText: string

  constructor(public dialog: MatDialog ){}

  items = JSON.parse(localStorage.getItem("items"));


  ngOnInit(): void {
    let items=[]
    if (!localStorage.getItem('items')){
      localStorage.setItem('items', JSON.stringify(items));
    }
 }

  removeItem( ) {
   }


  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent);

  }


}
