import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

  public items=JSON.parse(localStorage.getItem("items"));

  test
  title: string
  secondaryText: string
  done: boolean

  constructor() { }

  ngOnInit(): void {
     let items=[]
    if (!localStorage.getItem('items')){
      localStorage.setItem('items', JSON.stringify(items));
    }
  }


  public newTask;


  public updateItem(index) {
      this.newTask = {
      title: this.title,
      secondaryText: this.secondaryText,
      done: false
    }
      this.items[index] = this.items
      localStorage.setItem('items', JSON.stringify(this.items))
    window.location.reload();
  }

}
