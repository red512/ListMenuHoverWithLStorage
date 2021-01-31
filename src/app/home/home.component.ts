import { UpdateDialogComponent } from './../update-dialog/update-dialog.component';
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
  index: number = 0
  updatedTask

  constructor(public dialog: MatDialog ){}

  items = JSON.parse(localStorage.getItem("items"));


  ngOnInit(): void {
    let items=[]
    if (!localStorage.getItem('items')){
      localStorage.setItem('items', JSON.stringify(items));
    }
 }

  removeItem( index ) {
    // this.items.splice(index, index)
    console.log(index);
    console.log(JSON.stringify(this.items[index]))
    // localStorage.removeItem(this.items[index])
    this.items.splice(index, 1);
    console.log("-------------------------");
    console.log(this.items);
    localStorage.setItem('items', JSON.stringify(this.items));


   }


  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent);

  }
  openDialogUpdate() {
    let dialogRef = this.dialog.open(UpdateDialogComponent);

  }


}
